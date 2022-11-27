import styled from 'styled-components'

import { Content } from '@core'

const Marker = styled(Content)`
  position: absolute;
  top: 0;
  left: 2rem;
  background: ${({ theme, color }) => theme.colors[color || 'main']};
  border-radius: 0 0 6px 6px;
`

export default Marker
