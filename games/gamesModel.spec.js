
const db = require('../data/dbConfig');
const Games = require('./gamesModel');

describe('games model', () => {

  beforeEach(async () => {
    await db('games').truncate();  
  })

  // describe('return array')
})