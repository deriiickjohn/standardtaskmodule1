import React from 'react'
import Cookies from 'js-cookie'
import { default as Countries } from '../../../../util/jsonFiles/countries.json';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Location } from '../Employer/CreateJob/Location';

export class Address extends React.Component {
    constructor(props) {
        super(props)
        
        const address = props.addressData ?
        Object.assign({}, props.addressData)
        : { 

                number: "",
                street: "",
                suburb: "",
                postcode: "",
                city : "",
                country : ""      
        }
        
        this.state = {
            showEditSection: false,
            newAddress : address,
       }

        

        this.openEdit = this.openEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.saveContact = this.saveContact.bind(this)
    }


    openEdit() {
      
        const address  = Object.assign({}, this.props.addressData)
        this.setState({
            showEditSection: true,   
            newAddress : address
        })
      
    }

    handleChange(event) {

        const data = Object.assign({}, this.state.newAddress)
        data[event.target.name] = event.target.value
        this.setState({
            newAddress: data
        })
  
        
    }

    saveContact() {
        const data = Object.assign({}, this.state.newAddress)
        this.props.updateProfileData(data)
        this.props.saveProfileData(data)
        this.closeEdit()
        console.log(data)
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }
   
    renderDisplay() {
        let city = this.props.addressData.location ? this.props.addressData.location.city : ""
        let country = this.props.addressData.location ? this.props.addressData.location.country : ""
        let fullAddress = this.props.addressData ? `${this.props.addressData.number} ${this.props.addressData.street} ${this.props.addressData.suburb}` : ""
       return(
        <div className='row'>
        <div className="ui sixteen wide column">
            <React.Fragment>
                <p>Address: {fullAddress} </p>
                <p>City: {city} </p>
                <p>Country: {country} </p>
            </React.Fragment>
            <button type="button" className="ui right floated teal button" onClick={this.openEdit} >Edit</button>
        </div>
        </div>
       )
    }

    renderEdit(){

        let location = { city: '', country: '' }
        if (this.state.newAddress && this.state.newAddress.location) {
            location = this.state.newAddress.location
        }

        return(
            <div className='ui sixteen wide column'>
            <ChildSingleInput
                inputType="text"
                label="Number"
                name="number"
                value={this.state.newAddress.number}
                controlFunc={this.handleChange}
                maxLength={80}
                placeholder="Enter your last name"
                errorMessage="Please enter a valid name"
            />
            <ChildSingleInput
                inputType="text"
                label="Street"
                name="street"
                value={this.state.newAddress.street}
                controlFunc={this.handleChange}
                maxLength={80}
                placeholder="Enter an email"
                errorMessage="Please enter a valid email"
            />

            <ChildSingleInput
                inputType="text"
                label="Suburb"
                name="suburb"
                value={this.state.newAddress.suburb}
                controlFunc={this.handleChange}
                maxLength={12}
                placeholder="Enter a phone number"
                errorMessage="Please enter a valid phone number"
            />

            <ChildSingleInput
                inputType="text"
                label="Post Code"
                name="postcode"
                value={this.state.newAddress.postcode}
                controlFunc={this.handleChange}
                maxLength={12}
                placeholder="Enter a phone number"
                errorMessage="Please enter a valid phone number"
            />
            Location:
            <Location location={location} handleChange={this.handleChange} />

            
            <button type="button" className="ui teal button" onClick={this.saveContact}>Save</button>
            <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
        </div>
        )
    }

}

export class Nationality extends React.Component {
    constructor(props) {
        super(props)
       

        this.handleChange = this.handleChange.bind(this)
    }


    
    handleChange(event) {

        console.log(event);
    }
    
    render() {

        return(
            <Location location={location} handleChange={this.handleChange} />
        )
    }
}