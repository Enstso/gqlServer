import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    doctors: [Doctor]
  }
  type Doctor {
    name: String
    speciality: Speciality
  }
   type Query {
    doctors(specialies: [Speciality!]): [Doctor]
  }

  type Query {
    add(number1: Float!, number2: Float!): Float
    subtract(number1: Float!, number2: Float!): Float
    multiply(number1: Float!, number2: Float!): Float
    divide(number1: Float!, number2: Float!): Float
    closestColor(hex: String!): String
  }

  enum Speciality {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }
`;