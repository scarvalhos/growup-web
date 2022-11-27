import * as React from 'react'

import { NextImage, Logo, HeaderContainer } from './styles'
import { Line, Typography, UnstyledText } from '@core'

import ButtonLogin from '@components/ButtonLogin'

interface HeaderProps {
  renderMenu?: () => React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ renderMenu }) => {
  return (
    <HeaderContainer>
      <Logo href="/" variant="text" p="0rem">
        <NextImage src="/logo.svg" alt="Growup Education" />
        <Line />
        <Typography fontSize="text_base">growup</Typography>
        <UnstyledText fontSize="text_base" color="gradient" weight="bold">
          education
        </UnstyledText>
      </Logo>

      {renderMenu && renderMenu()}

      <ButtonLogin />
    </HeaderContainer>
  )
}

export default Header
