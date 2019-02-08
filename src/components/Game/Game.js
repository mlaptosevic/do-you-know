import React from 'react';
import {Switch, Route} from 'react-router-dom';
import QuestionList from './QuestionList';
import Overview from './Overview';
import Header from './Header';
import './Game.css';

class Game extends React.Component {
    state = {
        categories: [
            {id:10, name:'Books', done: false, correctAnswers: 0},
            {id:11, name:'Films', done: false, correctAnswers: 0},
            {id:12, name:'Music', done: false, correctAnswers: 0},
            {id:21, name:'Sports', done: false, correctAnswers: 0},
            {id:14, name:'Television', done: false, correctAnswers: 0},
            {id:9, name:'General Knowledge', done: false, correctAnswers: 0},
            {id:17, name:'Science & Nature', done: false, correctAnswers: 0},
            {id:19, name:'Math', done: false, correctAnswers: 0},
            {id:22, name:'Geography', done: false, correctAnswers: 0},
            {id:23, name:'History', done: false, correctAnswers: 0},
            {id:25, name:'Art', done: false, correctAnswers: 0},
            {id:26, name:'Celebrities', done: false, correctAnswers: 0},
        ]
    };

    categoryFinished = (categoryId, correctAnswers) => {
        const newCategories = this.state.categories.slice(0);
        let index = -1;

        for (let loopIndex in newCategories) {
            if (newCategories[loopIndex].id === categoryId) {
                index = loopIndex;
                break;
            }
        }

        newCategories[index].correctAnswers = correctAnswers;
        newCategories[index].done = true;

        this.setState({categories: newCategories});
    }

    render(){
        return(
            <div className="overview">
                <Header name={this.props.name} categories={this.state.categories} />
                <div className="page-body">
                    <Switch>
                        <Route exact path="/game/overview" render={(props) => <Overview {...props} categories={this.state.categories}/>} />
                        <Route exact path="/game/questions/:qid" render={(props) => <QuestionList {...props} categoryFinished={this.categoryFinished}/>} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Game;