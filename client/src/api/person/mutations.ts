import { graphql } from '../../_gqlgen'

export const ADD_PERSON = graphql(`
    mutation AddPerson($firstName: String!, $lastName: String!) {
        addPerson(firstName: $firstName, lastName: $lastName) {
            id
            firstName
            lastName
        }
    }
`);

export const UPDATE_PERSON = graphql(`
    mutation UpdatePerson($id: ID!, $firstName: String!, $lastName: String!) {
        updatePerson(id: $id, firstName: $firstName, lastName: $lastName) {
            id
            firstName
            lastName
        }
    }
`);

export const DELETE_PERSON = graphql(`
    mutation DeletePerson($id: ID!) {
        deletePerson(id: $id) {
            id
        }
    }
`);
