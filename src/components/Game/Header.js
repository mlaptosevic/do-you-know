import React from 'react';
import './Header.css';
import ProgressBar from './ProgressBar';

class Header extends React.Component {
    state = {
        points: 0,
        percentageCompleted: 0
    }

    calculatePercentage = () => {
        const categoriesNumber = this.props.categories.length;
        const numberOfFinishedCategories = this.props.categories.reduce(
            (acc, element) => { 
                return element.done?acc+1:acc;
            }, 0
        );

        return numberOfFinishedCategories / categoriesNumber;
    }

    calculatePoints = () => {
        const points = this.props.categories.reduce(
            (acc, element) => { 
                return acc+element.correctAnswers;
            }, 0
        );

        return points;
    }

    render() {
        const perc = this.calculatePercentage();
        const points = this.calculatePoints();

        return (
            <div className="header-container">
                <div className="player-info header-item"> 
                    <span className="player-name">
                        {this.props.name}
                    </span>
                    <div className="ui blue label">
                        Points: {points}
                    </div>
                </div>
                <div className="header-item loader">
                    <ProgressBar perc={perc} />
                </div>
            </div>
        );
    }
}

export default Header;