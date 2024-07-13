const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const postsData = await Post.findAll({
      include: [{ model: User }],
    });
    const posts = postsData.map((post) => post.get({ plain: true }));
    res.render('homepage', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.sessionStore.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
