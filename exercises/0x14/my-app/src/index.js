import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
// ========================================
ReactDOM.render(<Game />, document.getElementById("rootGame"));
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
/**
 * Hello, World!
 */
// Componente de clase
class WelcomeClass extends React.Component {
  render() {
    return <div>Hello, {this.props.firstName}</div>;
  }
}
// Componente de función
function WelcomeFunct(props) {
  return <div>Hello, {props.firstName}</div>;
}
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  // montaje
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  // desmontaje
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}
function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleLoginClick = this.handleLoginClick.bind(this);
    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        {" "}
        <Greeting isLoggedIn={isLoggedIn} /> {button}{" "}
      </div>
    );
  }
}
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2> You have {unreadMessages.length} unread messages. </h2>
      )}{" "}
    </div>
  );
}
class Hello extends React.Component {
  render() {
    function getGreeting(argv) {
      if (argv) {
        return <div>Hello, {formatName(user)}!</div>;
      }
      return <div>Hello, Stranger.</div>;
    }
    function formatName(argv) {
      return user.firstName + " " + user.lastName;
    }
    const user = {
      firstName: "Javier",
      lastName: "Patarroyo",
    };
    const messages = ["React", "Re: React", "Re:Re: React"];
    //const name = 'Javi';
    //const element = <div>Hello, {formatName(user)}!</div>;
    //return <>{getGreeting(user)}</>;
    //return WelcomeFunct(user);
    //return <WelcomeClass firstName={'Javier'} />;
    //return( <Clock date={new Date()} /> );
    //return <Clock />;
    //return ( <div> <Clock /> <Clock /> <Clock /> </div> );
    //return (<Greeting isLoggedIn={false} />);
    //return (<Greeting isLoggedIn={true} />);
    //return (<LoginControl />);
    return <Mailbox unreadMessages={messages} />;
  }
}
// ========================================
ReactDOM.render(<Hello />, document.getElementById("rootHello"));
