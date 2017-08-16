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

    return true;
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

  kickPlayer(id) {
    this.players = this.players.filter(player => player.id !== id);
    this.guesses = this.guesses.filter(guess => guess.player !== id);
  }

  playerSummary() {
    this.players.forEach(player => {
      const playerGuesses = this.getGuesses(player);
      console.log('--------------');
      console.log(`${player.name} (${player.id})`);
      console.log(`correct: ${playerGuesses.filter(guess => guess.correct).length}`);
      console.log(`duplicate: ${playerGuesses.filter(guess => guess.duplicate).length}`);
      console.log(`incorrect: ${playerGuesses.filter(guess => !guess.correct && !guess.duplicate).length}`);
    });
  }

  isCountry(guess, country) {
    if(country.name.toLowerCase() === guess.toLowerCase()) return true;
    if(country.synonyms && country.synonyms.map(synonym => synonym.toLowerCase()).includes(guess.toLowerCase())) return true;
    return false;
  }

  guessCountry(text, player) {
    const country = countries.find(country => this.isCountry(text, country)) || {};
    const guess = { player: player.id, code: country.id, text: text, duplicate: this.guesses.map(guess => guess.code).includes(country.id), correct: !!country.id };
    this.guesses.push(guess);
    return guess;
  }

  getGuesses(player) {
    return this.guesses.filter(guess => guess.player === player.id);
  }
}

module.exports = {
  World,
  Player
}
