import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardHolder from './Components/CardHolder';
import Form from './Components/Form';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { cards: [] };
  }

  handleClick = async (username) => {
    let resp = await axios.get(`https://api.github.com/users/${username}`);
    let status = await resp.status;
    if(status != 200)
    {
      alert('data not found or some error has occured');
      return;
    }
    const copiedCards = this.state.cards;
    
    copiedCards.push({ 'username' : username, 'url' : resp.data.avatar_url, 'org' : resp.data.company} );
    this.setState({cards : copiedCards});
  }

  clear = () => {
    this.setState({ cards: [] });
  }

  render() {
    return (
      <div className="App" >
        <div className="header">{this.props.title}</div>
        <Form handleClick={this.handleClick} clear={this.clear} />
        <CardHolder profiles={this.state.cards} />
      </div>
    );
  }
}

export default App;
