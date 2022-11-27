import styled from 'styled-components'

const Line = styled.div`
  width: 2px;
  height: 30px;
  background: ${({ theme }) => theme.colors.line_darker};
  margin: 0 0.75rem;
`

export default Line
