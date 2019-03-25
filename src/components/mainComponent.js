import React, {Component} from 'react';
import ControlledInput from './controlled_input';
import ControlledForm from './controlled_form';

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
        
    }

    render(){
        return(<div>
            
            <ControlledForm />
        </div>)
    }
    
    
}

export default Main;