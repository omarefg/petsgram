import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
import useNearScreen from '../../hooks/useNearScreen'
import FavButton from '../FavButton'
import ToggleLikeMutation from '../../containers/ToggleLikeMutation'

import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

const PhotoCard = ({ id, likes = 0, liked, src = DEFAULT_IMAGE }) => {
    const [show, ref] = useNearScreen()

    return (
        <Article ref={ref}>
            {show && (
                <>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </Link>
                    <ToggleLikeMutation>
                        {(toggleLike) => {
                            const favClickHandler = () => {
                                toggleLike({
                                    variables: {
                                        input: {
                                            id
                                        }
                                    }
                                })
                            }
                            return (
                                <FavButton
                                    liked={liked}
                                    likes={likes}
                                    onClick={favClickHandler}
                                />
                            )
                        }}
                    </ToggleLikeMutation>
                </>
            )}
        </Article>
    )
}

export default PhotoCard
