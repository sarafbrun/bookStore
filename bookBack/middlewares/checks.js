const { getById } = require("../models/books.model")

const checkId = async (req, res, next) => {
    const book = await getById(req.params.id);
    if (book[0].length === 0) {
        return res.status(404).json({
            status: "error",
            error: "No existe un libro con este id"
        })

    }
    next();
}

module.exports = { checkId }