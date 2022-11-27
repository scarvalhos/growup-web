import * as React from 'react'

import { Button, Container, Content, Typography } from '@core'
import { TbDeviceLaptop, TbSchool } from 'react-icons/tb'
import { PreEnrollmentModal } from '@features/Enrollment'
import { GET_ENROLLMENT } from 'graphql/enrollments/queries'
import { useBreakpoint } from '@hooks/useBreakpoint'
import { Enrollment } from '@utils/types'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { useQuery } from '@apollo/client'

import Header from '@components/Header'
import Head from 'next/head'

const Enrollment: NextPage = () => {
  const [openModal, setOpenModal] = React.useState(false)

  const { query } = useRouter()
  const { md } = useBreakpoint()

  const { data } = useQuery<{ getEnrollment: Enrollment }>(GET_ENROLLMENT, {
    variables: { id: query?.id },
  })

  return (
    <>
      <Head>
        <title>{data?.getEnrollment?.title} | Growup Education</title>
        <meta name="description" content="Enrollment | Growup Education" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Header />

      <PreEnrollmentModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        enrollment={data?.getEnrollment}
      />

      <Container display="flex" justify="center">
        <Content
          display="flex"
          direction="column"
          justify="center"
          alignI="center"
          mx={md ? '10rem' : '1rem'}
          weight="light"
          mb={md ? '4rem' : '2rem'}
        >
          <Content
            display="flex"
            direction="column"
            justify="center"
            alignI="center"
            mt={md ? '4rem' : '1rem'}
          >
            <TbDeviceLaptop fontSize={26} />
            <Typography
              align="center"
              fontSize="title_lg"
              weight="bold"
              mb="1rem"
              mt="1rem"
            >
              {data?.getEnrollment?.title}
            </Typography>
          </Content>
          <Typography color="text_detail" lineHeight="1.5rem" align="center">
            {data?.getEnrollment?.description}
          </Typography>

          <Button
            variant="contained"
            fontSize="text_sm"
            mt="2rem"
            widthMode={md ? 'fit' : 'full'}
            onClick={() => setOpenModal(true)}
          >
            <TbSchool fontSize={24} style={{ color: '#FFFFFF' }} />
            <Typography ml={10} color="title">
              Fazer pré-matrícula
            </Typography>
          </Button>
        </Content>
      </Container>
    </>
  )
}

export default Enrollment
