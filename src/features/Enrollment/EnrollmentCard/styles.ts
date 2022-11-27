import styled, { css } from 'styled-components'

import { Content } from '@core'

export const EnrollmentCardWrapper = styled(Content)`
  position: relative;
  background: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 6px;
  max-width: 320px;
  max-height: 220px;

  border-width: 1.5px;
  border-style: solid;
  border-color: transparent;

  transition: all ease-in 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.main};
  }

  ${({ theme }) => css`
    @media ${theme.breakpoints.sm} {
      max-width: unset;
    }
  `}
`

export const Marker = styled(Content)`
  position: absolute;
  top: 0;
  left: 2rem;
  background: ${({ theme }) => theme.colors.main};
  border-radius: 0 0 6px 6px;
`
