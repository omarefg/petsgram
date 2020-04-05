import React from 'react'
import { MdHome, MdFavorite, MdPerson } from 'react-icons/md'
import { Nav, Link } from './styles'

const SIZE = '1.5em'

const NavBar = () => {
    return (
        <Nav>
            <Link to='/'><MdHome size={SIZE} /></Link>
            <Link to='/favs'><MdFavorite size={SIZE} /></Link>
            <Link to='/user'><MdPerson size={SIZE} /></Link>
        </Nav>
    )
}

export default NavBar
