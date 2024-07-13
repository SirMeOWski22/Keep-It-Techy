const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

//Create a new post
router.post('/', async (req, res) => {
  try {
    console.log('Request body:', req.body); // Log request body for debugging
    console.log('Session user ID:', req.session.user_id); // Log session user ID for debugging

    if (!req.session.user_id) {
      res.status(401).json({ message: 'You must be logged in to create a post' });
      return;
    }

    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.error('Failed to create post:', err); // Log error for debugging
    res.status(400).json({ message: 'Failed to create post', error: err });
  }
});

//Update a post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!postData[0]) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete a post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
