import React, { Component } from 'react';
import {Grid, Dropdown, Button, Segment, List, Placeholder, Input} from 'semantic-ui-react';

import './ds.css';
import axios from 'axios';
import ES6LinkedList from '../../../utils/datastructures/ES6LinkedList';
class LinkedList extends Component{
    constructor(props){
        super(props);
        const list = new ES6LinkedList();
        list.append(765);
        list.append(344);
        list.append(432);
        
        list.insert(3, 1);
        list.insert(0, 0);
        list.append(765);
        list.append(344);
        list.append(432);
        list.append(765);
        list.append(344);
        list.append(432);
        let elements = [];
        for (const li of list)
            elements.push(li);
        this.state = {
            elements: elements,
            
            action: null
        }
        this.actions = [
            {key: 1, text: "New Linked List", value: "newlist"},
            {key: 2, text: "Append", value: "append"},
            {key: 3, text: "Insert", value: "insert"},
            {key: 4, text: "Find", value: "find"},
            {key: 5, text: "Delete", value: "delete"},
        ];
        
    }

    onChangeAction = (e, {value}) => {
        console.log(value);
        this.setState({action: value})
    }
    componentDidMount(){
        axios
            .get('/code/js/LinkedList.txt')
            .then( response => {
                console.log(response);
                
                setTimeout( () => {this.setState({src: response.data})}, 1000);
            })
            .catch( response => {console.log(response)})
    }
    render(){
        
        return (<Segment>
                    <Dropdown placeholder='Actions' search selection options={this.actions} onChange={this.onChangeAction}>
                    </Dropdown>
                    <Button>
                        Go
                    </Button>
                    <br />
                    <Input label={{tag:true, content: 'Element'}} labelPosition="right" placeholder="Enter new element" />
                    <Input label={{tag:true, content: 'Index'}} labelPosition="right" placeholder="Enter index" />
                    <br />
                    <List horizontal>
                        {this.state.elements.map( item => {
                            return(
                                <List.Item>        
                                    {item}
                                </List.Item>
                            )
                        })}
                    </List>
            </Segment>)
            
        
    }
}

export default LinkedList;

