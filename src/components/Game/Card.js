import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        return(
            <div className="card">
                <div className="content">
                    <div className="header">
                        {this.props.title}
                    </div>
                    <div className="description">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;