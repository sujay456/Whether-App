import React from 'react';
import './App.css';
import Aux from './hoc/auxilary';
import SearchBar from './components/searchBar/searchBar';
import Header from './components/header/header';
import axios from 'axios';

class App extends React.Component {
  
 state={
   cityName:''
 }


 valueChange=(event)=>{
    
    this.setState({ cityName:event.target.value });
    

 }

 apiCall=(event)=>{
  event.preventDefault();
  axios.get('https://openweathermap.org/data/2.5/weather?q='+this.state.cityName+'&appid=044b158b036a0934d661b80d7e76ad73')
    .then( response =>{
      console.log(response);
    } );

 }
  render()
  {
    return (
      <Aux className="App">
  
        <Header/>
        <SearchBar city={this.state.cityName} valueChange={this.valueChange} apiCall={this.apiCall} />
  
      </Aux>
    );
  }
}

// https://samples.openweathermap.org/data/2.5/weather

export default App;
