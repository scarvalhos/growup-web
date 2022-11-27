import type { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '@contexts/AuthContext'
import { apolloClient } from '@services/apollo'
import { theme } from '@styles/theme'

import '@styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default MyApp

