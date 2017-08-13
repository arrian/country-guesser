import React, { PropTypes } from 'react'
import Search from './Search'
import Player from './Player'
import { connect } from 'react-redux'

const Header = ({players, guesses}) => (
	<div>
		<Search />
		{players.map(player => <Player player={player} guesses={guesses} />)}
	</div>
);

const mapStateToProps = state => ({
	players: state.game.players,
	guesses: state.game.guesses
})

const mapDispatchToProps = ({
})

const HeaderConnected = connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)

export default HeaderConnected
