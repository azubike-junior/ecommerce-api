import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} from 'graphql';

export const TaxType = new GraphQLObjectType({
    name: 'tax',
    fields: () => ({
        tax_id: {
            type: GraphQLInt
        },
        tax_type: {
            type: GraphQLString
        },
        tax_percentage: {
            type: GraphQLString
        }
    })
})