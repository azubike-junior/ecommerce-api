import {
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';
import Axios from 'axios';
import {
    baseUrl
} from '../../utils/variable';
import {
    shoppingCartType,
    cartType
} from '../schema/shoppingCartSchema'

const generateCartId = {
    type: cartType,
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/shoppingCart/generateUniqueId`)
            .then(res => res.data)
    }
}

const productsInCart = {
    type: new GraphQLList(shoppingCartType),
    args: {
        cart_id: {
            type: GraphQLString
        }
    },
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/shoppingCart/${args.cart_id}`)
            .then(res => res.data.data)
    }
}

const totalAmount = {
    type: shoppingCartType,
    args: {
        cart_id: {
            type: GraphQLString
        }
    },
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/shoppingCart/totalAmount/${args.cart_id}`)
            .then(res => res.data.data)
    }
}

const moveItemToCart = {
    type: shoppingCartType,
    args: {
        item_id: {
            type: GraphQLInt
        }
    },
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/shoppingCart/moveItem/${args.item_id}`)
            .then(res => res.data.data)
    }
}
const saveItemForLater = {
    type: shoppingCartType,
    args: {
        item_id: {
            type: GraphQLInt
        }
    },
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/shoppingCart/saveForLater/${args.item_id}`)
            .then(res => res.data.data)
    }
}
const getSavedItems = {
    type: new GraphQLList(shoppingCartType),
    args: {
        cart_id: {
            type: GraphQLString
        }
    },
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/shoppingCart/getSavedItem/${args.cart_id}`)
            .then(res => res.data.data)
    }
}
const emptyCart = {
    type: shoppingCartType,
    args: {
        cart_id: {
            type: GraphQLString
        }
    },
    resolve(parent, args) {
        return Axios.delete(`${baseUrl}/shoppingCart/empty/${args.cart_id}`)
            .then(res => res.data)
    }
}
const removeProduct = {
    type: shoppingCartType,
    args: {
        item_id: {
            type: GraphQLString
        }
    },
    resolve(parent, args) {
        return Axios.delete(`${baseUrl}/shoppingCart/removeProduct/${args.item_id}`)
            .then(res => res.data)
    }
}

export {
    generateCartId,
    productsInCart,
    totalAmount,
    moveItemToCart,
    saveItemForLater,
    getSavedItems,
    emptyCart,
    removeProduct
}