import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  //create constructore funstion
  constructor(props) {
    super(props);
    this.state = {
         items: [],
         isLoaded: false,
    }
  }
  comppnentdidMount() { // this mehtd uns for render and render function gives output for this
    //actual api
    fetch('http://samradarakshan-eval-test.apigee.net/openapirest/emp')
     .then(res => res.json())
     .then(json => {
         this.setState({
            isLoaded: true,
             items: json, // now we are savng our data here
         })

     });
  }
  render() {
    var {isLoaded,items} = this.state;

     if (!isLoaded) {
       return <div> Loading..</div>
     }
     else {
    return (
      <div className="App">

        
      // Data has been loaded

      <ul> //unorder list
       {
         items.map(item =>  ( // crreates new array loops each object in apigee
             <li key = {item.id}>
                Name:  {item.name} | City: {item.city}

             </li>

         ))};
      </ul>

      </div>
    );
  }
}
}

export default App;
