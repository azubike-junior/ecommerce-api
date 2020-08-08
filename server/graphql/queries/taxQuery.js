import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList
} from 'graphql';
import {
    TaxType
} from '../schema/taxSchema'
import {
    baseUrl
} from '../../utils/variable';
import axios from 'axios';

const taxes = {
    type: new GraphQLList(TaxType),
    resolve(parent, args) {
        return axios.get(`${baseUrl}/tax`)
            .then(res => res.data.data)
    }
}

const tax = {
    type: TaxType,
    args: {
        tax_id: {
            type: GraphQLInt
        }
    },
    resolve(parent, args) {
        return axios.get(`${baseUrl}/tax/${args.tax_id}`)
            .then(res => res.data.data)
    }
}

export {
    tax,
    taxes
}