import withoutResults from '../mocks/withoutResults.json'
import { useState, useEffect } from 'react'

export function useBooks(search) {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {



        try {
            const response = await fetch('http://localhost:3000/api/books');
            if (response.ok) {
                const data = await response.json();
                setBooks(data.data);
            } else {
                console.error('Error fetching data:', response.statusText);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }



    };

    const findBooks = async (search) => {


        try {
            const result = await fetch('http://localhost:3000/api/books/find/' + search)
            const data = await result.json();
            console.log(data);
            if (data.ok) {
                setBooks(data.data)
            }

        } catch (error) {
            console.log('Error fetching data:', error)
        }




    }




    const mappedBooks = books.map(book => ({
        id: book.id,
        title: book.title,
        description: book.description,
        saga: book.saga,
        img: book.image,
        year: book.year,
        ISBN10: book.ISBN10
    }))



    return { books: mappedBooks, getBooks, findBooks };
}