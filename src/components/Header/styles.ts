import styled from 'styled-components'

import { Link } from '@core'

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 1rem 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.line_darker};
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
`

export const NextImage = styled.img`
  width: 24px;
  height: 24px;
`
