import React from 'react'

import { EnrollmentCardWrapper, Marker } from './styles'
import { Link, Typography } from '@core'
import { TbDeviceLaptop } from 'react-icons/tb'
import { Enrollment } from '@utils/types'

interface EnrollmentCardProps {
  enrollment?: Enrollment
}

const EnrollmentCard: React.FC<EnrollmentCardProps> = ({ enrollment }) => {
  return (
    <EnrollmentCardWrapper
      p="2rem"
      display="flex"
      justify="space-between"
      direction="column"
    >
      <Marker p={4}>
        <TbDeviceLaptop fontSize={26} />
      </Marker>
      <Typography fontSize="text_lg" weight="medium" mb="0.75rem" mt="1rem">
        {enrollment?.title}
      </Typography>
      <Typography
        fontSize="text_sm"
        weight="light"
        lineHeight="1.25rem"
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {enrollment?.description}
      </Typography>

      <Link
        href={`/enrollment/${enrollment?.id}`}
        variant="contained"
        widthMode="full"
        fontSize="text_sm"
        color="warning"
        mt="1.5rem"
      >
        <Typography fontSize="text_sm" weight="medium" color="title">
          Ver detalhes
        </Typography>
      </Link>
    </EnrollmentCardWrapper>
  )
}

export default EnrollmentCard
