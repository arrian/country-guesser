import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Input, Grid, Button, Dropdown, Image, Label } from 'semantic-ui-react'

const Player = ({ player, guesses }) => (
	<div style={{ display: 'inline-block' }}>
		{player.name}
		<Label size='huge' circular color={player.colour}>{guesses.filter(guess => guess.player === player.id).length}</Label>
	</div>
)
// <Image src='/images/empty.gif' size='tiny' shape='circular' />
// {guesses.map(guess => <Label key={guess.code} size='tiny'>{guess.text}</Label>)}

export default Player
