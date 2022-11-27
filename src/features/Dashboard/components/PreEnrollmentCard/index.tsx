import * as React from 'react'

import { PreEnrollmentCardContainer } from './styles'
import { PreEnrollment } from '@utils/types'
import { Button, Content, Typography } from '@core'
import { date } from '@utils/index'
import { useAuth } from '@contexts/AuthContext'

interface PreEnrollmentCardProps {
  preEnrollment: PreEnrollment
}

const PreEnrollmentCard: React.FC<PreEnrollmentCardProps> = ({
  preEnrollment,
}) => {
  const { user } = useAuth()

  const status = {
    pending: 'Pendente',
    approved: 'Aprovado',
    rejected: 'Reprovado',
    cancelled: 'Cancelado',
  }[preEnrollment.status]

  return (
    <PreEnrollmentCardContainer mx="0.5rem">
      <Content>
        <Typography color="text">Curso:</Typography>
        <Typography fontSize="text_md">
          {preEnrollment?.enrollment?.title}
        </Typography>
      </Content>

      <Content>
        <Typography color="text">Aluno:</Typography>
        <Typography fontSize="text_md">
          {preEnrollment?.student?.user?.profile?.completeName}
        </Typography>
      </Content>

      <Content>
        <Typography color="text">Status:</Typography>
        <Typography>{status}</Typography>
      </Content>

      <Content>
        <Typography color="text">Data:</Typography>
        <Typography>{date(preEnrollment.createdAt, 'digit')}</Typography>
      </Content>
      {user?.isAdmin && (
        <>
          <Button variant="contained" color="danger">
            <Typography color="title">Reprovar</Typography>
          </Button>
          <Button variant="contained" color="success">
            <Typography color="title">Aprovar</Typography>
          </Button>
        </>
      )}
    </PreEnrollmentCardContainer>
  )
}

export default PreEnrollmentCard
