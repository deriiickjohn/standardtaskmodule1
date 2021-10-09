/* Photo upload section */
import React, { Component } from 'react';
import Cookies from 'js-cookie';
import {Icon,Button} from 'semantic-ui-react'

export default class PhotoUpload extends Component {

    constructor(props) {
        super(props);

        this.state = {
            profilePic : "https://i.pinimg.com/736x/61/54/18/61541805b3069740ecd60d483741e5bb.jpg",
            showUploadButton : false
        }

        
        this.imageHandle = this.imageHandle.bind(this)
        this.saveImage = this.saveImage.bind(this)
    };

    imageHandle(event) {
        const reader = new FileReader();

        console.log("test")

        reader.onload = () => {
            if(reader.readyState === 2 ){
                this.setState({
                    profilePic : reader.result,
                    showUploadButton : true
                }, console.log(this.state.profilePic))
            }
        }

        reader.readAsDataURL(event.target.files[0])
    }

    saveImage() {
        this.setState({
            showUploadButton : false
        })

        this.props.updateProfileData(this.state.profilePic);
        console.log("asd")
    }


    

    render() {

        return(
            <div>
                
                <div>
                    <label for={"file-input"}>
                    <img type="file"  src={this.state.profilePic} style={{width:"200px",height:"200px",objectFit :"cover", borderRadius: "100px"}} alt=""></img>
                    </label>

                    <input type="file" onChange={this.imageHandle} style={{display:"none"}} accept={"image/*"} id={"file-input"} />
                </div>
            
                <div style={{marginLeft: "50px"}}>
                    {this.state.showUploadButton && 
                    <Button type="button" onClick={this.saveImage}  color="black">Upload</Button>      
                    }
                </div>

                            
            </div>
             
            
        ) 
    }
}
