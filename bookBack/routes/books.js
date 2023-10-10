const express = require('express');
const { getAll, addBook, getById, updateBook, deleteBook } = require('../models/books.model');
const { checkId } = require('../middlewares/checks');
const router = express.Router();

router.get('/', async (req, res) => {

    try {
        const [books] = await getAll();
        res.status(200).json({
            data: books
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            error: error.message
        })
    }
});

router.get('/:id', checkId, async (req, res) => {

    const { id } = req.params

    try {
        const [book] = await getById(id);
        res.status(200).json({
            data: book
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            error: error.message
        })
    }
});


router.post('/', async (req, res) => {
    try {
        const newBook = await addBook(req.body);
        res.status(201).json({
            data: newBook
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            error: error.message
        })
    }
});

router.put('/:id', checkId, async (req, res) => {

    const { id } = req.params

    try {
        const editedBook = await updateBook(id, req.body);
        console.log(id);
        res.status(200).json({
            data: editedBook
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            error: error.message
        })
    }
});


router.delete('/:id', checkId, async (req, res) => {

    const { id } = req.params

    try {
        const deletedBook = await deleteBook(id, req.body);
        res.status(200).json({
            data: deletedBook
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            error: error.message
        })
    }
});

module.exports = router;