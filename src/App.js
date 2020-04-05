import React, { useContext, lazy, Suspense } from 'react'
import Logo from './components/Logo'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Detail from './pages/Detail'
import User from './pages/User'
import NotRegisteredUser from './pages/NotRegisteredUser'
import GlobalStyle from './styles/GlobalStyle'
import { Context } from './Context'

import { Router, Redirect } from '@reach/router'

const Favs = lazy(() => import('./pages/Favs'))

const App = () => {
    const { isAuth } = useContext(Context)
    return (
        <Suspense fallback={<div />}>
            <GlobalStyle />
            <Logo />
            <Router>
                <NotFound default />
                <Home path='/' />
                <Home path='/pet/:id' />
                <Detail path='/detail/:id' />
                {!isAuth && <NotRegisteredUser path='/login' />}
                {!isAuth && <Redirect from='/favs' to='/login' />}
                {!isAuth && <Redirect from='/user' to='/login' />}
                {isAuth && <Redirect from='/login' to='/' />}
                <Favs path='/favs' />
                <User path='/user' />
            </Router>
            <NavBar />
        </Suspense>
    )
}

export default App
