import React from 'react';
import './App.css';
import Aux from './hoc/auxilary';
import SearchBar from './components/searchBar/searchBar';
import Header from './components/header/header';

function App() {
  return (
    <Aux className="App">

      <Header/>
      <SearchBar/>

    </Aux>
  );
}

export default App;
