import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../../shared/button';
import { Basket } from '../../basket'
import classes from './emoji-preview.module.scss'

export class EmojiPreview extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isButtonDisabled: false,
            emojies: [],
            sum: 0,
        }

        this.number = props.stars
    }

    clickEvent = (props) => {
        this.setState({ isButtonDisabled: true })
        this.setState(state => {
            const emojies = [...state.emojies, props];
            const sum = state.sum + props.price;
            return {
                emojies,
                sum,
            }
        });
        return (
            <Basket
                emojies={this.state.emojies}
                sum={this.state.sum}
                remove={this.removeItem}
                purchase={this.purchase}
            />
        )
    }

    removeItem = () => {
        this.setState(state => {
            const emojies = state.emojies.filter(x => x.id !== x);
            const sum = emojies.reduce((x, y) => x + y.price, 0);
            return {
                emojies,
                sum,
            }
        });
    };

    purchase = () => alert ('Thanks for purchase')


    starsCounter(number) {
        this.starsCount = number;
        this.starSym = '\u2B50';
        this.starStr = '';
        for (let i = 0; i < this.starsCount; i++) {
            this.starStr += this.starSym;
        }
        return this.starStr;
    };

    render() {
        return (
            <div className={classes.groupItems}>
                <div className={classes.bigEmoji}>{this.props.emoji}</div>
                <div className={classes.mediumEmoji}>{this.props.emojiMedium}</div>
                <div className={classes.smallEmoji}>{this.props.emojiSmall}</div>
                <div className={classes.emojiTitle}>{this.props.title}</div>
                <div className={classes.stars}>{this.starsCounter(this.number)}</div>
                <Button
                    price={this.props.price}
                    disabled={this.state.isButtonDisabled}
                    onClick={() => this.clickEvent(this.props)}
                />
            </div>
        )
    }
}

EmojiPreview.propTypes = {
    emoji: PropTypes.string.isRequired,
    emojiMedium: PropTypes.string.isRequired,
    emojiSmall: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}