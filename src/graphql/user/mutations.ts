import { gql } from '@apollo/client'

export const UPDATE_USER = gql`
  mutation (
    $id: String!
    $completeName: String!
    $birthDate: String!
    $phone: String!
    $cpf: String!
  ) {
    updateUser(
      userInput: {
        id: $id
        profile: {
          completeName: $completeName
          birthDate: $birthDate
          phone: $phone
          cpf: $cpf
        }
      }
    ) {
      id
      email
      isAdmin
      profile {
        completeName
        birthDate
        phone
        cpf
      }
    }
  }
`
