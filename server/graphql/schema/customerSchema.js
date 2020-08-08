import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
} from 'graphql';

const customerType = new GraphQLObjectType({
    name: 'customer',
    fields: () => ({
        customer_id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        address_1: {
            type: GraphQLString
        },
        address_2: {
            type: GraphQLString
        },
        city: {
            type: GraphQLString
        },
        postal_code: {
            type: GraphQLString
        },
        shipping_region_id: {
            type: GraphQLInt
        },
        credit_card: {
            type: GraphQLString
        },
        region: {
            type: GraphQLString
        },
        day_phone: {
            type: GraphQLString
        },
        mobile_phone: {
            type: GraphQLString
        },
        country: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        token: {
            type: GraphQLString
        },
    })
})

export {
    customerType
}