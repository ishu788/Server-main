const mongoose = require("mongoose")


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

const Book = mongoose.model('300351938-Ishwinder', bookSchema);

module.exports = { Book, bookSchema };
