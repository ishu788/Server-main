const bookRouter = require("express").Router();
const db = require("../Db")
const BookModel = require("../ModelSchema/BookModel");
httpStatus = require("http-status-codes");


//http://localhost:5000/books/
bookRouter.route("/").get((req, res) => {
    BookModel.Book.find()
        .then((books) => res.json(books))
        .catch((err) => res.status(400).json("Error: " + err));
});

//http://localhost:5000/6422c460d386a575c9dad6d8
bookRouter.route("/:id").get((req, res) => {
    BookModel.Book.findById(req.params.id)
        .then((books) => res.json(books))
        .catch((err) => res.status(400).json("Error: " + err));
});

//http://localhost:5000/
bookRouter.route("/").post(async (req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;
   
    const newBook = new BookModel.Book({
        title,
        author,
        description
    });

    try {
        const savedBook = await newBook.save();
        console.log("Book Created");


        res.status(httpStatus.StatusCodes.OK).json({
            "BookAdded": savedBook
        });
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});

//http://localhost:5000/6422c460d386a575c9dad6d8
bookRouter.route("/:id").put(async (req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;


    const book = await BookModel.Book.findById(req.params.id)

    book.title = title;
    book.author = author;
    book.description = description;

    try {
        const savedBook = await book.save();
        console.log("Book Updated");


        res.status(httpStatus.StatusCodes.OK).json({
            "BookUpdated": savedBook
        });
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});

//http://localhost:5000/6422c460d386a575c9dad6d
bookRouter.route("/:id").delete((req, res) => {
    BookModel.Book.deleteOne({ _id: req.params.id })
        .then(() => res.json("Book deleted successfully"))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = bookRouter;
