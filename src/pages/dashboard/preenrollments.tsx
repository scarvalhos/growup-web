import * as React from 'react'

import { GET_PRE_ENROLLMENTS } from 'graphql/enrollments/queries'
import { DashboardLayout } from '@features/Dashboard/layouts/DashboardLayout'
import { PreEnrollment } from '@utils/types'
import { withSSRAuth } from '@hocs/withSSRAuth'
import { NextPage } from 'next'
import { useQuery } from '@apollo/client'

import PreEnrollmentCard from '@features/Dashboard/components/PreEnrollmentCard'
import Head from 'next/head'

const PreenrollmentsDashboard: NextPage = () => {
  const { data } = useQuery<{ getPreEnrollments: PreEnrollment[] }>(
    GET_PRE_ENROLLMENTS
  )

  return (
    <>
      <Head>
        <title>Pré-matrículas | Growup Education</title>
        <meta name="description" content="Dashboard | Growup Education" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <DashboardLayout>
        {data?.getPreEnrollments.map((item) => (
          <PreEnrollmentCard key={item.id} preEnrollment={item} />
        ))}
      </DashboardLayout>
    </>
  )
}

export default PreenrollmentsDashboard

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  }
})
