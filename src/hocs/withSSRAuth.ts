import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { AuthTokenError } from '@services/errors/AuthTokenError'

import {
  validateToken,
  validateUserPermission,
} from '@utils/validateUserPermission'

import nookies, { destroyCookie, parseCookies } from 'nookies'
import decode from 'jwt-decode'

type WithSSRAuthOptions = {
  isAdmin?: boolean
}

export function withSSRAuth<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>,
  options?: WithSSRAuthOptions
) {
  return async (ctx: GetServerSidePropsContext) => {
    const { 'growup.token': token } = parseCookies(ctx)

    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    if (options) {
      const user = decode<{ isAdmin: boolean }>(token)
      const { isAdmin } = options

      const userHasValidPermission = validateUserPermission({
        user,
        isAdmin,
      })

      if (!userHasValidPermission) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
      }
    }

    try {
      const isValidToken = validateToken(token)

      if (!isValidToken) {
        nookies.destroy(ctx, 'growup.token')
        destroyCookie(ctx, 'growup.token')

        return {
          redirect: {
            destination: '/redirect',
            permanent: false,
          },
        }
      }

      return fn(ctx)
    } catch (error) {
      if (error instanceof AuthTokenError) {
        nookies.destroy(ctx, 'growup.token')

        return {
          redirect: {
            destination: '/redirect',
            permanent: false,
          },
        }
      }
    }
  }
}
