
const game = (state = { players: [], guesses: [], giveUp: false, currentGuess: '', sendingGuess: false, sendingGiveUp: false, guessText: '' }, action) => {
	switch(action.type) {
	case 'UPDATE_PLAYERS':
		return Object.assign({}, state, { players: action.players });
	case 'GUESS_IN_PROGRESS':
		return Object.assign({}, state, { sendingGuess: true });
	case 'TYPE_GUESS':
	  return Object.assign({}, state, { guessText: action.text });
	case 'UPDATE_GUESSES':
		return Object.assign({}, state, { sendingGuess: false, guesses: action.guesses });
	case 'GIVE_UP_IN_PROGRESS':
		return Object.assign({}, state, { sendingGiveUp: true });
	case 'GIVE_UP_CONFIRMATION':
		return Object.assign({}, state, { giveUp: true, sendingGiveUp: false });
	default:
		return state;
	}
}


export default game
