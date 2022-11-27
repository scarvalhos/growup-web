import { gql } from '@apollo/client'

export const CREATE_STUDENT = gql`
  mutation ($userId: String!) {
    createStudent(studentInput: { userId: $userId }) {
      id
      userId
      user {
        id
        email
        isAdmin
        profile {
          avatar
          cpf
          completeName
          birthDate
          phone
        }
      }
    }
  }
`
