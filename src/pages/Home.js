import React, { memo } from 'react'
import ListOfCategories from '../components/ListOfCategories'
import ListOfPhotoCards from '../containers/ListOfPhotoCards'
import Layout from '../components/Layout'

const Home = ({ id }) => {
    return (
        <Layout
            title='Tu app de fotos de mascotas'
            subtitle='Con petsgram puedes encontrar fotos de animales domésticos muy bonitos'
        >
            <ListOfCategories />
            <ListOfPhotoCards categoryId={id} />
        </Layout>
    )
}

export default memo(Home, (prevProps, props) => {
    return prevProps.id === props.id
})
