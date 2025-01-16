const express=require("express");
const Book = require("../model/book");

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(200).json(books);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });

    }
}
exports.addBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
}
    
    