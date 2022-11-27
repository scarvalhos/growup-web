import * as React from 'react'

import { FieldValues } from 'react-hook-form'
import { UPDATE_USER } from 'graphql/user/mutations'
import { withSSRAuth } from '@hocs/withSSRAuth'
import { useMutation } from '@apollo/client'
import { Container } from '@core'
import { NextPage } from 'next'
import { useAuth } from '@contexts/AuthContext'

import ProfileMenu from '@features/Profile/Menu'
import Header from '@components/Header'
import Head from 'next/head'

const Profile: NextPage = () => {
  const { user } = useAuth()

  const [updateUser] = useMutation(UPDATE_USER)

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

      <Container display="flex" justify="center" alignI="center" h="80vh">
        <ProfileMenu />
      </Container>
    </>
  )
}

export default Profile

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  }
})
