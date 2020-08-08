import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
} from 'graphql';

const paymentType = new GraphQLObjectType({
    name: 'payment',
    fields: () => ({
        order_id: {
            type: GraphQLInt
        },
        stripeToken: {
            type: GraphQLString
        },
        amount: {
            type: GraphQLInt
        },
        currency: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        message: {
            type: GraphQLString
        }
    })
})


export {
    paymentType
}