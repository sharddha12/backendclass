const express=require("express");
const publication=require("../model/publication");

exports.getPublications = async (req, res) => {
    try {
        const publications = await publication.find();
        res.json(200).json(publications);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};
exports.addPublication = async (req, res) => {
    try {
        const publication = await publication.create(req.body);
        res.status(201).json(publication);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
}  



