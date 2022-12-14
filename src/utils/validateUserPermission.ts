import { secret } from '@config'

import jwt from 'jsonwebtoken'

type User = {
  isAdmin: boolean
}

type ValidateUserPermissionsParams = {
  user: User | null
  isAdmin?: boolean
}

export function validateUserPermission({
  user,
  isAdmin,
}: ValidateUserPermissionsParams) {
  const hasPermission = user?.isAdmin === isAdmin

  if (!hasPermission) {
    return false
  }

  user

  return true
}

export const validateToken = (token: string) => {
  let isValidToken = true

  const parts = token.split(' ')

  const [_scheme, authToken] = parts

  jwt.verify(authToken, secret, async function (err, decoded) {
    if (new Date((decoded as any)?.exp * 1000) < new Date()) {
      isValidToken = false
    }

    if (err) {
      isValidToken = false
    }
  })

  return isValidToken
}
