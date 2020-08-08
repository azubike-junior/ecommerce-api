import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql';

const departmentType = new GraphQLObjectType({
    name: 'department',
    fields: () => ({
        department_id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        }
    })
})


export {
    departmentType
}