/* experience section */
import React, { Fragment } from 'react';
import Cookies from 'js-cookie';
import {Button, Table, Icon} from 'semantic-ui-react'

export default class Experience extends React.Component {
    constructor(props) {
        super(props);

        const experience = props.experienceData ?
        Object.assign({}, props.experienceData)
        : {
               
                company: "",
                position : "",
                responsibilities: "",
                start: "",
                end: ""
           
        }
      

        
        this.state = {
            showAdd : false,
            newexperience : experience,
            experienceCollection : [],
            showUpdate: false,
            tempId : null
        }
       

        this.openEdit = this.openEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveContact = this.saveContact.bind(this)
        this.updateContact =this.updateContact.bind(this)
        this.deleteContact = this.deleteContact.bind(this)
        this.openUpdate = this.openUpdate.bind(this)
      
    }



    openEdit() {
        
        const experience  = Object.assign({}, this.state.newexperience)
        this.setState({
            showAdd: !this.state.showAdd,    
            newexperience : experience
        })
      
    }

    openUpdate(index) {
        const experience  = Object.assign({}, this.state.newexperience)
        this.setState({
            showUpdate: !this.state.showUpdate,    
            newexperience : experience,
            tempId : index
        })

        console.log("test");
    }
    handleChange(event) {

        const data = Object.assign(this.props.experienceData,this.state.newexperience)
        data[event.target.name] = event.target.value
        this.setState( {
            newexperience : data
        })
  
    }



    saveContact() {
        const data = Object.assign({}, this.state.newexperience)

        let test = this.state.experienceCollection.concat(data);

        this.setState({
            experienceCollection : test,
            showAdd : !this.state.showAdd
        })

        this.props.updateProfileData(this.state.experienceCollection)
        console.log(this.state.experienceCollection);

    }

    updateContact(index) {
        const data = Object.assign(this.state.newexperience)

        let test = this.state.experienceCollection.map((k,i) => i === index ? {data, company: data.company, responsibilities : data.responsibilities, position : data.position, start:data.start, end : data.end  } : k);
      

     this.setState( ({

        experienceCollection : test,
        showUpdate : !this.state.showUpdate
      
      }))

    }

    deleteContact(index) {
        const data = Object.assign(this.state.newexperience);

        let test = this.state.experienceCollection.filter((k,i) => i !== index);

        this.setState( ({
            
            experienceCollection : test,
            
          }))

          console.log(index);
    }



