/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n    mutation AddCar($year: Int!, $make: String!, $model: String!, $price: Float!, $personId: ID!) {\n        addCar(year: $year, make: $make, model: $model, price: $price, personId: $personId) {\n            id\n            year\n            make\n            model\n            price\n            personId\n        }\n    }\n": typeof types.AddCarDocument,
    "\n    mutation UpdateCar($id: ID!, $year: Int!, $make: String!, $model: String!, $price: Float!, $personId: ID!) {\n        updateCar(id: $id, year: $year, make: $make, model: $model, price: $price, personId: $personId) {\n            id\n            year\n            make\n            model\n            price\n            personId\n        }\n    }\n": typeof types.UpdateCarDocument,
    "\n    mutation DeleteCar($id: ID!) {\n        deleteCar(id: $id) {\n            id\n        }\n    }\n": typeof types.DeleteCarDocument,
    "\n    query GetCars {\n        cars {\n            id\n            year\n            make\n            model\n            price\n            personId\n        }\n    }\n": typeof types.GetCarsDocument,
    "\n    mutation AddPerson($firstName: String!, $lastName: String!) {\n        addPerson(firstName: $firstName, lastName: $lastName) {\n            id\n            firstName\n            lastName\n        }\n    }\n": typeof types.AddPersonDocument,
    "\n    mutation UpdatePerson($id: ID!, $firstName: String!, $lastName: String!) {\n        updatePerson(id: $id, firstName: $firstName, lastName: $lastName) {\n            id\n            firstName\n            lastName\n        }\n    }\n": typeof types.UpdatePersonDocument,
    "\n    mutation DeletePerson($id: ID!) {\n        deletePerson(id: $id) {\n            id\n        }\n    }\n": typeof types.DeletePersonDocument,
    "\n    query GetPeople {\n        people {\n            id\n            firstName\n            lastName\n        }\n    }\n": typeof types.GetPeopleDocument,
    "\n    query GetPersonWithCars($id: ID!) {\n        personWithcars(id: $id) {\n            id\n            firstName\n            lastName\n            cars {\n                id\n                year\n                make\n                model\n                price\n            }\n        }\n    }\n": typeof types.GetPersonWithCarsDocument,
};
const documents: Documents = {
    "\n    mutation AddCar($year: Int!, $make: String!, $model: String!, $price: Float!, $personId: ID!) {\n        addCar(year: $year, make: $make, model: $model, price: $price, personId: $personId) {\n            id\n            year\n            make\n            model\n            price\n            personId\n        }\n    }\n": types.AddCarDocument,
    "\n    mutation UpdateCar($id: ID!, $year: Int!, $make: String!, $model: String!, $price: Float!, $personId: ID!) {\n        updateCar(id: $id, year: $year, make: $make, model: $model, price: $price, personId: $personId) {\n            id\n            year\n            make\n            model\n            price\n            personId\n        }\n    }\n": types.UpdateCarDocument,
    "\n    mutation DeleteCar($id: ID!) {\n        deleteCar(id: $id) {\n            id\n        }\n    }\n": types.DeleteCarDocument,
    "\n    query GetCars {\n        cars {\n            id\n            year\n            make\n            model\n            price\n            personId\n        }\n    }\n": types.GetCarsDocument,
    "\n    mutation AddPerson($firstName: String!, $lastName: String!) {\n        addPerson(firstName: $firstName, lastName: $lastName) {\n            id\n            firstName\n            lastName\n        }\n    }\n": types.AddPersonDocument,
    "\n    mutation UpdatePerson($id: ID!, $firstName: String!, $lastName: String!) {\n        updatePerson(id: $id, firstName: $firstName, lastName: $lastName) {\n            id\n            firstName\n            lastName\n        }\n    }\n": types.UpdatePersonDocument,
    "\n    mutation DeletePerson($id: ID!) {\n        deletePerson(id: $id) {\n            id\n        }\n    }\n": types.DeletePersonDocument,
    "\n    query GetPeople {\n        people {\n            id\n            firstName\n            lastName\n        }\n    }\n": types.GetPeopleDocument,
    "\n    query GetPersonWithCars($id: ID!) {\n        personWithcars(id: $id) {\n            id\n            firstName\n            lastName\n            cars {\n                id\n                year\n                make\n                model\n                price\n            }\n        }\n    }\n": types.GetPersonWithCarsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation AddCar($year: Int!, $make: String!, $model: String!, $price: Float!, $personId: ID!) {\n        addCar(year: $year, make: $make, model: $model, price: $price, personId: $personId) {\n            id\n            year\n            make\n            model\n            price\n            personId\n        }\n    }\n"): (typeof documents)["\n    mutation AddCar($year: Int!, $make: String!, $model: String!, $price: Float!, $personId: ID!) {\n        addCar(year: $year, make: $make, model: $model, price: $price, personId: $personId) {\n            id\n            year\n            make\n            model\n            price\n            personId\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateCar($id: ID!, $year: Int!, $make: String!, $model: String!, $price: Float!, $personId: ID!) {\n        updateCar(id: $id, year: $year, make: $make, model: $model, price: $price, personId: $personId) {\n            id\n            year\n            make\n            model\n            price\n            personId\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateCar($id: ID!, $year: Int!, $make: String!, $model: String!, $price: Float!, $personId: ID!) {\n        updateCar(id: $id, year: $year, make: $make, model: $model, price: $price, personId: $personId) {\n            id\n            year\n            make\n            model\n            price\n            personId\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteCar($id: ID!) {\n        deleteCar(id: $id) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteCar($id: ID!) {\n        deleteCar(id: $id) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetCars {\n        cars {\n            id\n            year\n            make\n            model\n            price\n            personId\n        }\n    }\n"): (typeof documents)["\n    query GetCars {\n        cars {\n            id\n            year\n            make\n            model\n            price\n            personId\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation AddPerson($firstName: String!, $lastName: String!) {\n        addPerson(firstName: $firstName, lastName: $lastName) {\n            id\n            firstName\n            lastName\n        }\n    }\n"): (typeof documents)["\n    mutation AddPerson($firstName: String!, $lastName: String!) {\n        addPerson(firstName: $firstName, lastName: $lastName) {\n            id\n            firstName\n            lastName\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdatePerson($id: ID!, $firstName: String!, $lastName: String!) {\n        updatePerson(id: $id, firstName: $firstName, lastName: $lastName) {\n            id\n            firstName\n            lastName\n        }\n    }\n"): (typeof documents)["\n    mutation UpdatePerson($id: ID!, $firstName: String!, $lastName: String!) {\n        updatePerson(id: $id, firstName: $firstName, lastName: $lastName) {\n            id\n            firstName\n            lastName\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeletePerson($id: ID!) {\n        deletePerson(id: $id) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeletePerson($id: ID!) {\n        deletePerson(id: $id) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPeople {\n        people {\n            id\n            firstName\n            lastName\n        }\n    }\n"): (typeof documents)["\n    query GetPeople {\n        people {\n            id\n            firstName\n            lastName\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPersonWithCars($id: ID!) {\n        personWithcars(id: $id) {\n            id\n            firstName\n            lastName\n            cars {\n                id\n                year\n                make\n                model\n                price\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetPersonWithCars($id: ID!) {\n        personWithcars(id: $id) {\n            id\n            firstName\n            lastName\n            cars {\n                id\n                year\n                make\n                model\n                price\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;