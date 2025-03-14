import { graphql } from '../../_gqlgen'

export const GET_CARS = graphql(`
    query GetCars {
        cars {
            id
            year
            make
            model
            price
            personId
        }
    }
`);
