const countries = require('./world.json');


class Player {
  constructor(name) {
    this.id = 'test';
    this.name = name;
    this.colour = 'red';
    this.current = 'Austra';
    this.givenUp = false;
  }

  type(text) {
    this.current = text;
  }

  giveUp() {
    this.givenUp = true;
  }
}

class World {
  constructor() {
    this.players = [];
    this.guesses = [];
  }

  addPlayer(name) {
    const player = new Player(name);

    this.players.push(player);
    return player;
  }

  guessCountry(guess, player) {
    const result = guess ? countries.find(country => country.name.toLowerCase() === guess.toLowerCase()) : null;

    if(result) {
      this.guesses.push({ player: player.id, code: result.id, text: guess });
    }

    return result;
  }
}

module.exports = {
  World,
  Player
}
