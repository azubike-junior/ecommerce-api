import {
    customerType
} from '../schema/customerSchema';
import axios from 'axios';
import {
    baseUrl
} from '../../utils/variable';

const getCustomer = {
    type: customerType,
    resolve(parent, args, req) {
        return axios.get(`${baseUrl}/customers/`, {
            headers: {
                Authorization: req.headers.authorization
            }
        }).then((res) => res.data.data.customer.schema)
    }
};

export {
    getCustomer
};