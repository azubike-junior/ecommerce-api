import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList
} from 'graphql';
import {
    AttributeValueType,
    AttributeType,
    ProductAttributeType
} from '../schema/attributeSchema';
import {
    baseUrl
} from '../../utils/variable'
import axios from 'axios';

const attributes = {
    type: new GraphQLList(AttributeType),
    resolve(parent, args) {
        return axios.get(`${baseUrl}/attributes`)
            .then(res => res.data.data)
    }
}

const attribute = {
    type: AttributeType,
    args: {
        attribute_id: {
            type: GraphQLInt
        }
    },
    resolve(parent, args) {
        return axios.get(`${baseUrl}/attributes/${args.attribute_id}`).
        then(res => res.data.data)
    }
}

const attributeValue = {
    type: new GraphQLList(AttributeValueType),
    args: {
        attribute_id: {
            type: GraphQLInt
        }
    },
    resolve(parent, args) {
        return axios.get(`${baseUrl}/attributes/values/${args.attribute_id}`).
        then(res => res.data.data)
    }
}

const productAttribute = {
    type: new GraphQLList(ProductAttributeType),
    args: {
        product_id: {
            type: GraphQLInt
        }
    },
    resolve(parent, args) {
        return axios.get(`${baseUrl}/attributes/inProduct/${args.product_id}`).
        then(res => res.data.data)
    }
}

export {
    attributes,
    attribute,
    attributeValue,
    productAttribute
}