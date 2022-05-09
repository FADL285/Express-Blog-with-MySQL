const express = require('express');
const db = require('../db');

const router = express.Router();
router.get('/', (req, res) => res.redirect('/posts'));

router.get('/posts', async (req, res) => {
  const query = `SELECT posts.*, authors.name AS author FROM posts INNER JOIN authors ON posts.author_id = authors.id`;
  const [posts] = await db.query(query);
  res.render('posts-list', { posts });
});

router.get('/new-post', async (req, res) => {
  const [authors] = await db.query('SELECT * FROM authors');
  res.render('create-post', { authors });
});

router.post('/posts', async (req, res) => {
  const data = [
    req.body.title,
    req.body.summary,
    req.body.content,
    req.body.author
  ];
  await db.query(
    `INSERT INTO posts (title, summary, body, author_id) VALUES (?)`,
    [data]
  );
  res.redirect('/');
});

module.exports = router;
