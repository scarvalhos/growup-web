import * as React from 'react'

import { DashboardLayout } from '@features/Dashboard/layouts/DashboardLayout'
import { withSSRAuth } from '@hocs/withSSRAuth'
import { NextPage } from 'next'

import Head from 'next/head'

const EducatorsDashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Professores | Growup Education</title>
        <meta name="description" content="Dashboard | Growup Education" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <DashboardLayout>Professores</DashboardLayout>
    </>
  )
}

export default EducatorsDashboard

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  }
})
