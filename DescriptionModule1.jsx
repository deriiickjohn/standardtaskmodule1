import React from 'react';
import Cookies from 'js-cookie';

export class DescriptionModule1 extends React.Component {

    constructor(props) {
        super(props);

        const description = props.description ?
        Object.assign({}, props.description)
        : {
            desc1: "",
            desc2: ""
        }


        this.state = {
            characters: 0,
            newContact: description
        };
        this.update = this.update.bind(this);
        this.saveContact = this.saveContact.bind(this);
    };

    update(event) {
    
        const data = Object.assign({}, this.state.newContact)
        data[event.target.name] = event.target.value
        this.setState({
            newContact: data
        })
    }

    saveContact() {
        const data = Object.assign({}, this.state.newContact)
        this.props.updateProfileData(data)
        this.props.saveProfileData(data)
    
    }

    render() {
        const characterLimit = 600;
        let characters = this.props.description ? this.props.description.length : 0;
        
        return (
            <React.Fragment>
              
                <div className="16 wide column">
                    <div className="field" >
                        <textarea maxLength={characterLimit} name="Description" placeholder="Please provide a short summary about yourself."  onChange={this.update} ></textarea>
                    </div>
                    <p>Characters remaining : 150</p>
                    <div className="field" >
                        <textarea maxLength={characterLimit} name="Description" placeholder="Please tell us about any hobbies, additional expertise, or anything else you’d like to add."  onChange={this.update} ></textarea>
                    </div>
                    <p>Characters remaining : 600</p>
                    <div>
                    <button type="button" className="ui teal button" onClick={this.saveContact}>Save</button>
                    </div>
                </div>
                

                
            </React.Fragment>
        )
    }
}
