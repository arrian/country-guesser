import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { sendGuess, sendGuessPartial } from '../actions'
import { Input, Grid, Button, Dropdown } from 'semantic-ui-react'

const Search = ({ query, onSendGuess, onSendGuessPartial, loading }) => (
	<div style={{ width: '100%', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
		<Input loading={loading} placeholder='Enter country...' action='Guess' style={{ marginBottom: 20, width: '100%' }} size='big' value={query} onChange={onSendGuessPartial} onKeyDown={event => event.key === 'Enter' ? onSendGuess(event) : null } />
	</div>
)

Search.propTypes = {
	query: PropTypes.string.isRequired,
	loading: PropTypes.bool
}

const mapStateToProps = (state) => ({
	query: state.game.guessText,
	loading: state.game.sendingGuess
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
