import React from 'react'
import FavsWithQuery from '../containers/FavsWithQuery'
import Layout from '../components/Layout'

const Favs = () => {
    return (
        <Layout
            title='Tus favoritas'
            subtitle='Aquí puedes encontrar tus favoritas'
        >
            <FavsWithQuery />
        </Layout>
    )
}

export default Favs
