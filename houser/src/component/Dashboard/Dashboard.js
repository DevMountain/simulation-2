import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            houses:[
                {
                    id:'0',
                    name: 'a house',
                    address:'an address',
                    city:"Salem",
                    state:"OR",
                    zip:97306
                }
            ],
        }
    this.deleteHouse = this.deleteHouse.bind(this);
    }
    
    componentDidMount (){
        this.getHouse();
    }
    getHouse(){
        axios.get(`http://localhost:4000/api/houses`).then( (response) =>{
            console.log(response.data);
            this.setState({ houses: response.data });
            }
        )
    }
    deleteHouse(hid){
        const id = hid;
        console.log(id)
        axios.delete(`http://localhost:4000/api/deletehouse/${id}`)
        .then( (res) =>
            {console.log(res);
                this.getHouse()}
         )
    }

    render (){
        const {houses} = this.state;
        console.log(houses);
        const houseList = houses.map( ( house, i ) => {
            console.log(house);
            return( <House 
                key = {i} 
                house = {house}
                deleteHouseFn = {this.deleteHouse}/>)
        })
        console.log(houses);
        return (
            <div>Dashboard
                {houseList}
               <Link to= '/wizard'> <button> Add New Property </button></Link>
            </div>
        )
    }
}