const express = require('express');

const games = require('../games/gamesModel');

const server = express();

server.use(express.json());

server.get('/games', async (req, res) => {
  const rows = await games.getAll();

  res.status(200).json(rows);
});

server.post('/games', async (req, res) => {
  let game = req.body;

  games.insert(game)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(422).json(error);
    });
});

module.exports = server;