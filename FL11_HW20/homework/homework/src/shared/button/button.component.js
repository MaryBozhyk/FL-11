import React from 'react';
import PropTypes from 'prop-types';
import classes from './button.module.scss';
import { Input } from '@material-ui/core';

export function Button(props) {
    return (
        <button className={classes.addButton} onClick={props.onClick} type={props.type} disabled={props.disabled}>Get ({props.price}$)</button>
    )

}

Input.defaultProps = {
    type: 'button',
    disabled: 'false',
}

Input.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    price: PropTypes.number,
} 