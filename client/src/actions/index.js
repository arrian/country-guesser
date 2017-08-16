


export const updateWorld = world => ({
	type: 'UPDATE_WORLD',
	world
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
	return (dispatch, getState, socket) => {
		console.log('sending guess: ' + guess);
		dispatch(guessInProgress());
		socket.emit('guess', guess, result => {});
		// return new Promise((resolve, reject) => {
			// dispatch(updateGuesses([{ code: 'AU', text: 'Australia', player: '1' }]));
		// });
	}
};

export function sendGuessPartial(text) {
	return (dispatch, getState, socket) => {
		console.log('sending partial guess: ' + text);
		socket.emit('type', text, result => {});
		return new Promise((resolve, reject) => {
			dispatch(typeGuess(text));
		})
	}
}

export function sendGiveUp() {
	return (dispatch, getState, socket) => {
		dispatch(giveUpInProgress());
		socket.emit('give up');
		return new Promise((resolve, reject) => {
			dispatch(giveUpConfirmation())
		})
	}
}
