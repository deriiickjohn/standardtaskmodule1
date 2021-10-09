/* Skill section */
import React, { Fragment } from 'react';
import Cookies from 'js-cookie';
import {Button, Table, Icon} from 'semantic-ui-react'

export default class Skill extends React.Component {
    constructor(props) {
        super(props);

        const skill = props.skillData ?
        Object.assign({}, props.skillData)
        : {
               
                skill: "",
                level : ""
           
        }
      

        
        this.state = {
            showAdd : false,
            newskill : skill,
            skillCollection : [],
            showUpdate: false,
            tempId : null
        }
       

        this.openEdit = this.openEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveContact = this.saveContact.bind(this)
        this.updateContact =this.updateContact.bind(this)
        this.deleteContact = this.deleteContact.bind(this)
      
    }



    openEdit() {
        
        const skill  = Object.assign({}, this.state.newskill)
        this.setState({
            showAdd: !this.state.showAdd,    
            newskill : skill
        })
      
    }
    handleChange(event) {

        const data = Object.assign(this.props.skillData,this.state.newskill)
        data[event.target.name] = event.target.value
        this.setState( {
            newskill : data
        })
  
    }



    saveContact() {
        const data = Object.assign({}, this.state.newskill)

        let test = this.state.skillCollection.concat(data);

        this.setState({
            skillCollection : test,
            showAdd : !this.state.showAdd
        })

        this.props.updateProfileData(this.state.skillCollection)
        console.log(this.state.skillCollection);

    }

    updateContact(index) {
        const data = Object.assign(this.state.newskill)

        let test = this.state.skillCollection.map((k,i) => i === index ? {data, skill: data.skill, level : data.level  } : k);
      

     this.setState( ({

        skillCollection : test,
        showUpdate : !this.state.showUpdate
      
      }))

    }

    deleteContact(index) {
        const data = Object.assign(this.state.newskill);

        let test = this.state.skillCollection.filter((k,i) => i !== index);

        this.setState( ({
            
            skillCollection : test,
            
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
                
                <div style= { {display:'flex', float:'left'}} > 
                    <input type="text" style= { {width:'150px',flexDirection:'row', margin:"10px 10px 10px 10px"}} name="skill" onChange={this.handleChange}></input>
                    <select onChange={this.handleChange} name="level"  style= { {width:'150px',flexDirection:'row',margin:"10px 10px 10px 10px"}}>

                        <option value="">
                            Select a level
                        </option>
                        {level}
                    </select>
                    <Button onClick={this.saveContact} type="button" style= { {width:'150px',flexDirection:'row', margin:"10px 10px 10px 10px"}}>Add </Button>
                    <Button type="button" onClick={() => this.setState({showAdd : !this.state.showAdd})} style= { {width:'150px',flexDirection:'row', margin:"10px 10px 10px 10px"}}>Cancel</Button>

                </div>
                
                }


                {this.state.showUpdate && 
                        
                        <div style= { {display:'flex', float:'left'}} > 
                            <input type="text" style= { {width:'150px',flexDirection:'row', margin:"10px 10px 10px 10px"}} name="skill" onChange={this.handleChange}></input>
                            <select onChange={this.handleChange} name="level"  style= { {width:'150px',flexDirection:'row',margin:"10px 10px 10px 10px"}}>
    
                                <option>
                                    
                                </option>
                                {level}
                            </select>
                            <Button basic color='blue' onClick={ () => this.updateContact(this.state.tempId)} type="button" style= { {width:'150px',flexDirection:'row', margin:"10px 10px 10px 10px"}}>Update </Button>
                            <Button basic color='red' type="button" onClick={() => this.setState( { showUpdate : false })} style= { {width:'150px',flexDirection:'row', margin:"10px 10px 10px 10px"}}>Cancel</Button>
    
                        </div>
                        
                }                  


                <Table singleLine style= { {padding:'10px', position: 'block'}}>
                <Table.Header>
                

                <Table.Row >
                    <Table.HeaderCell>Skill</Table.HeaderCell>
                    <Table.HeaderCell>Level</Table.HeaderCell>     
                    <Table.HeaderCell><Button type="button" secondary style={{ position:'static'}} onClick={this.openEdit}> Add New </Button></Table.HeaderCell>
                </Table.Row>
                </Table.Header>


                {this.state.skillCollection.map( (l) => 

                
       
                <Table.Body>
               
                <Table.Row key={this.state.skillCollection.indexOf(l)}  >

                    
                    <Table.Cell>{l.skill}</Table.Cell>
                    <Table.Cell >{l.level}</Table.Cell>
                    <Table.Cell> 
                        <Button type="button" 
                                onClick={

                                    ()=> {
                                        this.setState({
                                            showUpdate : !this.state.showUpdate,
                                            tempId : this.state.skillCollection.indexOf(l)
                                        })
                                    }

                                } 
                                icon="pencil"/>
                    </Table.Cell>
                    <Table.Cell ><Button type="button" onClick={ ()=>{this.deleteContact(this.state.skillCollection.indexOf(l))}} icon='close' /></Table.Cell>
                </Table.Row>
                </Table.Body>
                
                )}
                
                </Table>
            </div>

        
            

        )
    }

}