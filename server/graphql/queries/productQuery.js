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
    productType,
    productsType,
    reviewType
} from '../schema/productSchema'

const getProducts = {
    type: productsType,
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/products/`).then(res => res.data.data)
    }
}

const getProductsinDepartment = {
    type: productsType,
    args: {
        department_id: {
            type: GraphQLInt
        }
    },
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/products/inDepartment/${args.department_id}`).then(res => res.data.data)
    }
}

const searchProduct = {
    type: productsType,
    args: {
        query_string: {
            type: GraphQLString
        }
    },
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/products/search?query_string=${args.query_string}`).then(res => res.data.data)
    }
}

const getProduct = {
    type: productType,
    args: {
        product_id: {
            type: GraphQLInt
        }
    },
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/products/${args.product_id}`)
            .then(res => res.data.data)
    }
}

const getProductsInCategory = {
    type: productsType,
    args: {
        category_id: {
            type: GraphQLInt
        }
    },
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/products/inCategory/${args.category_id}`)
            .then(res => res.data.data)
    }
}

const getProductsReview = {
    type: productsType,
    args: {
        product_id: {
            type: GraphQLInt
        }
    },
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/products/${args.product_id}/Reviews`)
            .then(res => res.data.data)
    }
}

export {
    getProduct,
    getProducts,
    getProductsReview,
    getProductsInCategory,
    getProductsinDepartment,
    searchProduct
}