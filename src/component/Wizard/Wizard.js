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
    handleInput(i){
        this.setState({Address: i.target.value})
    }
    

    render() {
        
        return (
            <div>
                <div className="name">
                    Name
                    <input type="Name" onChange={(e) => this.handleInput(e)}/>
                    Address
                    <input type="Address" onChange={(i) => this.handleInput(i)}/>
                </div>
                    <Link to="/Dashboard"><button> Cancel </button></Link>
            </div>
        );
    }
}

export default Wizard;