import * as React from 'react'

import { EnrollmentListContainer } from './styles'
import { Enrollment } from '@utils/types'

import EnrollmentCard from '../EnrollmentCard'

interface EnrollmentListProps {
  enrollments?: Enrollment[]
}

const EnrollmentList: React.FC<EnrollmentListProps> = ({ enrollments }) => {
  return (
    <EnrollmentListContainer>
      {enrollments &&
        enrollments.map((item) => (
          <EnrollmentCard key={item.id} enrollment={item} />
        ))}
    </EnrollmentListContainer>
  )
}

export default EnrollmentList
