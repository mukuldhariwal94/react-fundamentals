import React from 'react'; 

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.clear = this.clear.bind(this);
        this.setState({username : ''});
    }

    handleClick = (username) => {
        this.props.handleClick(this.state.username); 
    }

    clear = () => {
        this.props.clear();
    }

    updateInput = (event) => {
        this.setState({username : event.target.value}); 
    }

    render() {
        const inputBox = (<input onChange={this.updateInput} ></input>);
        const addButton = (<button onClick={this.handleClick}>Add Card</button>);
        const clearButton =(<button onClick={this.clear}> Clear </button>)
        const component = (<div>{inputBox}{addButton}{clearButton}</div>);

        return component;
    }
}

export default Form;