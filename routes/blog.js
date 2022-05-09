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

// CREATE POST
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
  res.redirect('/posts');
});

// READ POST
router.get('/posts/:id', async (req, res) => {
  const query =
    'SELECT posts.*, authors.name AS author, authors.email AS author_email FROM posts INNER JOIN authors ON posts.author_id = authors.id WHERE posts.id = ?';
  const [posts] = await db.query(query, [req.params.id]);

  // ? Handle 404 error - Not Found
  if (!posts || posts.length === 0) return res.status(404).render('404');
  // ? Render the resource
  const postData = {
    ...posts[0],
    humanReadableDate: posts[0].date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  };
  res.render('post-details', { post: postData });
});

// UPDATE POST
router.get('');

module.exports = router;
