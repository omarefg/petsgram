import React from 'react'
import { Button } from './styles'

const SubmitButton = ({ children, ...props }) => {
    return (
        <Button {...props}>
            {children}
        </Button>
    )
}

export default SubmitButton
