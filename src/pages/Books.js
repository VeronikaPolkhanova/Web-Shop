import React from 'react'
import ShopList from '../components/ShopList'

function Books() {
    const books = [{
        id: 1,
        price: 20,
        author: 'М. Булгаков',
        title: 'Собачье сердце'
    },
    {
        id: 2,
        price: 25,
        author: 'М. Булгаков',
        title: 'Собачье сердце'
    },
    {
        id: 3,
        price: 14,
        author: 'М. Булгаков',
        title: 'Собачье сердце'
    },
    {
        id: 4,
        price: 25,
        author: 'М. Булгаков',
        title: 'Собачье сердце'
    },
    {
        id: 5,
        price: 25,
        author: 'М. Булгаков',
        title: 'Собачье сердце'
    },
    {
        id: 6,
        price: 25,
        author: 'М. Булгаков',
        title: 'Собачье сердце'
    },
    {
        id: 7,
        price: 25,
        author: 'М. Булгаков',
        title: 'Собачье сердце'
    },
    {
        id: 8,
        price: 25,
        author: 'М. Булгаков',
        title: 'Собачье сердце'
    }]
    return (
        <ShopList books={books} />
    )
}
export default Books;