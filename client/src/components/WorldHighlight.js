import React, { PropTypes } from 'react'
import World from './World'
import { connect } from 'react-redux'

const mapStateToProps = state => {

	let playerMap = {};
	state.game.players.forEach(player => playerMap[player.id] = player);

	let highlightMap = {};
	state.game.guesses.forEach(guess => highlightMap[guess.code] = playerMap[guess.player].colour);

	return {
		codes: highlightMap,
		loading: state.game.sendingGuess
	}
}

const mapDispatchToProps = ({
})

const WorldHighlight = connect(
	mapStateToProps,
	mapDispatchToProps
)(World)

export default WorldHighlight
