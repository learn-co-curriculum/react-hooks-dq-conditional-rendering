import React, { useEffect, useState } from "react";
import { Card, Button, Image, Loader } from "semantic-ui-react";

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const pokeId = Math.round(Math.random() * 802);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((res) => res.json())
      .then((pokemon) => setPokemon(pokemon));
  }, []);

  return (
    <Card fluid>
      <Card.Content textAlign="center">
        {pokemon ? (
          <div>
            <h3>{this.state.pokemon.name}</h3>
            <Image src={this.state.pokemon.sprites.front_default} />
            <br />
            <Button onClick={this.getRandomPokemon}>Get New Pokemon</Button>
          </div>
        ) : (
          <div style={{ height: 300 }}>
            <Loader active size="large">
              Loading
            </Loader>
          </div>
        )}
      </Card.Content>
    </Card>
  );
}

export default Pokemon;
