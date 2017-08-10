
export const updatePlayers = players => ({
	type: 'UPDATE_PLAYERS',
	players
});

export const guessInProgress = () => ({
	type: 'GUESS_IN_PROGRESS'
})

export const updateGuesses = guesses => ({
	type: 'UPDATE_GUESSES',
	guesses
})

export const giveUpInProgress = () => ({
	type: 'GIVE_UP_IN_PROGRESS'
})

export const giveUpConfirmation = () => ({
	type: 'GIVE_UP_CONFIRMATION'
})

export const typeGuess = text => ({
	type: 'TYPE_GUESS',
	text
})

export function sendGuess(guess) {
	return (dispatch, getState) => {
		console.log('sending guess: ' + guess);
		dispatch(guessInProgress());
		return new Promise((resolve, reject) => {
			dispatch(updateGuesses([{ code: 'AU', text: 'Australia', player: '1' }]));
		});
	}
};

export function sendGuessPartial(text) {
	return (dispatch, getState) => {
		console.log('sending partial guess: ' + text);
		return new Promise((resolve, reject) => {
			dispatch(typeGuess(text));
		})
	}
}

export function sendGiveUp() {
	return (dispatch, getState) => {
		dispatch(giveUpInProgress());
		return new Promise((resolve, reject) => {
			dispatch(giveUpConfirmation())
		})
	}
}
