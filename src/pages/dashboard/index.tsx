import * as React from 'react'

import { withSSRAuth } from '@hocs/withSSRAuth'
import { NextPage } from 'next'

import Head from 'next/head'

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Growup Education</title>
        <meta name="description" content="Dashboard | Growup Education" />
        <link rel="icon" href="/logo.svg" />
      </Head>
    </>
  )
}

export default Dashboard

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
    redirect: {
      destination: '/dashboard/preenrollments',
      permanent: false,
    },
  }
})
