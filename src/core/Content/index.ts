import styled from 'styled-components'

import { CommonCSSProperty } from '@styles/theme'
import { commonCSS } from '@utils/styles'

type ContentProps = CommonCSSProperty

const Content = styled.div.attrs<ContentProps>((props) =>
  commonCSS(props)
)<ContentProps>``

export default Content
