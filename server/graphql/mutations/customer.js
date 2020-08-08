import {
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} from 'graphql';
import {
    customerType
} from '../schema/customerSchema'
import Axios from 'axios';
import {
    baseUrl
} from '../../utils/variable';

const signup = {
    type: customerType,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        },
    },
    resolve(parent, args, req) {
        return Axios.post(`${baseUrl}/customers/signup`, {
            name: args.name,
            email: args.email,
            password: args.password
        }).then(res => res.data.data)
    }
}

const signin = {
    type: customerType,
    args: {
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        },
    },
    resolve(parent, args, req) {
        return Axios.post(`${baseUrl}/customers/login`, {
            email: args.email,
            password: args.password
        }).then(res => res.data.data)
    }
}


const updateCustomerBioData = {
    type: customerType,
    args: {
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        day_phone: {
            type: new GraphQLNonNull(GraphQLString)
        },
        mobile_phone: {
            type: new GraphQLNonNull(GraphQLString)
        },
    },
    resolve(parent, args, req) {
        return Axios.put(`${baseUrl}/customer/`, {
            name: args.name,
            email: args.email,
            password: args.password,
            day_phone: args.day_phone,
            mobile_phone: args.mobile_phone
        }, {
            headers: {
                Authorization: req.headers.authorization
            }
        }).then(res => res.data.data)
    }
}

const updateCreditCard = {
    type: customerType,
    args: {
        credit_card: {
            type: new GraphQLNonNull(GraphQLString)
        },
    },
    resolve(parent, args, req) {
        return Axios.put(`${baseUrl}/customer/creditCard`, {
            credit_card: args.credit_card,
        }, {
            headers: {
                Authorization: req.headers.authorization
            }
        }).then(res => res.data.data.schema)
    }
}

const updateCustomerAddress = {
    type: customerType,
    args: {
        address_1: {
            type: new GraphQLNonNull(GraphQLString)
        },
        address_2: {
            type: new GraphQLNonNull(GraphQLString)
        },
        city: {
            type: new GraphQLNonNull(GraphQLString)
        },
        region: {
            type: new GraphQLNonNull(GraphQLString)
        },
        country: {
            type: new GraphQLNonNull(GraphQLString)
        },
        postal_code: {
            type: new GraphQLNonNull(GraphQLString)
        },
        shipping_region_id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
    },
    resolve(parent, args, req) {
        return Axios.put(`${baseUrl}/customer/address`, {
            address_1: args.address_1,
            address_2: args.address_2,
            city: args.city,
            region: args.region,
            country: args.country,
            postal_code: args.postal_code,
            shipping_region_id: args.shipping_region_id
        }, {
            headers: {
                Authorization: req.headers.authorization
            }
        }).then(res => res.data.data)
    }
}

export {
    signin,
    signup,
    updateCreditCard,
    updateCustomerBioData,
    updateCustomerAddress
}