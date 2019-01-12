import React from 'react';
import './Home.css';

class Home extends React.Component {

    state = {
        name: ''
    }
    
    onPartyClick = (event) => {
        event.preventDefault();
    };

    onNameChange = (event) => {
        const name = event.target.value;
        this.setState({name});
    }

    render() {
        return(
            <div className="home">
                <div className="ui basic segment">
                    Hi :) <br/>
                    I hope you are feeling well, if you are interested I can test your knowledge,
                    but first what is your name?
                </div>
                <div className="ui input">
                    <input type="text" placeholder="Your name" onChange={this.onNameChange} />
                </div> 
                <div className="ui basic segment">
                    When you are ready, press button
                </div>
                <button className="ui primary button" onClick={this.onPartyClick}>PARTYYYYY</button>
            </div>
        );
    }
}

export default Home;