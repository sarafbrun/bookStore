export function ListOfBooks({ books }) {
    return (
        <ul className="books">
            {books.map(book =>
            (
                <li className="book" key={book.ISBN10}>
                    <h2>{book.title}</h2>
                    <img src={book.img} alt={book.title} />
                    {book.description && <p>Descripción: {book.description}</p>}
                    {book.author && <p>Autor(a): {book.author}</p>}
                    {book.year && <p>Año de publicación: {book.year}</p>}
                    <p>{book.ISBN10}</p>
                </li>
            ))}
        </ul>
    )
}

export function NoBooksResult() {
    return (
        <p>No se encontraron libros para esta búsqueda.</p>
    )
}

export function Books({ books }) {
    const hasBooks = books?.length > 0;
    return (
        hasBooks
            ? <ListOfBooks books={books} />
            : <NoBooksResult />
    )
}