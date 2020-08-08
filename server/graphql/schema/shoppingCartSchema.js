import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLScalarType
} from 'graphql';

const shoppingCartType = new GraphQLObjectType({
    name: 'shoppingCart',
    fields: () => ({
        item_id: {
            type: GraphQLInt
        },
        cart_id: {
            type: GraphQLString
        },
        attributes: {
            type: GraphQLString
        },
        quantity: {
            type: GraphQLInt
        },
        buy_now: {
            type: GraphQLString
        },
        product_price: {
            type: GraphQLString
        },
        product_image: {
            type: GraphQLString
        },
        discounted_price: {
            type: GraphQLString
        },
        product_id: {
            type: GraphQLInt
        },
        product_name: {
            type: GraphQLString
        },
        subtotal: {
            type: GraphQLString
        },
        total: {
            type: GraphQLString
        },
        added_On: {
            type: GraphQLString
        },
        price: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        attribute: {
            type: GraphQLString
        }
    })
})

const cartType = new GraphQLObjectType({
    name: 'cart_id',
    fields: () => ({
        cart_id: {
            type: GraphQLString
        }
    })
})

// const productsInCart = new GraphQLObjectType({
//     name: 'productsInCart'
// })

export {
    shoppingCartType,
    cartType
}