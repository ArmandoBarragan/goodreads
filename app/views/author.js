const express = require('express');

const { dbPool } = require("../../config/db")
const { serializeAuthors } = require("../serializers/author")

const router = express.Router();

router.get("/:keyword?", async (req, res)=> {
    // Gets a list of authors given a keyword
    const keyword = req.query.keyword || "";
    try {
        const [rows] = await dbPool.query('CALL searchAuthors(?)', [keyword]);
        const serializedAuthors = serializeAuthors(rows[0]);
        res.json({ authors: serializedAuthors });
    } catch (error) {
        console.error('Error calling stored procedure:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.delete("/:authorId", async (req, res)=> {
    const authorId = req.query.authorId;
    if (typeof authorId != number){
        res.status(400).json("El ID tiene que ser un número")
    }
    try {
        await dbPool.query('CALL deleteAuthor(?)', [authorId])
        res.status(204).json("Autor borrado exitosamente");
    } catch (error) {
        console.error('Error calling stored procedure:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post("/", async (req, res)=> {
    const { authorName } = req.body;
    try {
        await dbPool.query('CALL createAuthor(?)', [authorName]);
        res.status(201).json({ author: authorName });
    } catch (error) {
        console.error('Error calling stored procedure:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get("/authors", (req, res) => {

});

module.exports = router;