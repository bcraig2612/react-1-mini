import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      friends: [],
      picture: '',
      name: ''
    };
  }

      updatePicture( value ) {
        this.setState({
          picture: value
        });
  }

      updateName( value ) {
        this.setState({
          name: value
        });
  }

      addFriend = () => {
        const myFriends = [ ...this.state.friends, { picture: this.state.picture, name: this.state.name } ];
        this.setState({
          friends: myFriends, 
          picture: '',
          name: ''
        });
      };

  render() {
    const myMappedFriends = this.state.friends.map(element => {
      return <div key= { element.picture }>
        <img width='100px' src={ element.picture } />
        <span> { element.name } </span>
      </div>
    })
    return (
      <div>
        <label htmlFor='picture'> Picture </label>
        <input onChange={ ( event ) => this.updatePicture( event.target.value ) }  id='picture' value= { this.state.picture } />

        <label htmlFor='name'> Name </label>
        <input onChange={ ( event ) => this.updateName( event.target.value ) } id='name' value= { this.state.name } />
        <button onClick={ this.addFriend }> Add Friend </button>
        { myMappedFriends }
      </div>
    );
  }
}

export default App;