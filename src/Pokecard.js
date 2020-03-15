import React, { Component } from 'react';
import './Pokecard.css';

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

//adds two zeros to a number if it is less than three digits to allow us to access the new Pokemon database. 
//if a number is less than 1000, add two 00s to the number and slice the last three digits, returning 3 digits that are necessary for the API. Otherwise, if it is already 3 digits, return the number. 
let padToThree = (number) => (number <=999 ? `00${number}`.slice(-3): number);

class Pokecard extends Component {
    render(){
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return(
        <div className="Pokecard">
            <h1 className="Pokecard-title">{this.props.name}</h1>
            <div className="Pokecard-image"> 
                <img src={imgSrc} alt={this.props.name}/>
            </div>
            <div className="Pokecard-data">Type: {this.props.type}</div>
            <div className="Pokecard-data">EXP: {this.props.exp}</div>
        </div>
        )
    }
}

export default Pokecard;