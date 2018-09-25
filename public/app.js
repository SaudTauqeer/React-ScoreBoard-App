const Header = (props) =>  {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats"> { props.totalPlayers } </span>
    </header>
  );
}
const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement">-</button>
      <span className="counter-score"> {props.score} </span>
      <button className="counter-action increment">+</button>
    </div>
  );
}


const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
      { props.name }
      </span>

      <Counter score = {props.score} />
    </div>
  );
}

const App = () =>{
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={4} />


      { /* Players list */ }
      <Player name="Saud" score={ 100 } />
      <Player name="kizuna" score={ 50 } />
      <Player name="kirito" score={ 52 } />
      <Player name="rem" score={ 504 } />
    </div>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
