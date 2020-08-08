import {
    GraphQLObjectType
} from 'graphql';
import {
    addProductToCart,
    updateProductQuantityInCart
} from './shoppingCart'
import {
    createOrder,
    setShippedDate,
    setAuthCode,
    updateOrder
} from './order'
import {
    makePayment
} from './payment'
import {
    createReview
} from './review'
import {
    signup,
    signin,
    updateCustomerAddress,
    updateCustomerBioData,
    updateCreditCard
} from './customer'

const mutation = new GraphQLObjectType({
    name: 'mutation',
    fields: {
        addProductToCart,
        updateProductQuantityInCart,
        createOrder,
        setShippedDate,
        setAuthCode,
        updateOrder,
        createReview,
        signin,
        signup,
        updateCustomerBioData,
        updateCustomerAddress,
        updateCreditCard,
        makePayment
    }
})

export {
    mutation
}