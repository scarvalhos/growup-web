import styled from 'styled-components'

import { CommonCSSProperty } from '@styles/theme'
import { commonCSS } from '@utils/styles'

const Typography = styled.p.attrs<CommonCSSProperty>((props) =>
  commonCSS(props, { p: 0, m: 0 })
)<CommonCSSProperty>``

export default Typography
