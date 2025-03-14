import { graphql } from '../../_gqlgen';

export const GET_PEOPLE = graphql(`
    query GetPeople {
        people {
            id
            firstName
            lastName
        }
    }
`);

export const GET_PERSON_WITH_CARS = graphql(`
    query GetPersonWithCars($id: ID!) {
        personWithcars(id: $id) {
            id
            firstName
            lastName
            cars {
                id
                year
                make
                model
                price
            }
        }
    }
`);
