import styled, { css } from 'styled-components'
import Link from 'next/link'

import { commonCSS, parseValueCSS } from '@utils/styles'
import { CommonCSSProperty } from '@styles/theme'

export type LinkProps = CommonCSSProperty & {
  variant?: 'contained' | 'outlined' | 'text'
  widthMode?: 'full' | 'fit'
  width?: string | number
}

export const LinkNext = styled(Link)``

export const LinkButton = styled.a.attrs<LinkProps>((props) =>
  commonCSS(props, { p: '0.75rem 1rem' })
)<LinkProps>`
  outline: none;
  height: fit-content;
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  ${({ theme, variant, color }) => {
    switch (variant) {
      case 'contained':
        return css`
          background: ${theme.colors[color || 'gradient']};
          border: none;

          &:hover {
            filter: brightness(0.9);
          }
        `

      case 'outlined':
        return css`
          background: none;
          border-width: 1.5px;
          border-style: solid;
          border-color: ${theme.colors[color || 'main']};

          &:hover {
            background: ${theme.colors.background_secondary};
            filter: brightness(1.25);
          }
        `

      case 'text':
        return css`
          background: none;
          border: none;
        `

      default:
        return css`
          background: ${theme.colors[color || 'main']};
          border: none;
        `
    }
  }}

  ${({ width, widthMode }) => {
    if (widthMode === 'fit')
      return css`
        width: fit-content;
      `
    if (widthMode === 'full')
      return css`
        width: 100%;
      `
    if (width)
      return css`
        width: ${parseValueCSS(width)};
      `
  }}
`
