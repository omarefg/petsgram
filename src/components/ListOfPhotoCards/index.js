import React from 'react'
import PhotoCard from '../PhotoCard'

const ListOfPhotoCards = ({ data: { photos = [] } } = {}) => {
    return (
        <ul>
            {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
        </ul>
    )
}

export default ListOfPhotoCards
