import * as React from 'react'

import type { NextPage } from 'next'

import { Container, Content, Typography, UnstyledText } from '@core'
import { GET_ENROLLMENTS_LIST } from 'graphql/enrollments/queries'
import { EnrollmentList } from '@features/Enrollment'
import { useQuery } from '@apollo/client'

import Header from '@components/Header'
import Head from 'next/head'

const Home: NextPage = () => {
  const { data } = useQuery(GET_ENROLLMENTS_LIST)

  return (
    <>
      <Head>
        <title>Growup Education</title>
        <meta name="description" content="Growup Education" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Header />
      <Container>
        <Content
          mt="4rem"
          display="flex"
          justify="center"
          alignI="center"
          direction="column"
        >
          <Typography>Growup Education</Typography>
          <Typography
            weight="bold"
            align="center"
            fontSize="title_lg"
            mt="1rem"
          >
            Aproveite nossos cursos e<br />
            faça sua pré-matrícula
            <UnstyledText color="gradient" fontSize="title_lg">
              .
            </UnstyledText>
          </Typography>
        </Content>
        <Content
          mt="6rem"
          display="flex"
          justify="center"
          alignI="center"
          direction="column"
        >
          <EnrollmentList enrollments={data?.getEnrollments} />
        </Content>
      </Container>
    </>
  )
}

export default Home

