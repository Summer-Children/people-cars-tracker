import { graphql } from '../../_gqlgen'

export const ADD_CAR = graphql(`
    mutation AddCar($year: Int!, $make: String!, $model: String!, $price: Float!, $personId: ID!) {
        addCar(year: $year, make: $make, model: $model, price: $price, personId: $personId) {
            id
            year
            make
            model
            price
            personId
        }
    }
`);

export const UPDATE_CAR = graphql(`
    mutation UpdateCar($id: ID!, $year: Int!, $make: String!, $model: String!, $price: Float!, $personId: ID!) {
        updateCar(id: $id, year: $year, make: $make, model: $model, price: $price, personId: $personId) {
            id
            year
            make
            model
            price
            personId
        }
    }
`);

export const DELETE_CAR = graphql(`
    mutation DeleteCar($id: ID!) {
        deleteCar(id: $id) {
            id
        }
    }
`);
