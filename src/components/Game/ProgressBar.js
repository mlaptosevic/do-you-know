import React from 'react';
import './ProgressBar.css';

class ProgressBar extends React.Component {


    render() {
        return (
            <div className="meter">
                <span style={{width: this.props.perc*100 + '%'}}></span>
            </div>
        );
    }
}

export default ProgressBar;