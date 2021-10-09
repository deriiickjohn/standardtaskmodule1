/* Language section */
import React, { Fragment } from 'react';
import Cookies from 'js-cookie';
import {Button, Table, Icon} from 'semantic-ui-react'

export default class Language extends React.Component {
    constructor(props) {
        super(props);

        const language = props.languageData ?
        Object.assign({}, props.languageData)
        : {
               
                language: "",
                level : ""
           
        }
      

        this.state = {
            showAdd : false,
            newLanguage : language,
            languageCollection : [],
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
        
        const language  = Object.assign({}, this.state.newLanguage)
        this.setState({
            showAdd: !this.state.showAdd,    
            newLanguage : language
        })
      
    }
    handleChange(event) {

        const data = Object.assign(this.props.languageData,this.state.newLanguage)
        data[event.target.name] = event.target.value
        this.setState( {
            newLanguage : data
        })
  
    }



    saveContact() {
        const data = Object.assign({}, this.state.newLanguage)

        let test = this.state.languageCollection.concat(data);

        this.setState({
            languageCollection : test,
            showAdd : !this.state.showAdd
        })

        this.props.updateProfileData(this.state.languageCollection)
        console.log(this.state.languageCollection);

    }

    updateContact(index) {
        const data = Object.assign(this.state.newLanguage)

        let test = this.state.languageCollection.map((k,i) => i === index ? {data, language: data.language, level : data.level  } : k);
      

     this.setState( ({

        languageCollection : test,
        showUpdate : !this.state.showUpdate
      
      }))

    }

    deleteContact(index) {
        const data = Object.assign(this.state.newLanguage);

        let test = this.state.languageCollection.filter((k,i) => i !== index);

        this.setState( ({
            
            languageCollection : test,
            
          }))

          console.log(index);
    }



    render(){

        let levelOptions = [

            {key : '0', text : 'Basic', value: 'Basic' },
            {key : '1', text : 'Conversational', value: 'Conversational' },
            {key : '2', text : 'Fluent', value: 'Fluent' },
            {key : '3', text : 'Native/Bilingual', value: 'Native/Bilingual' },

        ]

        let level = levelOptions.map((x) => <option key={x.key} value={x.value}>{x.value}</option>);

        

        return(

            <div>

                {this.state.showAdd && 
                
                <div style= { {display:'flex', float:'left'}} > 
                    <input type="text" style= { {width:'150px',flexDirection:'row', margin:"10px 10px 10px 10px"}} name="language" onChange={this.handleChange}></input>
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
                            <input type="text" style= { {width:'150px',flexDirection:'row', margin:"10px 10px 10px 10px"}} name="language" onChange={this.handleChange}></input>
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
                    <Table.HeaderCell>Language</Table.HeaderCell>
                    <Table.HeaderCell>Level</Table.HeaderCell>     
                    <Table.HeaderCell><Button type="button" secondary style={{ position:'static'}} onClick={this.openEdit}> Add New </Button></Table.HeaderCell>
                </Table.Row>
                </Table.Header>


                {this.state.languageCollection.map( (l) => 

                
       
                <Table.Body>
               
                <Table.Row key={this.state.languageCollection.indexOf(l)}  >

                    
                    <Table.Cell>{l.language}</Table.Cell>
                    <Table.Cell >{l.level}</Table.Cell>
                    <Table.Cell> 
                        <Button type="button" 
                                onClick={

                                    ()=> {
                                        this.setState({
                                            showUpdate : !this.state.showUpdate,
                                            tempId : this.state.languageCollection.indexOf(l)
                                        })
                                    }

                                } 
                                icon="pencil"/>
                    </Table.Cell>
                    <Table.Cell ><Button type="button" onClick={ ()=>{this.deleteContact(this.state.languageCollection.indexOf(l))}} icon='close' /></Table.Cell>
                </Table.Row>
                </Table.Body>
                
                )}
                
                </Table>
            </div>

        
            

        )
    }

}