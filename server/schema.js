import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Person {
        id: ID!
        firstName: String!
        lastName: String!
    }

    type Car {
        id: ID!
        year: Int!
        make: String!
        model: String!
        price: Float!
        personId: String!
    }

    type PersonWithCars {
        id: ID!
        firstName: String!
        lastName: String!
        cars: [Car]!
    }

    type Query {
        people: [Person]!
        cars: [Car]!
        personWithcars(id: ID!): PersonWithCars
    }

    type Mutation {
        addPerson(firstName: String!, lastName: String!): Person!
        addCar(year: Int!, make: String!, model: String!, price: Float!, personId: ID!): Car!
        updatePerson(id: ID!, firstName: String!, lastName: String!): Person!
        updateCar(id: ID!, year: Int!, make: String!, model: String!, price: Float!, personId: ID!): Car!
        deletePerson(id: ID!): Person!
        deleteCar(id: ID!): Car!
    }
`;
