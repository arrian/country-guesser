const uuid = require('uuid-v4');
const animals = require('animals');
const chance = require('chance').Chance();

const countries = require('./world.json');
const adjectives = require('./adjectives.json');
const colours = [
  'red', 'orange', 'yellow', 'green', 'teal',
  'blue', 'violet', 'purple', 'pink'
];


class Player {
  constructor(name) {
    this.id = uuid();
    this.name = name;
    this.colour = chance.pickone(colours);
    this.current = '';
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
    this.name = chance.pickone(adjectives) + '-' + animals();
    console.log(this.name);
    this.players = [];
    this.guesses = [];
  }

  addPlayer(name) {
    const player = new Player(name);

    this.players.push(player);
    return player;
  }

  isCountry(guess, country) {
    if(country.name.toLowerCase() === guess.toLowerCase()) return true;
    if(country.synonyms && country.synonyms.map(synonym => synonym.toLowerCase()).includes(guess.toLowerCase())) return true;
    return false;
  }

  guessCountry(guess, player) {
    const result = guess ? countries.find(country => this.isCountry(guess, country)) : null;

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
