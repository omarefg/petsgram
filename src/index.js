import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import App from './App'
import Context from './Context'

const client = new ApolloClient({
    uri: 'https://petsgram-server.now.sh/graphql',
    request: operation => {
        const token = window.sessionStorage.getItem('token')
        const authorization = token ? `Bearer ${token}` : ''
        operation.setContext({
            headers: {
                authorization
            }
        })
    },
    onError: error => {
        const { networkError } = error
        if (networkError && networkError.result.code === 'invalid_token') {
            window.sessionStorage.removeItem('token')
            window.location.href = '/'
        }
    }
})

render(
    <Context.Provider>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Context.Provider>,
    document.getElementById('app')
)
