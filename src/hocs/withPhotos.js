import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

export default graphql(gql`
    query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`)
