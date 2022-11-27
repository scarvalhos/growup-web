import * as React from 'react'

import { Content, Link } from '@core'
import { useRouter } from 'next/router'

import Header from '@components/Header'

export const HeaderDashboard: React.FC = () => {
  const { asPath } = useRouter()

  return (
    <Header
      renderMenu={() => (
        <Content display="flex" direction="row">
          <Link
            href="/dashboard/preenrollments"
            variant={
              asPath === '/dashboard/preenrollments' ? 'contained' : 'text'
            }
            fontSize="text_sm"
          >
            Pré-matrículas
          </Link>
          <Link
            href="/dashboard/enrollments"
            variant={asPath === '/dashboard/enrollments' ? 'contained' : 'text'}
            fontSize="text_sm"
          >
            Cursos
          </Link>
          <Link
            href="/dashboard/educators"
            variant={asPath === '/dashboard/educators' ? 'contained' : 'text'}
            fontSize="text_sm"
          >
            Professores
          </Link>
          <Link
            href="/dashboard/students"
            variant={asPath === '/dashboard/students' ? 'contained' : 'text'}
            fontSize="text_sm"
          >
            Estudantes
          </Link>
        </Content>
      )}
    />
  )
}
