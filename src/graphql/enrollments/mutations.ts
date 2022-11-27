import { gql } from '@apollo/client'

export const CREATE_PRE_ENROLLMENT = gql`
  mutation ($enrollmentId: String!, $studentId: String!) {
    createPreEnrollment(
      preEnrollmentInput: {
        status: pending
        enrollmentId: $enrollmentId
        studentId: $studentId
      }
    ) {
      id
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
      createdAt
    }
  }
`
