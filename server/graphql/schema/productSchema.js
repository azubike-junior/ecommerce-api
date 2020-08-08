import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLScalarType,
} from 'graphql';

const productType = new GraphQLObjectType({
    name: 'product',
    fields: () => ({
        product_id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        price: {
            type: GraphQLString
        },
        discounted_price: {
            type: GraphQLString
        },
        image: {
            type: GraphQLString
        },
        image_2: {
            type: GraphQLString
        },
        thumbnail: {
            type: GraphQLString
        },
        display: {
            type: GraphQLString
        },
        department_id: {
            type: GraphQLInt
        },
        category_id: {
            type: GraphQLInt
        },
        query_string: {
            type: GraphQLString
        }
    })
})

const productsType = new GraphQLObjectType({
    name: 'products',
    fields: () => ({
        products: {
            type: new GraphQLList(productType)
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

const searchType = new GraphQLObjectType({
    name: 'searchRecord',
    fields: () => ({
        allSearchProducts: {
            type: new GraphQLList(productType)
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

const nextType = new GraphQLObjectType({
    name: 'next',
    fields: () => ({
        page: {
            type: GraphQLInt
        },
        limit: {
            type: GraphQLInt
        }
    })
})

const previousType = new GraphQLObjectType({
    name: 'previous',
    fields: () => ({
        page: {
            type: GraphQLInt
        },
        limit: {
            type: GraphQLInt
        }
    })
})

const reviewType = new GraphQLObjectType({
    name: 'review',
    fields: () => ({
        review_id: {
            type: GraphQLInt
        },
        rating: {
            type: GraphQLInt
        },
        review: {
            type: GraphQLString
        },
        product_id: {
            type: GraphQLInt
        },
        customer_id: {
            type: GraphQLInt
        },
    })
})



export {
    productType,
    productsType,
    nextType,
    previousType,
    reviewType,
    searchType
}