const db = require("../connections/mongodb-connection");

const express = require('express');
const router = express.Router();

const commentSchema = require('../connections/schemas/comment');

router.get('/comments', (req, res) => {
    commentSchema.find({}, (err, comments) => {
        if (err) {
            console.log(err);
        } else {
            res.send(comments);
        }
    });
}
);

module.exports = router;