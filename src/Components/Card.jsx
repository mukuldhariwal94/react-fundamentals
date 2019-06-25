import React from 'react';
import './Card.css';
class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const profile = this.props;
        return (
            <div className="github-profile" style={
                {
                    margin: '1rem'
                }
            }> 
                <img src={this.props.url} />
                <div className="info" style={{ display: 'inline-block', marginLeft: 10 }}>
                    <div className="username" style={{ display: '125%' }}> {profile.name} </div>
                    <div className="companyName" > {this.props.org} </div>
                </div>
            </div>
        );
    }
}

export default Card; 