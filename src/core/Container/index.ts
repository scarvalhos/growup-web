import styled from 'styled-components'

import { CommonCSSProperty } from '@styles/theme'
import { commonCSS } from '@utils/styles'

type ContainerProps = CommonCSSProperty

const Container = styled.div.attrs<ContainerProps>((props) =>
  commonCSS(props, { p: '1rem 2rem' })
)<ContainerProps>`
  width: 100%;
`

export default Container
