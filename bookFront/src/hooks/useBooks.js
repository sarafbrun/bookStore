import withResults from '../mocks/withResults.json'
import { useState } from 'react'

export function useBooks() {
    const [responseBooks, setResponseBooks] = useState([])

    const books = withResults.data

    const mappedBooks = books.map(book => ({
        id: book.id,
        title: book.title,
        description: book.description,
        saga: book.saga,
        img: book.image,
        year: book.year,
        ISBN10: book.ISBN10
    }))



    return { books: mappedBooks, getBooks };
}