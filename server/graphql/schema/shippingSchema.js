import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql';

const shippingType = new GraphQLObjectType({
    name: 'shipping',
    fields: () => ({
        shipping_region_id: {
            type: GraphQLInt
        },
        shipping_region: {
            type: GraphQLString
        },
        shippings: {
            type: new GraphQLList(shippingsType)
        }
    })
})
const shippingsType = new GraphQLObjectType({
    name: 'shippings',
    fields: () => ({
        shipping_id: {
            type: GraphQLInt
        },
        shipping_type: {
            type: GraphQLString
        },
        shipping_cost: {
            type: GraphQLString
        },
        shipping_region_id: {
            type: GraphQLInt
        },
        message: {
            type: GraphQLString
        }
    })
})

export {
    shippingType
}