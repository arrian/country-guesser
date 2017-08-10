
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

export const sendGuess = guess => {
	return (dispatch, getState) => {
		dispatch(guessInProgress());
		return new Promise((resolve, reject) => {
			dispatch(updateGuesses([{ id: 'au', text: 'Australia', player: 'a234cb' }]));
		});
	}
};

export const sendGiveUp = () => {
	return (dispatch, getState) => {
		dispatch(giveUpInProgress());
		return new Promise((resolve, reject) => {
			dispatch(giveUpConfirmation())
		})
	}
}
