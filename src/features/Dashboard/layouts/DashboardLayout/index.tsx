import * as React from 'react'

import { HeaderDashboard } from '@features/Dashboard/components/HeaderDashboard'
import { Container } from '@core'

interface DashboardLayout {
  children: React.ReactNode
}

export const DashboardLayout: React.FC<DashboardLayout> = ({ children }) => {
  return (
    <>
      <HeaderDashboard />

      <Container display="flex" justify="center">
        {children}
      </Container>
    </>
  )
}
