import React from 'react'
import { SingleInput } from '../Form/SingleInput.jsx';
import {Button} from 'semantic-ui-react'

export default class VisaStatus extends React.Component {
    constructor(props) {
        super(props)


        this.state = {

            visaStatus : this.props.visaStatus,
            visaExpiryDate : this.props.visaExpiryDate,
            showExpiryDate : false

        }
        
        this.handleChange = this.handleChange.bind(this)
        this.validation = this.validation.bind(this)
        this.saveContact = this.saveContact.bind(this)
    }

    

    handleChange(event) {
     
      
        this.setState( {
            [event.target.name] : event.target.value
        }, () => this.validation())

        console.log(this.state.visaExpiryDate);
    }


    validation(){
        if(this.state.visaStatus ===  "Citizen" || this.state.visaStatus === "Permanent Resident"){

            this.setState({
                showExpiryDate : false
            })
        }else {
            
            this.setState({
                showExpiryDate : true
            })
        }
    }



    saveContact(){
       // const status = Object.assign(this.state.visaStatus)
      //  const expiryDate = Object.assign(this.state.visaExpiryDate)
        this.props.updateProfileData(this.state.visaStatus)
        this.props.updateProfileData(this.state.visaExpiryDate)
        this.props.saveProfileData(this.state.visaStatus)
        this.props.saveProfileData(this.state.visaExpiryDate)
        console.log(this.state.visaStatus + this.state.visaExpiryDate);
    
    }

    render() {

        
        let visaOptions = [

            {key : '0', text : 'Citizen', value: 'Citizen' },
            {key : '1', text : 'Permanent Resident', value: 'Permanent Resident' },
            {key : '2', text : 'Work Visa', value: 'Work Visa' },
            {key : '3', text : 'Student Visa', value: 'Student Visa' },
           

        ]

        let visas = visaOptions.map((x) => <option key={x.key} value={x.value}>{x.value}</option>);



      return(
          



        <div style= {{display:"flex"}}>
            <select onChange={this.handleChange} name="visaStatus"  style= { {width:'200px',flexDirection:'row',margin:"10px 10px 10px 10px"}}>

                <option value="">
                    Select visa
                </option>
                {visas}
            </select>

            { this.state.showExpiryDate &&

                <div>
                <input type="date" style= { {width:'200px', margin:"10px 10px 10px 10px"}} name="visaExpiryDate" onChange={this.handleChange}></input>
                <Button onClick={this.saveContact} secondary type="button" style= { {width:'100px',flexDirection:'row', margin:"10px 10px 10px 10px"}}>Save </Button>
        
                </div>
            }

        </div>
      ) 
    }
}