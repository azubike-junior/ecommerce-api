import {
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} from 'graphql';
import Axios from 'axios';
import {
    baseUrl
} from '../../utils/variable';
import {
    reviewType
} from '../schema/productSchema';

const createReview = {
    type: reviewType,
    args: {
        product_id: {
            type: GraphQLInt
        },
        rating: {
            type: GraphQLString
        },
        review: {
            type: GraphQLString
        }
    },
    resolve(parent, args, req) {
        return Axios.post(`${baseUrl}/products/${args.product_id}`, {
            rating: args.rating,
            review: args.review
        }, {
            headers: {
                Authorization: req.headers.authorization
            }
        }).then(res => res.data.data)
    }
}

export {
    createReview
}