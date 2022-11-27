import * as React from 'react'

import { BaseModal, Button, Content, Link, Marker, Typography } from '@core'
import { CREATE_PRE_ENROLLMENT } from 'graphql/enrollments/mutations'
import { CREATE_STUDENT } from 'graphql/student/mutations'
import { TbDeviceLaptop } from 'react-icons/tb'
import { useMutation } from '@apollo/client'
import { Enrollment } from '@utils/types'
import { useAuth } from '@contexts/AuthContext'

interface PreEnrollmentModalProps {
  open: boolean
  onClose: () => void
  enrollment?: Enrollment
}

const PreEnrollmentModal: React.FC<PreEnrollmentModalProps> = ({
  open,
  onClose,
  enrollment,
}) => {
  const [successMensage, setSuccessMensage] = React.useState(false)
  const [errorMensage, setErrorMensage] = React.useState<string | undefined>()

  const { user, refetchMe } = useAuth()

  const isProfileComplete = React.useMemo(() => {
    return user &&
      user.profile?.completeName &&
      user.profile?.cpf &&
      user.profile?.birthDate &&
      user.profile?.phone
      ? true
      : false
  }, [user])

  const [createPreEnrollment] = useMutation(CREATE_PRE_ENROLLMENT)
  const [createStudent] = useMutation(CREATE_STUDENT)

  const handleConfirm = async () => {
    if (!user?.student?.id) {
      await createStudent({
        variables: {
          userId: user?.id,
        },
      }).then(() => {
        refetchMe()
      })
    }

    try {
      await createPreEnrollment({
        variables: {
          enrollmentId: enrollment?.id,
          studentId: user?.student?.id,
        },
      })

      setSuccessMensage(true)
    } catch (error: any) {
      setErrorMensage(error.message)
    }
  }

  const mainMensage = React.useMemo(() => {
    if (errorMensage) return errorMensage

    if (successMensage)
      return 'Agora é só aguardar. Assim que sua matrícula for aprovada entraremos em contato pelo seu e-mail.'

    return 'Confirme sua pré-matrícula. Em até 48h entraremos em contato pelo seu e-mail com o resultado da sua aprovação.'
  }, [errorMensage, successMensage])

  const buttons = () => {
    if (errorMensage || successMensage) {
      return (
        <Button
          onClick={() => {
            setSuccessMensage(false)
            setErrorMensage(undefined)
            onClose()
          }}
          widthMode="full"
          fontSize="text_sm"
          variant="contained"
        >
          <Typography color="title">Voltar</Typography>
        </Button>
      )
    }

    return (
      <>
        <Button
          onClick={onClose}
          widthMode="fit"
          fontSize="text_sm"
          mr="0.5rem"
          variant="outlined"
          color="success"
        >
          <Typography color="title">Cancelar</Typography>
        </Button>
        <Button
          variant="contained"
          color="success"
          widthMode="full"
          fontSize="text_sm"
          onClick={handleConfirm}
        >
          <Typography color="title">Confirmar</Typography>
        </Button>
      </>
    )
  }

  return (
    <BaseModal open={open} onClose={onClose}>
      <Marker p={4} color={isProfileComplete ? 'success' : 'main'}>
        <TbDeviceLaptop fontSize={26} color="#FFFFFF" />
      </Marker>
      <Typography color="text" mt={16}>
        Pré-matrícula
      </Typography>
      <Typography fontSize="title_xs" weight="medium" mb="1rem">
        {successMensage
          ? 'Pré-matrícula efetuada com sucesso'
          : enrollment?.title}
      </Typography>
      {isProfileComplete ? (
        <>
          <Content>
            <Typography>{mainMensage}</Typography>
          </Content>
          <Content display="flex" mt="2rem">
            {buttons()}
          </Content>
        </>
      ) : (
        <>
          <Content mt="1rem">
            <Typography weight="light">
              Finalize o seu cadastro para realizar sua pré-matrícula.
            </Typography>
          </Content>

          <Link
            href="/profile"
            variant="contained"
            widthMode="full"
            fontSize="text_sm"
            mt="1.75rem"
          >
            <Typography color="title">Finalizar cadastro</Typography>
          </Link>
        </>
      )}
    </BaseModal>
  )
}

export default PreEnrollmentModal
