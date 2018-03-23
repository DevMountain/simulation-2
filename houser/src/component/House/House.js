import React, {Component} from 'react';

export default function House (props){
    
    const {house} = props;
    return (
        <div>
            <p>{house.name}</p>
            <p>{house.address}</p>
            <p>{house.city}</p>
            <p>{house.state}</p>
            <p>{house.zip}</p>
            <button alt= 'Delete'></button>
        </div>
    )
}