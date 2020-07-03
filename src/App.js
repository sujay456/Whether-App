import React from 'react';
import './App.css';
import Aux from './hoc/auxilary';
import SearchBar from './components/searchBar/searchBar';
import Header from './components/header/header';
import axios from 'axios';
import Data from './components/Data/data';

class App extends React.Component {
  
 state={
   cityName:'',
   data:{},
   status:''
 }


 valueChange=(event)=>{
    
    this.setState({ cityName:event.target.value });
    

 }

 apiCall=(event)=>{
  event.preventDefault();
  axios.get('https://api.openweathermap.org/data/2.5/weather?q='+this.state.cityName+'&appid=044b158b036a0934d661b80d7e76ad73&units=metric')
    .then( response =>{
      console.log(response);
      this.setState( {data:response.data,status:response.status } );
      
    }).catch( err=>{
      console.log(err);
    } )
    

 }
  render()
  {
    return (
      <Aux className="App">
  
        <Header status={this.state.status} />
        <SearchBar city={this.state.cityName} valueChange={this.valueChange} apiCall={this.apiCall} />
        {
          this.state.status?<Data data={this.state.data} />:null
        }        
      </Aux>
    );
  }
}

// https://samples.openweathermap.org/data/2.5/weather

export default App;
