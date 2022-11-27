import * as React from 'react'

import { Link, Typography } from '@core'
import { useBreakpoint } from '@hooks/useBreakpoint'
import { getUsername } from '@utils/index'
import { useAuth } from '@contexts/AuthContext'
import { TbUser } from 'react-icons/tb'

const ButtonLogin: React.FC = () => {
  const { md } = useBreakpoint()
  const { user, isAuthenticated } = useAuth()

  return (
    <Link
      href={isAuthenticated ? '/profile' : '/auth'}
      variant="outlined"
      fontSize="text_sm"
      color={isAuthenticated ? 'success' : 'main'}
      p={!md ? '0.5rem' : '0.5rem 1.75rem'}
    >
      {!md && (
        <TbUser
          fontSize="1.1rem"
          style={{
            marginRight: !md ? '0' : '5px',
            color: '#FFF',
          }}
        />
      )}
      {md && (
        <>
          <TbUser
            fontSize="1.1rem"
            style={{
              marginRight: '5px',
              color: '#FFF',
            }}
          />
          {isAuthenticated ? (
            <Typography color="title">
              {getUsername(user?.email || '')}
            </Typography>
          ) : (
            <Typography color="title">Entrar</Typography>
          )}
        </>
      )}
    </Link>
  )
}

export default ButtonLogin
