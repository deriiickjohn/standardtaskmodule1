import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react';
import { SingleInput } from '../Form/SingleInput.jsx';

export default class TalentStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jobStatus : this.props.status
        }

        
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event){

        this.setState({
            jobStatus : event.target.value
        }, ()=> { console.log(this.state.jobStatus)})

        this.props.updateProfileData(this.state.jobStatus);
        this.props.saveProfileData(this.state.jobStatus);
    }

    
    render() {
        return(
            <form style={{display:"flex", flexDirection: "column"}} onChange={this.handleChange}>

                <p>Current Status:</p>
                <div>
                    <input  type="radio" value="Actively looking for a job " name="test" />Actively looking for a job 
                </div>
                
                <div>
                    <input type="radio" value="Not looking for a job at the moment" name="test" />Not looking for a job at the moment
                </div>
                
                <div>
                    <input type="radio" value="Currently employed but open to offers" name="test" />Currently employed but open to offers
                </div>
                    
                <div>
                    <input type="radio" value="Will be available on later date" name="test" />Will be available on later date
                </div>
                    
 
            </form>
        )
    }
}