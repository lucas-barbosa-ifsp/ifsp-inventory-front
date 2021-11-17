import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from "react";


export default class App extends React.Component{
  state = {
    patrimonies: ['1']
  }

  componentDidMount() {

    axios.get(`http://localhost:8080/patrimonies/1`, {
        method: 'GET'
    })
        .then(res => {
          const patrimonies = res.data;

          this.setState({patrimonies})
            console.log(this.state)
        })

  }

  render(){
    return(
        <div>
            <h1>oi</h1>
            <ul>
                {console.log(this.state)}
              {this.state.patrimonies.content.map(person => <li> {person.descricao}</li>)}
            </ul>
        </div>
    )
  }

}


