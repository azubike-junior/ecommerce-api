import {
    GraphQLInt,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';
import Axios from 'axios';
import {
    baseUrl
} from '../../utils/variable';
import {
    paymentType
} from '../schema/paymentSchema'

const makePayment = {
    type: paymentType,
    args: {
        stripeToken: {
            type: new GraphQLNonNull(GraphQLString)
        },
        order_id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        amount: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        description: {
            type: new GraphQLNonNull(GraphQLString)
        },
        currency: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(parent, args) {
        return Axios.post(`${baseUrl}/stripe/charge`, {
            stripeToken: args.stripeToken,
            order_id: args.order_id,
            amount: args.amount,
            description: args.description,
            currency: args.currency
        }).then(res => res.data)
    }
}

export {
    makePayment
}