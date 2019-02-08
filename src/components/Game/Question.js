import React from 'react';
import Card from './Card';
import Answer from './Answer';

class Question extends React.Component {

    createAnswers = (answers) => {
        let index = 1;

        return answers.map(answer =>
            <Answer onRadioChange={this.onAnswerSelected} id={this.props.question.id + '-' + index} name={this.props.question.id} key={index++} answer={answer} />
        );
    }

    onAnswerSelected = (event) => {
        const correctAnswer = this.props.question.correctAnswer;
        const selectedAnswer = event.target.nextSibling.innerText;
        const isCorrect = correctAnswer === selectedAnswer;

        this.props.radioChange(this.props.question.id-1, isCorrect);
    }
    
    render() {
        return (
            <Card key={this.props.question.id} title={'Question #' + this.props.question.id}>
                <div className="question">
                    {this.props.question.question}
                </div>
                <div className="grouped fields answers">
                    {this.createAnswers(this.props.question.answers)}
                </div>
            </Card>
        );
    }
}

export default Question;