    render(){

        let levelOptions = [

            {key : '0', text : 'Beginner', value: 'Beginner' },
            {key : '1', text : 'Intermediate', value: 'Intermediate' },
            {key : '2', text : 'Expert', value: 'Expert' },
           

        ]

        let level = levelOptions.map((x) => <option key={x.key} value={x.value}>{x.value}</option>);

        

        return(

            <div>

                {this.state.showAdd && 
                
                <div style= { { float:'left'}} > 
                
                    <div style= { { display:"flex", float:'left'}}  >

                        <div  style= { {width:'300px',flexDirection:'column', margin:"10px 10px 10px 10px"}}>
                        <label style= { {width:'300px', margin:"10px 10px 10px 10px"}}>Company</label>
                        <input type="text" style= { {width:'300px', margin:"10px 10px 10px 10px"}} name="company" onChange={this.handleChange}></input>
                        </div>
                        

                        <div style= { {width:'300px',flexDirection:'column', margin:"10px 10px 10px 10px"}}>
                        <label  style= { {width:'300px', margin:"10px 10px 10px 10px"}}>Position</label>
                        <input type="text" style= { {width:'300px',flexDirection:'row', margin:"10px 10px 10px 10px"}} name="position" onChange={this.handleChange}></input>         
                        </div>
                    </div>


                    <div style= { { display:"flex", float:'left'}}>

                        <div  style= { {width:'300px',flexDirection:'column', margin:"10px 10px 10px 10px"}}>
                        <label style= { {width:'300px', margin:"10px 10px 10px 10px"}}>Start Date:</label>
                        <input type="date" style= { {width:'300px', margin:"10px 10px 10px 10px"}} name="start" onChange={this.handleChange}></input>
                        </div>

                        <div style= { {width:'300px',flexDirection:'column', margin:"10px 10px 10px 10px"}}>
                        <label style= { {width:'300px', margin:"10px 10px 10px 10px"}}>End Date:</label>
                        <input type="date" style= { {width:'300px', margin:"10px 10px 10px 10px"}} name="end" onChange={this.handleChange}></input>
                        </div>

                    </div>

               
                    <div style= { {width:'200px',flexDirection:'column', margin:"10px 10px 10px 10px"}} >
                        <label style= { {width:'200px', margin:"10px 10px 10px 10px"}}>Responsibilities</label>
                        <input type="text" style= { {width:'500px', margin:"10px 10px 10px 10px"}} name="responsibilities" onChange={this.handleChange}></input>
                    </div>
                    <Button onClick={this.saveContact} secondary type="button" style= { {width:'100px',flexDirection:'row', margin:"10px 10px 10px 10px"}}>Add </Button>
                    <Button type="button" onClick={() => this.setState({showAdd : !this.state.showAdd})} style= { {width:'100px',flexDirection:'row', margin:"10px 10px 10px 10px"}}>Cancel</Button>
               
                </div>
                
                }


            {this.state.showUpdate && 
                
                <div style= { { float:'left'}} > 
                
                    <div style= { { display:"flex", float:'left'}}  >

                        <div  style= { {width:'300px',flexDirection:'column', margin:"10px 10px 10px 10px"}}>
                        <label style= { {width:'300px', margin:"10px 10px 10px 10px"}}>Company</label>
                        <input type="text" style= { {width:'300px', margin:"10px 10px 10px 10px"}} name="company" onChange={this.handleChange}></input>
                        </div>
                        

                        <div style= { {width:'300px',flexDirection:'column', margin:"10px 10px 10px 10px"}}>
                        <label  style= { {width:'300px', margin:"10px 10px 10px 10px"}}>Position</label>
                        <input type="text" style= { {width:'300px',flexDirection:'row', margin:"10px 10px 10px 10px"}} name="position" onChange={this.handleChange}></input>         
                        </div>
                    </div>


                    <div style= { { display:"flex", float:'left'}}>

                        <div  style= { {width:'300px',flexDirection:'column', margin:"10px 10px 10px 10px"}}>
                        <label style= { {width:'300px', margin:"10px 10px 10px 10px"}}>Start Date:</label>
                        <input type="date" style= { {width:'300px', margin:"10px 10px 10px 10px"}} name="start" onChange={this.handleChange}></input>
                        </div>

                        <div style= { {width:'300px',flexDirection:'column', margin:"10px 10px 10px 10px"}}>
                        <label style= { {width:'300px', margin:"10px 10px 10px 10px"}}>End Date: </label>
                        <input type="date" style= { {width:'300px', margin:"10px 10px 10px 10px"}} name="end" onChange={this.handleChange}></input>
                        </div>

                    </div>

               
                    <div style= { {width:'200px',flexDirection:'column', margin:"10px 10px 10px 10px"}} >
                        <label style= { {width:'200px', margin:"10px 10px 10px 10px"}}>Responsibilities</label>
                        <input type="text" style= { {width:'500px', margin:"10px 10px 10px 10px"}} name="responsibilities" onChange={this.handleChange}></input>
                    </div>
                    <Button basic color='blue' onClick={ () => this.updateContact(this.state.tempId)}  type="button" style= { {width:'100px',flexDirection:'row', margin:"10px 10px 10px 10px"}}>Update </Button>
                    <Button basic color='red' type="button" onClick={() => this.setState({showUpdate : !this.state.showUpdate})} style= { {width:'100px',flexDirection:'row', margin:"10px 10px 10px 10px"}}>Cancel</Button>
               
                </div>
                
                }                  


                <Table basic style= { {padding:'10px', position: 'block'}}>
                <Table.Header>
                

                <Table.Row >
                    <Table.HeaderCell>Company</Table.HeaderCell>
                    <Table.HeaderCell>Position</Table.HeaderCell>    
                    <Table.HeaderCell>Responsibilities</Table.HeaderCell> 
                    <Table.HeaderCell>Start</Table.HeaderCell>  
                    <Table.HeaderCell>End</Table.HeaderCell> 
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell><Button type="button" secondary style={{ position:'static'}} onClick={this.openEdit}> Add New </Button></Table.HeaderCell>
                    
                </Table.Row>
                </Table.Header>


              
       
                <Table.Body>
                {this.state.experienceCollection.map( (l) => 

                
                <Table.Row key={this.state.experienceCollection.indexOf(l)}  >
                  
                    <Table.Cell>{l.company}</Table.Cell>
                    <Table.Cell >{l.position}</Table.Cell>
                    <Table.Cell singleLine={false} >{l.responsibilities}</Table.Cell>
                    <Table.Cell >{l.start}</Table.Cell>
                    <Table.Cell >{l.end}</Table.Cell>

                    <Table.Cell> 
                        <Button type="button" 
                                onClick={ () => this.openUpdate(this.state.experienceCollection.indexOf(l))
                                } 
                                icon="pencil"/>
                    </Table.Cell>
                    <Table.Cell ><Button type="button" onClick={ ()=>{this.deleteContact(this.state.experienceCollection.indexOf(l))}} icon='close' /></Table.Cell>
                </Table.Row>
              
                )}

                </Table.Body>
               
               
                
                </Table>
            </div>

        
            

        )
    }

}