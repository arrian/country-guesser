import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { sendGuess, sendGuessPartial } from '../actions'
import Player from './Player'
import { Input, Grid, Button, Dropdown, Label } from 'semantic-ui-react'

const Search = ({ query, onSendGuess, onSendGuessPartial, loading, name, guesses }) => (
	<div style={{ width: '100%', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
		<Input loading={loading} placeholder='Guess a country...' action='Guess' style={{ marginBottom: 20, width: '100%' }} size='big' value={query} onChange={onSendGuessPartial} onKeyDown={event => event.key === 'Enter' ? onSendGuess(event) : null } />
		<Label size='mini'>{name}</Label>
	</div>
)

Search.propTypes = {
	query: PropTypes.string.isRequired,
	loading: PropTypes.bool,
	name: PropTypes.string
}

const mapStateToProps = (state) => ({
	query: state.game.guessText,
	loading: state.game.sendingGuess,
	name: state.game.name,

})

const mapDispatchToProps = ({
	onSendGuess: (event) => sendGuess(event.target.value),
	onSendGuessPartial: (event) => sendGuessPartial(event.target.value)
})

const ConnectedSearch = connect(
	mapStateToProps,
	mapDispatchToProps
)(Search)

export default ConnectedSearch
