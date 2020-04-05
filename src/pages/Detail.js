import React from 'react'
import PhotoCardWithQuery from '../containers/PhotoCardWithQuery'
import Layout from '../components/Layout'

const Detail = ({ id }) => {
    return (
        <Layout
            title={`Fotografía ${id}`}
        >
            <PhotoCardWithQuery id={id} />
        </Layout>
    )
}

export default Detail
