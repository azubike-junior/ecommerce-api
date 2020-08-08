import {
    shippingType
} from '../schema/shippingSchema';
import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList
} from 'graphql';
import Axios from 'axios';
import {
    baseUrl
} from '../../utils/variable';

const shippings = {
    type: new GraphQLList(shippingType),
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/shipping/regions`)
            .then(res => res.data.data)
    }
}

const shipping = {
    type: shippingType,
    args: {
        shipping_region_id: {
            type: GraphQLInt
        }
    },
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/shipping/regions/${args.shipping_region_id}`)
            .then(res => res.data.data)
    }
}

export {
    shipping,
    shippings
}