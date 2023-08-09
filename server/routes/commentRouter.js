//Requires Libraries
const express = require('express');
const router = express.Router();
const path = require('path');
const cors = require("cors");

//Requires Files
require(path.join(__dirname, '..', 'connections', 'mongodb-connection'));
const commentSchema = require(path.join(__dirname, '..', 'connections', 'schemas', 'comment'));

//CORS Middleware
router.use(
    cors({
      origin: "*",
    })
  );


//START ROUTES
// GET route to fetch comments
router.get('/get', async (req, res) => {
    try {
        const comments = await commentSchema.find();
        res.send(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).send('Error fetching comments');
    }
});

// POST route to add a new comment
router.post('/add', async (req, res) => {
  const { postId, name, content } = req.body;

  try {
      const newComment = new commentSchema({
          postId,
          name,
          content,
          createdDate: new Date()
      });

      const savedComment = await newComment.save();
      res.status(201).json(savedComment);
  } catch (error) {
      console.error('Error adding comment:', error);
      res.status(500).send('Error adding comment');
  }
});

router.delete('/delete', async (req, res) => {
  const id = req.body.commentID; // Access comment ID from request body
  try {
    const deletedComment = await commentSchema.deleteOne({ _id: id });
    res.status(200).json(deletedComment);
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).send('Error deleting comment');
  }
});

module.exports = router;
