/* Social media JSX */
import React from 'react';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Popup, Button, Icon } from 'semantic-ui-react';

export default class SocialMediaLinkedAccount extends React.Component {
    constructor(props) {
        super(props);

        const linkedAccounts = props.linkedAccounts ?
        Object.assign({}, props.linkedAccounts)
        : {
            linkedIn: "",
            github: ""
        }

        

        this.state = {
            showEditSection: false,
            newContact: linkedAccounts
            
        }

        
        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveContact = this.saveContact.bind(this)
    }

    componentDidMount() {
        $('.ui.button.social-media')
            .popup();
    }

    handleChange(event) {
        const data = Object.assign({}, this.state.newContact)
        data[event.target.name] = event.target.value
        this.setState({
            newContact: data
        })
    }
    openEdit() {
      
        const linkedAccounts = Object.assign({}, this.props.linkedAccounts)
        this.setState({
            showEditSection: true,
            newContact: linkedAccounts
        })
        console.log(this.state.showEditSection);
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
        console.log(this.props.linkedAccounts);
    }
    saveContact() {
        const data = Object.assign({}, this.state.newContact)
        this.props.updateProfileData(data)
        this.props.saveProfileData(data)
        this.closeEdit()
    }



    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }

    renderEdit(){
        return (
            <div className='ui sixteen wide column'>
                 <ChildSingleInput
                    inputType="text"
                    label="LinkedIn"
                    name="linkedIn"
                    value={this.state.newContact.linkedIn}
                    controlFunc={this.handleChange}
                    maxLength={80}
                    placeholder="Enter your LinkedIn"
                    errorMessage="Please enter a valid LinkedIn"
                />
                <ChildSingleInput
                    inputType="text"
                    label="Github"
                    name="github"
                    value={this.state.newContact.github}
                    controlFunc={this.handleChange}
                    maxLength={80}
                    placeholder="Enter your Github"
                    errorMessage="Please enter a valid Github"
                />
                 <button type="button" className="ui teal button" onClick={this.saveContact}>Save</button>
                <button type="button" className="ui button" onClick={console.log("test")}>Cancel</button>
        
            </div>
        )
    }

    renderDisplay() {

        return(
            <div style= { {padding:'10px', display:'block'}}>
               <Button primary>
                   <Icon name="linkedin"/>
                   Linkedin
               </Button>

               <Button secondary>
                   <Icon name="github"/>
                   Github
               </Button>
            
               <Button secondary onClick={ this.openEdit} style={{ position:'absolute',right :'0' }}>   
                   Edit
               </Button>
                
            </div>

        )
       
    }

  

}