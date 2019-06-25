import React from 'react';
import Card from './Card';

class CardHolder extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return this.props.profiles.map(profile => <Card name={profile.username} org={profile.org} url={profile.url}/>);
    }
}

export default CardHolder; 