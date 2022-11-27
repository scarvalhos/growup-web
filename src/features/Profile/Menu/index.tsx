import * as React from 'react'

import { ProfileMenuCotainer } from './styles'
import { Button, Link, Typography } from '@core'
import { TbDashboard, TbLogout, TbUserCircle } from 'react-icons/tb'
import { useAuth } from '@contexts/AuthContext'

const ProfileMenu: React.FC = () => {
  const { signOut } = useAuth()

  return (
    <ProfileMenuCotainer
      display="flex"
      direction="row"
      justify="center"
      alignI="center"
      p="1rem"
    >
      <Link
        href="/profile/details"
        align="left"
        variant="text"
        color="title"
        fontSize="text_md"
      >
        <>
          <TbUserCircle />
          <Typography ml={6}>Perfil</Typography>
        </>
      </Link>
      <Link href="/dashboard" variant="text" color="title" fontSize="text_md">
        <>
          <TbDashboard />
          <Typography ml={6}>Dashboard</Typography>
        </>
      </Link>
      <Button variant="text" onClick={signOut}>
        <>
          <TbLogout />
          <Typography ml={6}>Sair</Typography>
        </>
      </Button>
    </ProfileMenuCotainer>
  )
}

export default ProfileMenu
