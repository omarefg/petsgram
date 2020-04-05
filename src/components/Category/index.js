import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) => (
    <Link to={path}>
        <Image src={cover} />
        {emoji}
    </Link>
)

export default Category
