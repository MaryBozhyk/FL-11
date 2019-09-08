import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../../shared/button';
import classes from './emoji-choosed.module.scss';

export class EmojiChoosed extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isButtonDisabled: false,
        }
    }

    clickEvent = () =>{
        this.setState({ isButtonDisabled: true })
    }

    render() {
        return (
            <>
                <h1 className={classes.title}>New! {this.props.title}</h1>
                <p className={classes.text}>Includes</p>
                <span className={classes.emojiIcons}> {this.props.emoji}</span>
                <span className={classes.emojiIcons}>{this.props.emojiSecond}</span>
                <span className={classes.emojiIcons}>{this.props.emojiThird}</span>
                <div className={classes.buttonContainer}> 
                <Button 
                price={this.props.price} 
                onClick={() =>this.clickEvent(this.props)} 
                />
                </div>
            </>
        )
    }
}

EmojiChoosed.propTypes = {
    emoji: PropTypes.string.isRequired,
    emojiSecond: PropTypes.string.isRequired,
    emojiThird: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}