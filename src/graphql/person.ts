import { gql } from "@apollo/client";

/**
 * ALL_PERSONS : GraphQL query for fetching all persons
 */
const ALL_PERSONS = gql`
  query {
    allPersons {
      name
      phone
      id
    }
  }
`

/**
 * CREATE_PERSON : GraphQL query for creating a new person
 */
const CREATE_PERSON = gql`
  mutation createPerson($name: String!, $street: String!, $city: String!, $phone: String!) {
    addPerson (
      name: $name,
      street: $street,
      city: $city,
      phone: $phone
    ) {
      name
      phone
      id
      address {
        street
        city
      }
    }
  }
`

/**
 * GraphQL query for finding a person given param name of type String
 */
const FIND_PERSON = gql`
  query findPersonByName($nameToSearch: String!) {
    findPerson(name: $nameToSearch) {
      name
      phone
      id
      address {
        street
        city
      }
    }
  }
`

export {
  ALL_PERSONS,
  CREATE_PERSON,
  FIND_PERSON
}