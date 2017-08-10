import React, { PropTypes } from 'react'
import World from './World'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
	codes: state.game.guesses.map(guess => guess.code),
	loading: state.game.sendingGuess
})

const mapDispatchToProps = ({
})

const WorldHighlight = connect(
	mapStateToProps,
	mapDispatchToProps
)(World)

export default WorldHighlight
