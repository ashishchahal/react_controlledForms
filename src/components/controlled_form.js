import React, {Component} from 'react';

class ControlledForm extends Component{
    constructor(props){
        super(props);
        this.state={
            value: '',
            submit: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event){
        this.setState({
            submit: this.state.value
        })
        event.preventDefault()
    }

    render(){
        return(<div>
            <form onSubmit={this.handleSubmit} >
                <input value={this.state.value} onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
            <p> And here is the answer to all problems:</p>
            <h2>{this.state.submit}</h2>
        </div>)
    }
}

export default ControlledForm;