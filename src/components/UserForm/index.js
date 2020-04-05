import React from 'react'
import { Form, Input, Title, Error } from './styles'
import useInputValue from '../../hooks/useInputValue'
import SubmitButton from '../SubmitButton'

const UserForm = ({ onSubmit, title, error, disabled }) => {
    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(email.value, password.value)
    }

    return (
        <>
            <Form disabled={disabled} onSubmit={handleSubmit}>
                <Title>{title}</Title>
                <Input disabled={disabled} placeholder='Email' {...email} />
                <Input disabled={disabled} placeholder='Password' type='password' {...password} />
                <SubmitButton disabled={disabled}>{title}</SubmitButton>
                {error && <Error>{error}</Error>}
            </Form>
        </>
    )
}

export default UserForm
