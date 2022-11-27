import { CommonCSSProperty } from '@styles/theme'
import { commonCSS } from '@utils/styles'
import styled from 'styled-components'

const IconButton = styled.button.attrs<CommonCSSProperty>((props) =>
  commonCSS(props)
)<CommonCSSProperty>`
  /* background: ${({ theme, color }) =>
    theme.colors[color || 'line_darker']}; */
  background: none;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  border: none;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  cursor: pointer;
  transition: all ease-in 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.title};
  }
`

export default IconButton
