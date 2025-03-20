import React from 'react';
import './Card.css';
import loc from '../Pages/location.png'
const Card = (props) => {
  return (
    <div className='card' style={{backgroundImage:`url(${props.image})`,backdropFilter: "blur(5px)",}}>
        <p className='c-main' >{props.name}</p><hr className='ju'/>
        <div style={{display:"flex",gap:"10px"}}>
          <p style={{fontSize:"18px"}}>{props.location}</p>
        </div>
        <p className='progress'style={{backgroundColor:props.color}}>{props.status}</p>
    </div>
  )
}

export default Card