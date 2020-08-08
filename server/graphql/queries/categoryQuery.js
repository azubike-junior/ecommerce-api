import {
    GraphQLInt,
    GraphQLList
} from 'graphql';
import Axios from 'axios';
import {
    baseUrl
} from '../../utils/variable';
import {
    categoriesType,
    categoryType
} from '../schema/categorySchema'

const categories = {
    type: categoriesType,
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/categories`)
            .then(res => res.data.data)
    }
}

const category = {
    type: categoryType,
    args: {
        category_id: {
            type: GraphQLInt
        }
    },
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/categories/${args.category_id}`)
            .then(res => res.data.data)
    }
}

const productCategory = {
    type: categoryType,
    args: {
        product_id: {
            type: GraphQLInt
        }
    },
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/categories/inProduct/${args.product_id}`)
            .then(res => res.data.data)
    }
}

const categoryInDepartment = {
    type: new GraphQLList(categoryType),
    args: {
        department_id: {
            type: GraphQLInt
        }
    },
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/categories/inDepartment/${args.department_id}`)
            .then(res => res.data.data)
    }
}


export {
    categories,
    category,
    productCategory,
    categoryInDepartment
}