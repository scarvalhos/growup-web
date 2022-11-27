import styled from 'styled-components'

import { Content } from '@core'

export const PreEnrollmentCardContainer = styled(Content)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  background: ${({ theme }) => theme.colors.background_secondary};
  padding: 1.75rem;
  border-radius: 6px;
`
