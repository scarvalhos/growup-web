import { gql } from '@apollo/client'

export const GET_ENROLLMENTS_LIST = gql`
  query {
    getEnrollments {
      id
      title
      description
    }
  }
`

export const GET_ENROLLMENT = gql`
  query ($id: String!) {
    getEnrollment(id: $id) {
      id
      title
      description
    }
  }
`

export const GET_PRE_ENROLLMENTS = gql`
  query {
    getPreEnrollments {
      id
      createdAt
      enrollment {
        id
        title
        description
      }
      student {
        id
        userId
        user {
          id
          email
          isAdmin
          profile {
            cpf
            avatar
            birthDate
            completeName
            phone
          }
        }
      }
      status
    }
  }
`
