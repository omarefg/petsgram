import React, { useContext } from 'react'
import { Context } from '../Context'
import UserForm from '../components/UserForm'
import RegisterMutation from '../containers/RegisterMutation'
import LoginMutation from '../containers/LoginMutation'

const NotRegisteredUser = () => {
    const { activateAuth } = useContext(Context)
    return (
        <>
            <RegisterMutation>
                {(register, { loading, error }) => {
                    const onSubmit = (email, password) => {
                        const input = { email, password }
                        const variables = { input }
                        register({ variables })
                            .then(({ data: { signup } }) => activateAuth(signup))
                    }

                    const errorMessage = error && 'El usuario ya existe o hay algún problema'

                    return (
                        <UserForm
                            onSubmit={onSubmit}
                            title='Regístrate'
                            error={errorMessage}
                            disabled={loading}
                        />

                    )
                }}
            </RegisterMutation>
            <LoginMutation>
                {(login, { loading, error }) => {
                    const onSubmit = (email, password) => {
                        const input = { email, password }
                        const variables = { input }
                        login({ variables })
                            .then(({ data: { login } }) => activateAuth(login))
                    }
                    const errorMessage = error && 'La contraseña no es correcta, o el usuario no existe'
                    return (
                        <UserForm
                            onSubmit={onSubmit}
                            title='Inicia Sesión'
                            error={errorMessage}
                            disabled={loading}
                        />
                    )
                }}
            </LoginMutation>
        </>
    )
}

export default NotRegisteredUser
