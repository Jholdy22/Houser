import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Wizard extends Component {
    constructor(props){
        super(props);

    this.state = {
            Name: '',
            Address:'',
            City: '',
            State:'',
            Zipcode:''
        }
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e){
        this.setState({Name: e.target.value})
    }
    handleInput(e){
        this.setState({Address: e.target.value})
    }
    
    

    render() {
        
        return (
            <div>
                <div className="name">
                    Name
                    <input type="Name" onChange={(e) => this.handleInput(e)}/>
                    
                </div>
                    <Link to="/Dashboard"><button> Cancel </button></Link>
            </div>
        );
    }
}

export default Wizard;