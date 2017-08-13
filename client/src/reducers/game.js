
const game = (state = { players: [], guesses: [], giveUp: false, currentGuess: '', sendingGuess: false, sendingGiveUp: false, guessText: '', name: '' }, action) => {
	switch(action.type) {
	case 'UPDATE_WORLD':
		return Object.assign({}, state, { players: action.world.players, guesses: action.world.guesses, name: action.world.name });
	case 'GUESS_IN_PROGRESS':
		return Object.assign({}, state, { sendingGuess: true, guessText: '' });
	case 'TYPE_GUESS':
	  return Object.assign({}, state, { guessText: action.text });
	case 'UPDATE_GUESSES':
		return Object.assign({}, state, { sendingGuess: false, guesses: action.guesses, guessText: '' });
	case 'GIVE_UP_IN_PROGRESS':
		return Object.assign({}, state, { sendingGiveUp: true });
	case 'GIVE_UP_CONFIRMATION':
		return Object.assign({}, state, { giveUp: true, sendingGiveUp: false });
	default:
		return state;
	}
}


export default game
