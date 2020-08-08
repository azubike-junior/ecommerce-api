import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean
} from 'graphql';

const orderType = new GraphQLObjectType({
    name: 'order',
    fields: () => ({
        order_id: {
            type: GraphQLInt
        },
        total_amount: {
            type: GraphQLString
        },
        created_on: {
            type: GraphQLString
        },
        status: {
            type: GraphQLBoolean
        },
        auth_code: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        comments: {
            type: GraphQLString
        },
        customer_id: {
            type: GraphQLInt
        },
        shipped_on: {
            type: GraphQLString
        },
        shipping_id: {
            type: GraphQLInt
        },
        tax_id: {
            type: GraphQLInt
        },
        Reference: {
            type: GraphQLString
        },
        order_details: {
            type: new GraphQLList(orderDetailType)
        }

    })
})

const orderDetailType = new GraphQLObjectType({
    name: 'order_detail',
    fields: () => ({
        order_detail_id: {
            type: GraphQLInt
        },
        attributes: {
            type: GraphQLString
        },
        quantity: {
            type: GraphQLInt
        },
        product_name: {
            type: GraphQLString
        },
        unit_cost: {
            type: GraphQLString
        },
        order_id: {
            type: GraphQLInt
        },
        product_id: {
            type: GraphQLInt
        }
    })
})

export {
    orderDetailType,
    orderType
}