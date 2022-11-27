import { UseFormRegister, FieldValues, Control } from 'react-hook-form'
import { TbEye, TbEyeOff } from 'react-icons/tb'
import { useState } from 'react'

import FieldInput, { SharedFieldInputProps } from '../Field'
import { IconButton } from '@core'

type Password = SharedFieldInputProps & {
  name: string
  register: UseFormRegister<FieldValues>
  control?: Control<FieldValues, object>
  label?: string
  error?: string
}

const Password: React.FC<Password> = ({
  register,
  name,
  control,
  label,
  error,
  ...props
}) => {
  const [seePassword, setSeePassword] = useState<'password' | 'text'>(
    'password'
  )

  const handleSeePassword = () => {
    if (seePassword === 'password') {
      setSeePassword('text')
    }
    if (seePassword === 'text') {
      setSeePassword('password')
    }
  }

  return (
    <FieldInput
      {...props}
      {...register(name)}
      type={seePassword}
      label={label}
      control={control}
      variant="password"
      error={error}
      renderInsideInput={
        <>
          {seePassword === 'password' ? (
            <IconButton
              onClick={handleSeePassword}
              style={{
                position: 'absolute',
                right: 6,
                top: 5,
              }}
            >
              <TbEye color="inherit" />
            </IconButton>
          ) : (
            <IconButton
              onClick={handleSeePassword}
              style={{
                position: 'absolute',
                right: 6,
                top: 5,
              }}
            >
              <TbEyeOff />
            </IconButton>
          )}
        </>
      }
    />
  )
}

export default Password
