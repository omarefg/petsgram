import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData () {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        window.fetch('https://petsgram-server.now.sh/categories')
            .then(res => res.json())
            .then(res => {
                setCategories(res)
                setLoading(false)
            })
    }, [])
    return { categories, loading }
}

export const ListOfCategories = () => {
    const { categories, loading } = useCategoriesData()
    const [showFixed, setShowFixed] = useState(false)

    useEffect(() => {
        function onScroll (e) {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        document.addEventListener('scroll', onScroll)

        return () => {
            document.removeEventListener('scroll', onScroll)
        }
    }, [showFixed])

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {loading ? (
                <Item key='loading'>
                    <Category />
                </Item>
            ) : (categories.map(({ id, ...category }) => (
                <Item key={id}>
                    <Category {...category} />
                </Item>
            )))}
        </List>
    )

    return (
        <>
            {renderList()}
            {showFixed && renderList(showFixed)}
        </>
    )
}
