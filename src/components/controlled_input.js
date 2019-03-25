import React, {Component} from 'react';

class ControlledInput extends Component{
    constructor(props){
        super(props);
        this.state({
            value:''
        })
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }
    render(){
        return(
        <div>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <p>The answer is :</p>
            <h1> {this.state.value}</h1>
        </div>)
    }
}

export default ControlledInput;