const getAll = () => { return db.query('Select * from books') };

const getById = (id) => { return db.query('Select * from books where id = ?', [id]) };

const addBook = ({ title, description, saga, image, author, year, ISBN10 }) => {
    return db.query(`INSERT INTO books
    (title, description, saga, image, author, year, ISBN10)
    VALUE
    (?,?,?,?,?,?,?)
    `, [title, description, saga, image, author, year, ISBN10])
};

const updateBook = (id, { title, description, saga, image, author, year, ISBN10 }) => {
    return db.query(`UPDATE books SET
    title = ?, description = ?, saga = ?, image = ?, author = ?, year = ?, ISBN10 = ? where id = ?
    `, [title, description, saga, image, author, year, ISBN10, id])
};

const deleteBook = (id) => {
    return db.query(`DELETE FROM books where id = ?`, [id])
};

const findBook = (find) => {
    return db.query("SELECT * FROM books_db.books WHERE books.title LIKE '%" + find + "%' or books.saga LIKE '%" + find + "%' or books.ISBN10 LIKE '%" + find + "%' or books.author LIKE '%" + find + "%' or books.year LIKE '%" + find + "%'")
}


module.exports = { getAll, getById, addBook, updateBook, deleteBook, findBook }