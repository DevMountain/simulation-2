import React, {Component} from 'react';

export default function House (props){
    
    const {house} = props;
    console.log(house.id)
    return (
        <div>
            <p>{house.name}</p>
            <p>{house.address}</p>
            <p>{house.city}</p>
            <p>{house.state}</p>
            <p>{house.zip}</p>
            <button alt= 'Delete' 
            onClick = { () => props.deleteHouseFn(house.id)}
            >Delete House</button>
        </div>
    )
}