import React from 'react';
import './App.scss';

export const AdvanceStatictic = (props) => {
  return (
    <div className={props.class} id={props.ids} >
        <div className='roundImg'>
            <img src={props.img} alt='brand'/>
        </div>       
        <h3>{props.title}</h3>
        <p>{props.paragraph}</p>
    </div>
  )
}
