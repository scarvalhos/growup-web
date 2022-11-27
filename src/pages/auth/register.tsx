import * as React from 'react'
import * as Input from '@components/Input'
import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'
import { cpf, cnpj } from 'cpf-cnpj-validator'
import { Button, Container, Link } from '@core'
import { NextPage } from 'next'
import { FieldValues, useForm } from 'react-hook-form'

import YupPassword from 'yup-password'
import Header from '@components/Header'
import Head from 'next/head'
import styled from 'styled-components'
import { gql, useMutation } from '@apollo/client'
import { useAuth } from '@contexts/AuthContext'

YupPassword(yup)

const PASS_MSG = `Deve conter ao menos 08 caracteres, 01 número, 01 letra maíscula, 01 letra minúscula, 01 caracter especial.`

export const validateLoginSchema = yup.object().shape({
  email: yup.string().required('E-mail é obrigatório!'),
  password: yup
    .string()
    .typeError('Senha inválida')
    .min(8, PASS_MSG)
    .minNumbers(1, PASS_MSG)
    .minLowercase(1, PASS_MSG)
    .minUppercase(1, PASS_MSG)
    .minSymbols(1, PASS_MSG)
    .required(PASS_MSG),
  cpassword: yup
    .string()
    .typeError('Confirmar senha inválido')
    .oneOf([yup.ref('password'), null], 'As senhas não coincidem')
    .required('Confirmar senha é obrigatório'),
})

const Form = styled.form`
  max-width: 340px;
  height: fit-content;
  background: ${({ theme }) => theme.colors.background_secondary};
  padding: 2rem;
  border-radius: 6px;
`

const Register: NextPage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateLoginSchema),
  })

  const { register: createUser } = useAuth()

  async function handleOnSubmit(values: FieldValues) {
    await createUser({
      email: values.email,
      password: values.password,
    })
  }

  return (
    <>
      <Head>
        <title>Login | Growup Education</title>
        <meta name="description" content="Login | Growup Education" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Header />

      <Container display="flex" alignI="center" justify="center" h="90vh">
        <Form onSubmit={handleSubmit(handleOnSubmit)}>
          <Input.Field
            type="text"
            label="E-mail:"
            control={control}
            error={String(errors?.email?.message || '')}
            {...register('email')}
          />
          <Input.Password
            label="Senha:"
            register={register}
            control={control}
            passthrough={{ placeholder: 'Digite sua senha' }}
            error={String(errors?.password?.message || '')}
            {...register('password')}
          />
          <Input.Password
            label="Confirme sua senha:"
            register={register}
            control={control}
            passthrough={{ placeholder: 'Digite sua senha' }}
            error={String(errors?.cpassword?.message || '')}
            {...register('cpassword')}
          />
          <Button
            type="submit"
            variant="contained"
            mt="1.5rem"
            widthMode="full"
          >
            Criar conta
          </Button>
          <Link href="/auth" variant="outlined" mt="0.5rem" widthMode="full">
            Fazer login
          </Link>
        </Form>
      </Container>
    </>
  )
}

export default Register
