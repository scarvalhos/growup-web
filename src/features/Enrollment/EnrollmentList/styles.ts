import styled, { css } from 'styled-components'

import { Container } from '@core'

export const EnrollmentListContainer = styled(Container)`
  margin: 0 auto;
  width: fit-content;

  display: grid;
  gap: 1rem;

  ${({ theme }) => css`
    @media ${theme.breakpoints.xs} {
      grid-template-columns: repeat(1, 1fr);
    }
    @media ${theme.breakpoints.min_sm} {
      grid-template-columns: repeat(2, 1fr);
    }
    @media ${theme.breakpoints.min_md} {
      grid-template-columns: repeat(3, 1fr);
    }
    @media ${theme.breakpoints.min_lg} {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`
