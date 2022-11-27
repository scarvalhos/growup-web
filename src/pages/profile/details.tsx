import * as React from 'react'
import * as Input from '@components/Input'

import { FieldValues, useForm } from 'react-hook-form'
import { Button, Container } from '@core'
import { UPDATE_USER } from 'graphql/user/mutations'
import { withSSRAuth } from '@hocs/withSSRAuth'
import { useMutation } from '@apollo/client'
import { NextPage } from 'next'
import { useAuth } from '@contexts/AuthContext'

import Header from '@components/Header'
import styled from 'styled-components'
import Head from 'next/head'

const Form = styled.form`
  max-width: 340px;
  background: ${({ theme }) => theme.colors.background_secondary};
  padding: 2rem;
  border-radius: 6px;
`

const ProfileDetails: NextPage = () => {
  const { user } = useAuth()

  const [updateUser] = useMutation(UPDATE_USER)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      completeName: user?.profile?.completeName,
      cpf: user?.profile?.cpf,
      phone: user?.profile?.phone,
      birthDate: user?.profile?.birthDate,
    },
  })

  async function handleOnSubmit(values: FieldValues) {
    await updateUser({
      variables: {
        id: user?.id,
        completeName: values?.completeName,
        birthDate: values?.birthDate,
        phone: values?.phone,
        cpf: values?.cpf,
      },
    })
  }

  return (
    <>
      <Head>
        <title>Profile | Growup Education</title>
        <meta name="description" content="Profile | Growup Education" />
      </Head>

      <Header />

      <Container display="flex" justify="center" alignI="center" h="86vh">
        <Form onSubmit={handleSubmit(handleOnSubmit)}>
          <Input.Field
            type="text"
            label="Nome completo:"
            control={control}
            error={String(errors?.completeName?.message || '')}
            {...register('completeName')}
          />
          <Input.Field
            type="cpf"
            label="CPF:"
            control={control}
            error={String(errors?.cpf?.message || '')}
            {...register('cpf')}
          />
          <Input.Field
            type="date"
            label="Data de nascimento:"
            control={control}
            error={String(errors?.birthDate?.message || '')}
            {...register('birthDate')}
          />
          <Input.Field
            type="text"
            label="Celular:"
            control={control}
            error={String(errors?.phone?.message || '')}
            {...register('phone')}
          />
          <Button type="submit" variant="contained" widthMode="full" mt="2rem">
            Salvar
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default ProfileDetails

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  }
})
