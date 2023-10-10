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

module.exports = { getAll, getById, addBook, updateBook, deleteBook }