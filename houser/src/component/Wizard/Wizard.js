import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component {
    constructor(){
        super();
        this.state = {
            name:"",
            address:"",
            city:"",
            state:"",
            zip:0
        }

    }
    addHouse(){
        console.log(this.state);
        const {name, address, city, state, zip} = this.state;
        axios.post(`http://localhost:4000/api/houses`, {name, address, city, state, zip})
        .then(() => {<Link to='/'/>})
    }
    handleName(name){
        this.setState({name})
    }
    handleAddress(address){
        this.setState({address})
    }
    handleCity(city){
        this.setState({city})
    }
    handleZip(zip){
        this.setState({zip})
    }
    handleState(state){
        this.setState({state})
    }
    render(){
        return (
            <div>Wizard
            <Link to= '/' ><button> Cancel </button></Link>
            <input type = 'text' placeholder='name' onChange = { e =>  this.handleName ( e.target.value ) } value = { this.state.name }></input>
            <input type = 'text' placeholder='address' onChange = { e =>  this.handleAddress ( e.target.value ) } value = { this.state.address }></input>
            <input type = 'text' placeholder='city' onChange = { e => this.handleCity ( e.target.value ) } value = { this.state.city }></input>
            <input type = 'text' placeholder='state' maxLength = "2" onChange = { e => this.handleState ( e.target.value ) } value = { this.state.state }></input>
            <input type = 'text' placeholder='zip' onChange = { e => this.handleZip ( e.target.value ) } value = { this.state.zip }></input>
            <button onClick = {() => this.addHouse()}>Complete</button>
            </div>
        )
    }
}