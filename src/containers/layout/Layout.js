import React, { Component } from 'react';
import {Menu, Grid, Header, Segment} from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DataStructures from '../datastructures/DataStructures';
import DataStructureDetail from '../datastructures/DataStructureDetail';
import About from '../about/About';


class Layout extends Component{
    
    constructor(props){
        super(props);
        this.state = {activeMenuItem: window.location.href.split('/')[3]}

    }

    render(){
        const { activeMenuItem } = this.state;

        return (<React.Fragment>
            <BrowserRouter>
            <Grid centered>
                <Grid.Row>
                    <Grid.Column>
                        <Segment>
                            <Header>JE personal website</Header>
                            Programmer by conviction, SRE by need, beer lover because well, do I really need to give a reason?.
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered columns={2}>
                    <Grid.Column>
                        
                            <Menu stackable secondary borderless as="a" pointing>
                                <Menu.Item 
                                
                                name='datastructures'
                                href="/datastructures"
                                active={activeMenuItem === "datastructures"}
                                
                                >
                                Data Structures
                                </Menu.Item>

                                <Menu.Item
                                name='algorithms'
                                href='/algorithms'
                                active={activeMenuItem === "algorithms"}
                                >
                                Algorithms
                                </Menu.Item>
                                <Menu.Item
                                name='portfolio'
                                href='/portfolio'
                                active={activeMenuItem === "portfolio"}
                                >
                                Portfolio
                                </Menu.Item>
                                <Menu.Item
                                    name='about'
                                    href='/about'
                                    active={activeMenuItem === "about"}
                                    position="right"
                                >
                                About
                                </Menu.Item>

                            </Menu>
                    

                        
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={14}>
                        <Switch>
                            <Route exact path="/datastructures"><DataStructures /></Route>
                            <Route path="/datastructures/:structure" component={DataStructureDetail}></Route>
                            <Route path="/algorithms"><div>Algorithms</div></Route>
                            <Route path="/about"><About /></Route>
                            <Route exact path="/"><About /></Route>
                            <Route path="/"><p>Page not found</p></Route>
                        </Switch>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default Layout;

