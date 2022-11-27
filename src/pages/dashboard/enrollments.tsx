import * as React from 'react'

import { DashboardLayout } from '@features/Dashboard/layouts/DashboardLayout'
import { withSSRAuth } from '@hocs/withSSRAuth'
import { NextPage } from 'next'

import Head from 'next/head'

const EnrollmentsDashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cursos | Growup Education</title>
        <meta name="description" content="Dashboard | Growup Education" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <DashboardLayout>Cursos</DashboardLayout>
    </>
  )
}

export default EnrollmentsDashboard

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  }
})
