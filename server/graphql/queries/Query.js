import {
    GraphQLObjectType
} from 'graphql';
import {
    taxes,
    tax
} from './taxQuery'
import {
    attribute,
    attributes,
    attributeValue,
    productAttribute
} from './attributeQuery'
import {
    shipping,
    shippings
} from './shippingQuery'
import {
    departments,
    department
} from '../queries/departmentQuery'
import {
    categories,
    category,
    productCategory,
    categoryInDepartment
} from '../queries/categoryQuery'
import {
    generateCartId,
    productsInCart,
    totalAmount,
    moveItemToCart,
    saveItemForLater,
    getSavedItems,
    emptyCart,
    removeProduct
} from './shoppingCartQuery'
import {
    getCustomerOrder,
    getOneOrder,
    getOrderDetail
} from './orderQuery'
import {
    getCustomer
} from '../queries/customerQuery'
import {
    getProduct,
    getProductsinDepartment,
    getProductsInCategory,
    getProductsReview,
    getProducts,
    searchProduct
} from './productQuery'
import {
    updateCustomerBioData
} from '../mutations/customer'

export const query = new GraphQLObjectType({
    name: 'Queries',
    fields: {
        attribute,
        attributes,
        attributeValue,
        productAttribute,
        taxes,
        tax,
        shipping,
        shippings,
        department,
        departments,
        categories,
        category,
        productCategory,
        categoryInDepartment,
        generateCartId,
        productsInCart,
        totalAmount,
        moveItemToCart,
        saveItemForLater,
        getSavedItems,
        emptyCart,
        removeProduct,
        getCustomerOrder,
        getOneOrder,
        getOrderDetail,
        getCustomer,
        getProduct,
        getProducts,
        getProductsInCategory,
        getProductsReview,
        getProductsinDepartment,
        searchProduct
    },
})