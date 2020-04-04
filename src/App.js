import React from 'react'
import ListOfCategories from './components/ListOfCategories'
import ListOfPhotoCards from './containers/ListOfPhotoCards'
import Logo from './components/Logo'
import GlobalStyle from './styles/GlobalStyle'

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Logo />
            <ListOfCategories />
            <ListOfPhotoCards categoryId={1} />
        </>
    )
}

export default App
