import React from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';

class Home extends React.Component {

    state = {
        name: '',
        buttonCLicked: false
    }
    
    onPartyClick = (event) => {
        event.preventDefault();
        this.setState({buttonCLicked: true});
        this.props.changeName(this.state.name);
    };

    onNameChange = (event) => {
        const name = event.target.value;
        this.setState({name});
    }

    render() {
        if (this.state.buttonCLicked) {
            return <Redirect to="/game/overview" />
        }

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