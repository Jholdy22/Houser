import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import House from '../House/House.js'

class Dashboard extends Component {
    render(){
        return(
            <div>
                {/* </House> */}
                <Link to="Wizard"><button> Add New Property </button></Link>
            </div>
        )
    }
}

export default Dashboard;
