import React from 'react';
import * as axios from 'axios';
import _ from 'lodash';
import Question from './Question';
import './QuestionList.css';
import {Redirect} from 'react-router-dom';
import he from 'he';

class QuestionList extends React.Component {
    url = 'https://opentdb.com/api.php';
    questionAmount = 10;
    
    state = {
        questions: [],
        isFinished: false
    }
    
    async componentDidMount() {
        const qid = this.props.match.params.qid

        const response = await axios.get(this.url, {
            params: {
                amount: this.questionAmount,
                category: qid,
                type: 'multiple'
            }
        });

        let index = 1;
        const questions = response.data.results.map(question => {
            let answers = question.incorrect_answers.concat(question.correct_answer);
            
            answers = answers.map(element => he.decode(element));

            return {
                question: he.decode(question.question),
                correctAnswer: he.decode(question.correct_answer),
                answers: _.shuffle(answers),
                id: index++,
                correct: false
            }
        });

        this.setState({questions});
    }

    setCorrectPropertyOfQuestion = (index, isCorrect) => {
        const newQuestions = this.state.questions.slice(0);
        newQuestions[index].correct = isCorrect;

        this.setState({questions: newQuestions});
    }

    onFinishClicked = (event) => {
        let correctAnswerCounter = 0;

        for(let index in this.state.questions) {
            const question = this.state.questions[index];
            correctAnswerCounter += question.correct ? 1 : 0;
        }

        this.props.categoryFinished(parseInt(this.props.match.params.qid), correctAnswerCounter);

        this.setState({isFinished: true});
    }
    

    render() {
        if (this.state.isFinished) {
            return <Redirect to="/game/overview" />
        }

        const questions = this.state.questions.map(question =>
                <Question key={question.id} radioChange={this.setCorrectPropertyOfQuestion} question={question} />
        );

        return(
            <div className="question-list">
                <div className="ui cards">
                    {questions}
                </div>
                <button onClick={this.onFinishClicked} className="ui button green">FINISH</button>
            </div>
        );
    }
}

export default QuestionList;