import React, { Component } from 'react';
import Header from './Header';
import Player from './Player'
  


class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 0
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  changeScore = (index, delta) =>{
    this.setState((prevState)=>{
      return {score: prevState.players[index].score += delta}
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
          
          
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) => 
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}
            score= { player.score }
            index={ index }
            changeScore= { this.changeScore }         
          />
        )}
      </div>
    );
  }
}

export default App;
