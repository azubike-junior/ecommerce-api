import {
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} from 'graphql';
import {
    shoppingCartType
} from '../schema/shoppingCartSchema'
import Axios from 'axios';
import {
    baseUrl
} from '../../utils/variable';

const addProductToCart = {
    type: new GraphQLList(shoppingCartType),
    args: {
        cart_id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        attributes: {
            type: new GraphQLNonNull(GraphQLString)
        },
        product_id: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve(parent, args) {
        return Axios.post(`${baseUrl}/shoppingCart/add`, {
            cart_id: args.cart_id,
            attributes: args.attributes,
            product_id: args.product_id
        }).then(res => res.data.data)
    }
}

const updateProductQuantityInCart = {
    type: shoppingCartType,
    args: {
        quantity: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        item_id: {
            type: GraphQLInt
        }
    },
    resolve(parent, args) {
        return Axios.put(`${baseUrl}/shoppingCart/update/${args.item_id}`, {
            quantity: args.quantity
        }).then(res => res.data.data)
    }
}
export {
    addProductToCart,
    updateProductQuantityInCart
}