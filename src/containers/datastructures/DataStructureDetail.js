import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import LinkedList from './ds/LinkedList';
import CodeViewer from '../../components/codeviewer/CodeViewer';
import axios from 'axios';

class DataStructureDetail extends Component{
    constructor(props){
        super(props);
        const {match} = props; 
        this.state = {
            structure: match.params['structure'],
            src:""
        }
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
        return (
            <React.Fragment>
                
                <Grid divided padded stackable relaxed columns={16} > 
                    <Grid.Row centered columns={16}>
                    <Grid.Column>
                        <Header>{this.state.structure.toUpperCase()}</Header>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                    <Grid.Column >
                        <LinkedList />
                        </Grid.Column>
                    
                        <Grid.Column >
                            <CodeViewer src={this.state.src} language="javascript" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </React.Fragment>
        )
    }
}

export default DataStructureDetail;