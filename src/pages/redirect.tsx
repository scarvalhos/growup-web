import { GetServerSideProps, NextPage } from 'next'

import { Container, Content, Typography } from '@core'
import { LoadAnimated } from '@components/LoadAnimated'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { NextSeo } from 'next-seo'

const Redirect: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.reload()
    }, 1000)
  }, [])

  return (
    <>
      <NextSeo title="Redirecioando... | Hytzen Shop" />

      <Container
        direction="column"
        justify="center"
        alignI="center"
        style={{ width: '100vw', height: '100vh' }}
      >
        <Content display="flex" justify="center" alignI="center" mt="4rem">
          <LoadAnimated />
        </Content>
        <Typography
          color="title"
          fontSize="title_xs"
          align="center"
          weight="medium"
          mt="2rem"
        >
          Aguarde, você está
          <br />
          sendo redirecionado!
        </Typography>
      </Container>
    </>
  )
}

export default Redirect

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'hytzenshop.token': token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
