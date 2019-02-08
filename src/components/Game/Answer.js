import React from 'react';

class Answer extends React.Component {
    render() {
        return(
            <div className="field">
                <div className="ui radio checkbox">
                    <input id={'checkbox-' + this.props.id} onClick={this.props.onRadioChange} type="radio" name={this.props.name} tabIndex="0" className="hidden" />
                    <label htmlFor={'checkbox-' + this.props.id}>{this.props.answer}</label>
                </div>
            </div>
        );
    }
}

export default Answer;