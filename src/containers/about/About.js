import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Grid, Card, Segment, Label, List , Header, Rating, Icon, Divider} from 'semantic-ui-react';
//import Code from '../../components/code/Code';

const WorkExperience = (props) => {
    return (<React.Fragment>
        <Grid.Row>
                                <Grid.Column>
        <Header style={{color:"#1DA1F2"}}>{props.positionName}</Header>
        <Label  color='teal' tag>{props.company}</Label>
        <Label  color='orange' tag>{`${props.startDate} - ${props.endDate}`}</Label>
        {props.locations && Array.isArray(props.locations) ? 
            props.locations.map( loc => <Label  color='red' tag>{loc}</Label>): null
        }
        <List>
            {props.responsabilities.map( responsability => <List.Item>{responsability}</List.Item>)}
        </List>
        <hr />
        </Grid.Column>
        </Grid.Row>
        
        
    </React.Fragment>)
}

WorkExperience.propTypes = {
    positionName: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    locations: PropTypes.arrayOf(PropTypes.string), 
    responsabilities: PropTypes.arrayOf(PropTypes.string).isRequired
}


const HRView = (props) => {
    return <React.Fragment>
        <Grid stackable>
            <Grid.Row>
                <Grid.Column width={8}>
                    
                    <Card fluid>
                        <Card.Content>
                            <Label  color="brown" ribbon>About</Label>
                            <Divider clearing />
                            <Card.Header>J. Enrique</Card.Header>
                            <Card.Meta>Education</Card.Meta>
                            <Card.Description>
                            Computer Science Degree at University of Guadalajara (CUCEI) June 2005 - December 2010
                            </Card.Description>
                            <Card.Meta>Languages</Card.Meta>
                            <Card.Description>
                            <List horizontal>
                                {['Spanish', 'English'].map( lang => {
                                    return <List.Item>
                                        <List.Content>
                                            <List.Header><Label color="green">{lang}</Label></List.Header>
                                        </List.Content>
                                    </List.Item>
                                })}
                            </List>
                            </Card.Description>
                            
                        </Card.Content>
                    </Card>
                
                </Grid.Column>
                <Grid.Column width={8}>
                    <Segment>
                        <Label  color="teal" ribbon="right">Contact Info</Label>
                        <Divider clearing />
                        <List horizontal>
                            {[
                                {'iconName': 'linkedin', 'href': 'https://linkedin.com/in/jecr-34329095', 'display': 'Linkedin'},
                                {'iconName': 'github', 'href': 'https://github.com/Overlord-1349', 'display': 'Github'},
                               // {'iconName': 'code', 'href': 'https://je-dev-6c72d.web.app/about', 'display': 'Portfolio'},
                            ].map( contactInfo => {
                                return <List.Item>
                                    <Label as="a" href={contactInfo.href} target="_blank" color="blue" size="large"><Icon name={contactInfo.iconName} size="big" />{contactInfo.display} </Label>
                                    
                                </List.Item>
                                
                            })}  
                        </List>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <Segment>
                        <Label  color='red' ribbon>Profile</Label>
                        <Divider clearing />
                        <p>
                        Experienced application support/developer with great troubleshooting and interpersonal skills, I consider myself people oriented thus always looking to help and learn from others. I am an enthusiastic coder always looking to solve complex problems.
                        </p>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} divided stretched>
                <Grid.Column>
                    <Segment>
                        <Label  color='blue' ribbon>Work Experience</Label>
                        <Divider clearing />
                        <Grid >
                                    <WorkExperience 
                                        company='Tata Consultancy Services'
                                        positionName='SRE'
                                        startDate='2019-06'
                                        endDate='Current'
                                        locations={['Guadalajara', 'Montreal']}
                                        responsabilities={[
                                            'Development of python scripts to implement horizontal solutions for problems impacting multiple teams.',
                                            'Development of web applications using reactjs to provide users a front-end to trigger backend processes without IT intervention.',
                                            'Follow agile methodology to track the progress of the tasks assigned to our team.',
                                            'Regular application support.'
                                        ]}
                                    />
                               
                            
                                    <WorkExperience 
                                            company='Tata Consultancy Services Canada'
                                            positionName='Application support level 3'
                                            startDate='2015-11'
                                            endDate='2019-06'
                                            locations={['Montreal']}
                                            responsabilities={[
                                                'Creation of python scripts to automate and/or simplify repetitive tasks.',
                                                'Configure checks for all the assets related to an application including unix and windows servers, databases, web applications, storage and others using an in-house monitoring tool, also in charge of creating customized tools to monitor application related processes or any other asset not covered by standard tools.',
                                                'Creation of stored procedures to make complex operational updates.',
                                                'Analyze the risk of any change going to the production environment, this included erstanding of the business requirement, possible implementation issues and code review.',
                                                'Problem management - analysis of the repetitive production issues and bring up solutions in collaboration with multiple development teams to ensure these are addressed.'
                                            ]}
                                        />
                               
                                    <WorkExperience 
                                            company='Tata Consultancy Services'
                                            positionName='Application support level 2'
                                            startDate='2013-01'
                                            endDate='2015-11'
                                            locations={['Guadalajara']}
                                            responsabilities={[
                                                'Member of application support team involved in the maintenance of several applications used to perform firm\'s financial calculations, including accounting, compensation, taxes and wealth management. The daily work included supporting clients located all over the globe, in collaboration with associates in USA, Canada and India.',
                                                'Analyze and resolve data quality issues of processes using multiple ETL tools including informatica, autosys and SSIS.',
                                                'Creation of complex ad-hoc queries to fetch or modify information stored in SQL databases.',
                                                'Debug front-end related issues for multiple ASP.NET applications.',
                                            ]}
                                        />
                               
                                    <WorkExperience 
                                            company='Jabil'
                                            positionName='Programmer Analyst'
                                            startDate='2010-08'
                                            endDate='2013-01'
                                            locations={['Guadalajara']}
                                            responsabilities={[
                                                'Creation and maintenance of Web applications used by different areas within the company including financials, human resources, manufacturing and others. My responsibilities included requirement gathering, system design, coding, testing and deployment to the production environment.',
                                                'Design and development of Cubes including the data load process using SQL Server Integration Services.',
                                            ]}
                                        />
                               
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={12}>
                    <Segment>
                        <Label ribbon  color="violet">Technical skills</Label>
                        <Divider clearing />
                        <List horizontal relaxed>
                            <List.Item></List.Item>
                            {[
                                {'skillName': 'SQL/T-SQL', 'iconName': 'database', 'level': 5 },
                                {'skillName': 'SSIS', 'iconName': 'database', 'level': 3 },
                                {'skillName': 'Informatica', 'iconName': 'database', 'level': 3 },
                                {'skillName': 'Autosys', 'iconName': 'clock', 'level': 5 },
                                {'skillName': 'Python', 'iconName': 'code', 'level': 4 },
                                {'skillName': 'ASP.NET/C#', 'iconName': 'code', 'level': 3 },
                                {'skillName': 'Javascript/es6', 'iconName': 'code', 'level': 4 },
                                {'skillName': 'ReactJS', 'iconName': 'code', 'level': 4 },
                                {'skillName': 'jQuery', 'iconName': 'code', 'level': 4 },
                                {'skillName': 'HTML', 'iconName': 'code', 'level': 4 },
                                {'skillName': 'CSS', 'iconName': 'code', 'level': 3 },
                                {'skillName': 'Bootstrap', 'iconName': 'code', 'level': 3 },
                                {'skillName': 'Semantic UI', 'iconName': 'code', 'level': 4 },
                                {'skillName': 'Agile and scrum', 'iconName': 'window maximize', 'level': 3 },
                                {'skillName': 'Jira', 'iconName': 'window maximize', 'level': 3 },
                                {'skillName': 'Service now', 'iconName': 'window maximize', 'level': 3 },
                                {'skillName': 'NPM', 'iconName': 'window maximize', 'level': 4 },
                                {'skillName': 'Unix/Red Hat', 'iconName': 'window maximize', 'level': 4 },
                            ].map ( skill => {
                                return <List.Item>
                                        
                                        <List.Content>
                                            <List.Header><Icon name={skill.iconName} verticalAlign="middle" size="small" />{skill.skillName} </List.Header>
                                            <List.Description>
                                            <Rating disabled maxRating={5} defaultRating={skill.level} />
                                            </List.Description>
                                        </List.Content>
                                       </List.Item>
                            } )}
                        </List>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Segment>
                        <Label  ribbon="right" color="pink">General skills</Label>
                        <Divider clearing />
                        <List >
                            {['Problem solving', 'Team work', 'Leadership', 'Communication'].map( skill => {
                                return <List.Item>
                                <Icon color="green" name="check circle outline" size="large" />
                                
                                <List.Content>
                                    <List.Header><Label color="green">{skill}</Label></List.Header>
                                </List.Content>
                            </List.Item>
                            })}
                        </List>
                    </Segment>
                    
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </React.Fragment>
}

class About extends Component{
    render(){
        const tabs = [
            {
                menuItem: {key: 'hr-view', icon: 'address card', 'content': 'Curriculum vitae'},
                render: () => <Tab.Pane><HRView /></Tab.Pane>
            },
            /*{
                menuItem: {key: 'secret-view', icon: 'user secret', 'content': 'Other view'},
                render: () => <Tab.Pane></Tab.Pane>
            },
            {
                menuItem: {key: 'source-code', icon: 'code', 'content': 'Source code'},
                render: () => <Tab.Pane><Code /></Tab.Pane>
            }*/
        ]
        return (<React.Fragment>
            <Tab menu={{ pointing: true}} panes={tabs} >
                
            </Tab>
        </React.Fragment>)
    }
}

export default About;