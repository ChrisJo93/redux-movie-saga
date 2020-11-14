const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:id', (req, res) => {
  const queryText = `SELECT "genres".name FROM "movies"
  JOIN "movie_genre" ON "movies".id = "movie_genre".movies_id
  JOIN "genres" ON "movie_genre".genre_id = "genres".id
  WHERE "movies".id = $1;`;
  pool
    .query(queryText, [req.params.id])
    .then((response) => {
      res.send(response.rows);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error completing GET GENRE', err);
      res.sendStatus(500);
    });
});
module.exports = router;
