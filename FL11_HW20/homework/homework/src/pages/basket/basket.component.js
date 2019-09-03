import React from 'react';
import PropTypes from 'prop-types';

import classes from './basket.module.scss'

export function Basket(props){

    let basketCreation = () => {
      let emojies;

        if ( props.emojies.length === 0){
            return(    
            <div>
                <h2>Basket</h2>
                <p>No items to purchase!</p>
            </div>
            )
        } else {
            return(
            <div className={classes.basketCreation}>
                <h2>Basket</h2>
                <ul className={classes.List}>
            {emojies = props.emojies.map((item, index) => {
              return (
                <li key={index}>
                  <p>{item.title}-{item.price}$</p>
                  <button onClick={() => props.remove(item.id)}>x</button>
                </li>
              )
            })}
          </ul>
          <button onClick={props.purchase}>Purchase ( { props.sum } $) </button>
            </div>
        )  
        }
    }

    return basketCreation()
}

Basket.propTypes = {
    emojies: PropTypes.array,
    sum: PropTypes.number,
    remove: PropTypes.func,
    purchase: PropTypes.func,
}