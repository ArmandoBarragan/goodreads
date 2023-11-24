const express = require('express');
const { dbPool } = require("../../config/settings")

const router = express.Router();

router.get("/:keyword?", async (req, res)=> {
    // Gets a list of authors given a keyword
    const keyword = req.query.keyword || "";
    try {
        const [rows] = await dbPool.query('CALL searchAuthors(?)', [keyword]);
        res.json({ authors: rows[0] });
    } catch (error) {
        console.error('Error calling stored procedure:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.delete("/:authorId", (req, res)=> {
    const id = req.query.authorId;
});

router.post("/", async (req, res)=> {
    const { authorName } = req.body;
    console.log(req.body)
    try {
        console.log(authorName)
        await dbPool.query('CALL createAuthor(?)', [authorName]);
        res.json({ author: authorName });
    } catch (error) {
        console.error('Error calling stored procedure:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get("/authors", (req, res) => {

});

module.exports = router;