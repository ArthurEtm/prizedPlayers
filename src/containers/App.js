import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestPlayers } from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';


const mapStateToProps = (state) => {
  return {
    searchField: state.searchPlayers.searchField,
    players: state.requestPlayers.players,
    isPending: state.requestPlayers.isPending
  }
}

/////
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value.split(" ").join("_"))), /////////
    onRequestPlayers: () => dispatch(requestPlayers())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestPlayers();
  }

  render() {
    const { players, searchField, onSearchChange, isPending } = this.props;
    const filteredPlayers = players.filter(player => {
      return player.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='f1'>Prized Players</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList players={filteredPlayers} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)
