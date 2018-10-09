import React, { Component } from 'react';
import Header from './Header';
import Player from './Player'
import AddPlayerForm from './AddPlayerForm'  


class App extends Component {
  state = {
    players: [
      {
        name: "Player 1",
        id: 1,
        score: 0
      },
      {
        name: "Player 2",
        score: 0,
        id: 2
      },
      {
        name: "Player 3",
        score: 0,
        id: 3
      },
      {
        name: "Player 4",
        score: 0,
        id: 4
      }
    ]
  };
  // player id 
  prevPLayerId = 4;

  changeScore = (index, delta) =>{
    this.setState((prevState)=>{
      return {score: prevState.players[index].score += delta}
    });
  }

  handleAddPlayer = (name)=>{
    this.setState(prevState =>{
      return {
      players: [
        ...prevState.players,
        {
          name: name ,
          score:0,
          id: this.prevPLayerId += 1,
        }
      ]
    }
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
        
        <AddPlayerForm addPlayer={ this.handleAddPlayer } />
        
      </div>
    );
  }
}

export default App;
