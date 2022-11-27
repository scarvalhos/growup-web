import styled, { css } from 'styled-components'

import { Controller } from 'react-hook-form'
import { IMaskInput } from 'react-imask'
import { Content, Typography } from '@core'

interface Props {
  variant?: string
  erro?: string
}

export const FieldWrapper = styled(Content).attrs({
  direction: 'column',
})``

export const FieldLabel = styled.p<Props>`
  color: ${({ theme }) => theme.colors.title};
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.fonts.weight.regular};

  ${({ erro }) =>
    !!erro &&
    css`
      color: ${({ theme }) => theme.colors.danger};
    `}
`

export const FieldContent = styled(Content).attrs({
  direction: 'row',
})<Props>`
  width: 100%;
  background: ${({ theme, variant }) =>
    variant === 'outlined' ? 'transparent' : theme.colors.shape_dark};
  padding: 0.75rem 1rem;
  border-radius: 50px;
  position: relative;

  ${({ variant }) =>
    variant === 'outlined' &&
    css`
      border: 1px solid;
      filter: brightness(1.5);

      border-color: ${({ theme }) => theme.colors.main};
    `}

  ${({ erro }) =>
    !!erro &&
    css`
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.danger};
    `}
`

export const FieldController = styled(Controller)``

export const Field = styled(IMaskInput)<Props>`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  color: ${({ theme }) => theme.colors.title};
  font-size: 1rem;

  ${({ variant }) =>
    variant === 'password' &&
    css`
      font: normal 100% sans-serif;
    `}
`

export const Error = styled(Typography)`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.75rem;
  filter: brightness(1.1);
  white-space: pre-wrap;
`
