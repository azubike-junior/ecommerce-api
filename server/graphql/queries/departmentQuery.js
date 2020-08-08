import {
    GraphQLInt,
    GraphQLList
} from 'graphql';
import Axios from 'axios';
import {
    baseUrl
} from '../../utils/variable';
import {
    departmentType
} from '../schema/departmentSchema';

const departments = {
    type: new GraphQLList(departmentType),
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/department`)
            .then(res => res.data.data)
    }
}

const department = {
    type: departmentType,
    args: {
        department_id: {
            type: GraphQLInt
        }
    },
    resolve(parent, args) {
        return Axios.get(`${baseUrl}/department/${args.department_id}`)
            .then(res => res.data.data)
    }
}

export {
    department,
    departments
}