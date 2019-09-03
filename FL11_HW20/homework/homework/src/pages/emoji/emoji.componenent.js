import React from 'react';

import { EmojiPreview } from './emoji-preview';
import { EmojiChoosed } from './emoji-choosed';
import { Basket } from '../basket';
import classes from './emoji.module.scss';
import { API } from '../../constants/api.constants';

export class Emoji extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            emoji: [],
            emojies: [],
        }
    }

    componentDidMount() {
        fetch(`${API}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ emoji: data.emoji })
            })
    }

    renderEmojiPreview(emoji) {
        return (
            <EmojiPreview
                key={emoji.id}
                emoji={emoji.emoji[0].char}
                emojiMedium={emoji.emoji[1].char}
                emojiSmall={emoji.emoji[2].char}
                title={emoji.title}
                stars={emoji.stars}
                price={emoji.price}
            />
        )
    }


    render() {

        if (this.state.emoji.length === 0) {
            return <p>Loading...</p>
        }

        return (
            <div className={classes.cover}>
                <div className={classes.mainSection}>
                    <div className={classes.preview}>
                        <EmojiChoosed
                            key={this.state.emoji[1].id}
                            emoji={this.state.emoji[1].emoji[0].char}
                            emojiSecond={this.state.emoji[1].emoji[1].char}
                            emojiThird={this.state.emoji[1].emoji[2].char}
                            title={this.state.emoji[1].title}
                            price={this.state.emoji[1].price}
                        />
                    </div>
                    <div className={classes.itemsContainer}>{this.state.emoji.map(this.renderEmojiPreview)}</div>
                </div>
                <div className={classes.basket}>
                    <Basket 
                    emojies = {this.state.emojies}
                    />
                </div>
            </div>
        )
    }
}