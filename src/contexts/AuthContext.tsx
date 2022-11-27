import * as React from 'react'

import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { User } from '@utils/types'
import { Sign } from 'crypto'

type AuthProviderProps = {
  children: React.ReactNode
}

type AuthContextData = {
  isAuthenticated: boolean
  loading: boolean
  user: User | null
  authenticate: (credentials: {
    email: string
    password: string
  }) => Promise<void>
  register: (credentials: { email: string; password: string }) => Promise<void>
  refetchMe: () => Promise<void>
  signOut: () => void
}

export const AuthContext = React.createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = React.useState<User | null>(null)
  const [token, setToken] = React.useState<string | null>(null)
  const isAuthenticated = !!user

  const { push } = useRouter()

  // QUERIES & MUTATIONS

  const AUTHENTICATE_MUTATION = gql`
    mutation ($email: String!, $password: String!) {
      signIn(authInput: { email: $email, password: $password }) {
        id
        email
        accessToken
      }
    }
  `

  const REGISTER_MUTATION = gql`
    mutation ($email: String!, $password: String!) {
      createUser(
        userInput: { email: $email, password: $password, isAdmin: false }
      ) {
        id
        email
      }
    }
  `

  const GETME_MUTATION = gql`
    query ($token: String!) {
      getMe(getMeInput: { token: $token }) {
        id
        email
        isAdmin
        profile {
          avatar
          birthDate
          completeName
          cpf
          phone
        }
        student {
          id
          enrollments {
            id
            title
          }
          preEnrollments {
            id
            enrollment {
              id
              title
            }
            status
          }
        }
        educator {
          id
          enrollments {
            id
            title
          }
        }
        # studentId
        # educatorId
      }
    }
  `

  const [createUser] = useMutation(REGISTER_MUTATION)

  const [signIn, { loading }] = useMutation(AUTHENTICATE_MUTATION)

  const { refetch } = useQuery(GETME_MUTATION, {
    variables: { token },
  })

  // FUNCTIONS

  const authenticate = React.useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      signIn({
        variables: {
          email,
          password,
        },
      }).then(({ data }) => {
        setUser(data?.signIn)
        setCookie(
          undefined,
          'growup.token',
          `Bearer ${data?.signIn?.accessToken}`,
          {
            maxAge: 60 * 60 * 24 * 2, // 2 days
            path: '/', // Whitch paths in my app has access to this cookie
          }
        )
      })
    },
    []
  )
  const register = React.useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      createUser({
        variables: {
          email,
          password,
        },
      }).then(({ data }) => {
        setUser(data?.createUser)
        setCookie(
          undefined,
          'growup.token',
          `Bearer ${data?.signIn?.accessToken}`,
          {
            maxAge: 60 * 60 * 24 * 2, // 2 days
            path: '/', // Whitch paths in my app has access to this cookie
          }
        )
      })
    },
    []
  )

  const signOut = React.useCallback(() => {
    destroyCookie(null, 'growup.token', { path: '/' })
    setUser(null)
    push('/')
  }, [])

  // const createUser = async ({
  //   username,
  //   email,
  //   password,
  // }: CreateUserCredentials) => {
  //   try {
  //     await api.post('/auth/register', {
  //       username,
  //       email,
  //       password,
  //     })

  //     signIn({
  //       username: username,
  //       password: password,
  //     })
  //   } catch (error: any) {
  //     toast.error(error.message)
  //   }
  // }

  const refetchMe = React.useCallback(async () => {
    const { data } = await refetch({ token })
    return setUser(data?.getMe)
  }, [refetch, token])

  React.useEffect(() => {
    const { 'growup.token': authToken } = parseCookies()

    if (authToken) {
      setToken(authToken)
    }
  }, [refetchMe])

  React.useEffect(() => {
    if (token) {
      refetchMe()
    }
  }, [refetchMe, token])

  React.useEffect(() => {
    console.log(user, 'user')
  }, [user])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loading,
        authenticate,
        register,
        refetchMe,
        user,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return React.useContext(AuthContext)
}
