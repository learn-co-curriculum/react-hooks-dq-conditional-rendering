import React from 'react'
import {userData, photo, cocktails} from '../data.js'
import {Card, Button, Image, Loader} from 'semantic-ui-react'

/*No need to code in here! These are merely presentational components.*/

export const Profile = () => {

	return (
		<Card fluid>
			<Card.Content textAlign="center">
				<h3>Hi, my name is {userData.name}</h3>
				<h5>A little about me: </h5>
				<p>{userData.description}</p>
				<p>Favorite phrase: {userData.catchphrase}</p>
				<p>Age: {userData.age}</p>
			</Card.Content>
		</Card>
	)
}



export const Photos = () => {

	return (
		<Card fluid>
			<Card.Content textAlign="center">
				<h2>{photo.title}</h2>
				<Image src={photo.url}/>
			</Card.Content>
		</Card>
	)

}



export const Cocktails = () => {

	const cocktailsElements = 
		cocktails.drinks.map((drink,index) => {
				return(
					<li key={index}>
						<h5>Name: {drink.name}</h5>
						<p>Description: {drink.description}</p>
						<br/>
					</li>
				)
			})


		return (
			<Card fluid>
				<Card.Content textAlign="center">
					<ul>
						{cocktailsElements}
					</ul>
				</Card.Content>
			</Card>
		)

}

export class Pokemon extends React.Component {

	state = {
		pokemon: null
	}

	getRandomPokemon = () => {

		let pokeId = Math.round(Math.random()*802)

		fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
		.then(res => res.json())
		.then(pokemon => this.setState({pokemon: pokemon}))
	}

	componentDidMount() {
		this.getRandomPokemon()
	}


	render(){


		let content;

		if (this.state.pokemon) {
			content = 
			<div>
				<h3>{this.state.pokemon.name}</h3>
				<Image src={this.state.pokemon.sprites.front_default}/>
				<br/>
				<Button onClick={this.getRandomPokemon}>Get New Pokemon</Button>
			</div>
		} else {
			content = <div style={{height: 300}}><Loader active size='large'>Loading</Loader></div>
		}

		return (
			<Card fluid>
				<Card.Content textAlign="center">
					{content}
				</Card.Content>
			</Card>
		)
	}

}