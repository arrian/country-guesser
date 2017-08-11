import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Input, Grid, Button, Dropdown, Image, Label } from 'semantic-ui-react'

const Player = ({ player, guesses }) => (
	<div>
		<Image src='/images/empty.gif' size='tiny' shape='circular' />
		{player.name}
		<Label circular color='red'>{guesses.length}</Label>
		{guesses.map(guess => <Label key={guess.code} size='tiny'>{guess.text}</Label>)}
	</div>
)

export default Player
