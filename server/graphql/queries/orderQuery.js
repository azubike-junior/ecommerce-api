import {
    GraphQLInt,
    GraphQLList
} from 'graphql';
import Axios from 'axios';
import {
    baseUrl
} from '../../utils/variable';
import {
    orderType,
    orderDetailType
} from '../schema/orderSchema'

const getCustomerOrder = {
    type: new GraphQLList(orderType),
    resolve(parent, args, req) {
        return Axios.get(`${baseUrl}/orders/inCustomer`, {
            headers: {
                Authorization: req.headers.authorization
            }
        }).then(res => res.data.data)
    }
}

const getOneOrder = {
    type: orderType,
    args: {
        order_id: {
            type: GraphQLInt
        }
    },
    resolve(parent, args, req) {
        return Axios.get(`${baseUrl}/orders/${args.order_id}`, {
            headers: {
                Authorization: req.headers.authorization
            }
        }).then(res => res.data.data)
    }
}

const getOrderDetail = {
    type: orderType,
    args: {
        order_id: {
            type: GraphQLInt
        }
    },
    resolve(parent, args, req) {
        return Axios.get(`${baseUrl}/orders/shortDetail/${args.order_id}`, {
            headers: {
                Authorization: req.headers.authorization
            }
        }).then(res => res.data.data)
    }
}

export {
    getCustomerOrder,
    getOneOrder,
    getOrderDetail
}