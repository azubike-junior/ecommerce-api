import {
    query
} from './Query'
import {
    GraphQLSchema
} from 'graphql';
import {
    mutation
} from '../mutations/mutations'

export default new GraphQLSchema({
    query,
    mutation
})