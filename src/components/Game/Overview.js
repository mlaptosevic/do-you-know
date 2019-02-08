import React from 'react';
import Card from './Card';
import {Redirect} from 'react-router-dom';

class Overview extends React.Component {
    state = {
        selectedId: 0
    }

    

    onCategoryClick = (id) => {
        this.setState({
            selectedId: id
        });
    }

    render() {
        if(this.state.selectedId !== 0) {
            const path = '/game/questions/' + this.state.selectedId;
            return <Redirect to={path} />;
        }

        const questionsOverview = this.props.categories.map(category => {
            let cardBody = <button className="ui button green" onClick={() => this.onCategoryClick(category.id)}>Start</button>;

            if(category.done) {
                cardBody = <div className="">FINISHED <br/> Scrore: {category.correctAnswers}/10</div>;
            }

            return (
                <Card key={category.id} title={category.name}>
                    {cardBody}
                </Card>
            );
            
        });

        return (
            <div className="ui cards">
                {questionsOverview}
            </div>
        );
    }
}

export default Overview;