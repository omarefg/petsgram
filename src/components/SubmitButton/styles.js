import styled from 'styled-components'

export const Button = styled.button`
    background: #596886;
    border-radius: 3px;
    color: #fff;
    display: block;
    width: 100%;
    text-align: center;
    height: 32px;
    text-transform: uppercase;
    font-weight: 600;
    &[disabled] {
        opacity: 0.3;
    }
`
