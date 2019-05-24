
const db = require('../data/dbConfig');
const Games = require('./gamesModel');

describe('games model', () => {

  beforeEach(async () => {
    await db('games').truncate();  
  })

  describe('get all()', () => {
    it('should always return an array, even if no games are stored', async () => {
      const games = await db('games');
      expect(games)
    })
  })
})