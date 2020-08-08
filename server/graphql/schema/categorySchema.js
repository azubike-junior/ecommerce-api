import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLInputObjectType
} from 'graphql';
import {
    nextType,
    previousType
} from '../schema/productSchema'

const categoryType = new GraphQLObjectType({
    name: 'category',
    fields: () => ({
        category_id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        department_id: {
            type: GraphQLInt
        },
        product_id: {
            type: GraphQLInt
        }
    })
})
const categoriesType = new GraphQLObjectType({
    name: 'categories',
    fields: () => ({
        categories: {
            type: new GraphQLList(categoryType)
        },
        counts: {
            type: GraphQLInt
        },
        next: {
            type: nextType
        },
        previous: {
            type: previousType
        }
    })
})

export {
    categoriesType,
    categoryType
}