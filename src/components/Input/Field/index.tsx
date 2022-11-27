import * as React from 'react'

import {
  Field,
  FieldWrapper,
  FieldLabel,
  FieldController,
  FieldContent,
  Error,
} from './styles'

import { ChangeHandler, FieldValues, Control } from 'react-hook-form'
import { InputTypes, useFieldInput } from './Field.hook'
import { Content } from '@core'
import { Profile } from '@utils/types'

export interface SharedFieldInputProps {
  className?: string
  containerClassName?: string
  inputWrapperClassName?: string
  passthrough?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
}

export interface MustHaveProps extends SharedFieldInputProps {
  id?: string
  name: string
  type?: InputTypes
  label?: string
  placeholder?: string
  defaultValue?: unknown
  disabled?: boolean
}

export type FieldInputProps = MustHaveProps & {
  error?: string
  onFocus?: ChangeHandler
  control?: Control<
    {
      completeName: string | undefined
      cpf: string | undefined
      phone: string | undefined
      birthDate: string | undefined
    },
    any
  >
  after?: React.ReactNode
  renderInsideInput?: React.ReactNode
  variant?: string
}

const FieldInput: React.FC<FieldInputProps> = (
  {
    id,
    name: _name,
    type = 'text',
    label,
    passthrough,
    placeholder,
    onFocus,
    disabled,
    control,
    defaultValue,
    after,
    renderInsideInput,
    variant,
    error,
  },
  ref
) => {
  const { masks, realtypes, defaultPlaceholders } = useFieldInput({
    name: _name,
  })

  return (
    <FieldWrapper>
      {label && (
        <FieldLabel className="form-label" erro={error}>
          {label}
        </FieldLabel>
      )}

      <Content direction="row">
        <FieldController
          name={_name}
          control={control}
          defaultValue={defaultValue}
          render={({ field: { onChange, name, value, onBlur, ref } }) => (
            <FieldContent variant={variant} erro={error}>
              <Field
                variant={variant}
                color="white"
                id={id}
                mask={(masks[type] as never) || /^.*$/}
                type={realtypes[type]}
                placeholder={placeholder || defaultPlaceholders[type]}
                name={name}
                disabled={disabled}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                {...(value !== undefined ? { value } : {})}
                {...(passthrough as any)}
              />
              {renderInsideInput}
            </FieldContent>
          )}
        />
        {after}
      </Content>
      {error && <Error>{error}</Error>}
    </FieldWrapper>
  )
}

export default FieldInput
