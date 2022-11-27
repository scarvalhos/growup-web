import styled from 'styled-components'

import { CommonCSSProperty } from '@styles/theme'
import { commonCSS } from '@utils/styles'

const UnstyledText = styled.span.attrs<CommonCSSProperty>((props) =>
  commonCSS(props)
)<CommonCSSProperty>``

export default UnstyledText
