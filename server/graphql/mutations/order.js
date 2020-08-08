import {
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} from 'graphql';
import {
    orderType
} from '../schema/orderSchema'
import Axios from 'axios';
import {
    baseUrl
} from '../../utils/variable';

const createOrder = {
    type: orderType,
    args: {
        cart_id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        shipping_id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        tax_id: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve(parent, args, req) {
        return Axios.post(`${baseUrl}/orders/`, {
            cart_id: args.cart_id,
            shipping_id: args.shipping_id,
            tax_id: args.tax_id
        }, {
            headers: {
                Authorization: req.headers.authorization
            }
        }).then(res => res.data.data)
    }
}

const setShippedDate = {
    type: orderType,
    args: {
        order_id: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve(parent, args, req) {
        return Axios.put(`${baseUrl}/orders/set_shipped_on_date/${args.order_id}`, {
            order_id: args.order_id
        }, {
            headers: {
                Authorization: req.headers.authorization
            }
        }).then(res => res.data.data)
    }
}

const setAuthCode = {
    type: orderType,
    args: {
        order_id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        auth_code: {
            type: new GraphQLNonNull(GraphQLString)
        },
        Reference: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(parent, args, req) {
        return Axios.put(`${baseUrl}/orders/set_auth_code/${args.order_id}`, {
            auth_code: args.auth_code,
            Reference: args.Reference
        }, {
            headers: {
                Authorization: req.headers.authorization
            }
        }).then(res => res.data.data)
    }
}

const updateOrder = {
    type: orderType,
    args: {
        order_id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        comments: {
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(parent, args, req) {
        return Axios.put(`${baseUrl}/orders/update_order/${args.order_id}`, {
            order_id: args.order_id,
            comments: args.comments,
            name: args.name
        }, {
            headers: {
                Authorization: req.headers.authorization
            }
        }).then(res => res.data.data)
    }
}
export {
    createOrder,
    setAuthCode,
    setShippedDate,
    updateOrder
}