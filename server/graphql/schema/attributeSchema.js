import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
} from 'graphql';

const AttributeType = new GraphQLObjectType({
    name: 'attribute',
    fields: () => ({
        attribute_id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        }
    })
})

const AttributeValueType = new GraphQLObjectType({
    name: 'attribute_value',
    fields: () => ({
        attribute_value_id: {
            type: GraphQLInt
        },
        attribute_id: {
            type: GraphQLInt
        },
        value: {
            type: GraphQLString
        }
    })
})

const ProductAttributeType = new GraphQLObjectType({
    name: 'product_attribute',
    fields: () => ({
        attribute_value_id: {
            type: GraphQLInt
        },
        product_id: {
            type: GraphQLInt
        },
        attribute_value: {
            type: GraphQLString
        },
        attribute_name: {
            type: GraphQLString
        }
    })
})



export {
    AttributeType,
    AttributeValueType,
    ProductAttributeType
}