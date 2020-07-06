import React, { Component } from 'react';
import Tiles from '../../components/tiles/Tiles';
import { Grid } from 'semantic-ui-react';

class DataStructures extends Component{
    constructor(props){
        super(props);
        this.state = {
            menuItems: [
                {key: "linkedList", label: "Linked List" , message:{'text': 'New', 'color':'red'}, href: "datastructures/linked_list", color:'blue', text: ` 

                Duis vel ligula et sem pellentesque iaculis eu nec mi. Quisque facilisis volutpat nibh eu commodo. Aliquam gravida eget risus quis porttitor. Aenean augue eros, molestie vel ipsum ut, convallis viverra orci. Aliquam mattis volutpat urna, vitae porttitor mi pulvinar id. Sed justo nisi, blandit id varius sed, hendrerit sit amet lectus. Quisque mollis tristique nisi at euismod.
                `},
                {key: "stack", label: "Stack", message: "Coming soon...", text: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ex eget dictum vulputate. Vivamus posuere velit quis enim bibendum fermentum. Nunc in porttitor sem. Donec nisl urna, accumsan eu metus nec, iaculis aliquam purus. Vivamus non libero eu nisi mattis pellentesque. Donec vestibulum leo ac libero dapibus, et rutrum ipsum aliquet. Aliquam convallis non nisi in cursus. Etiam ac elit sit amet mi semper hendrerit et eget risus. Aliquam et nulla pharetra, dictum dolor sit amet, dictum ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse maximus commodo mauris euismod placerat. Curabitur mauris elit, convallis eget dolor et, semper elementum quam. Aenean viverra velit et neque fermentum tincidunt. Etiam lobortis, velit at sagittis euismod, dolor orci ornare metus, vel ultricies ipsum erat lacinia lacus.

                Duis vel ligula et sem pellentesque iaculis eu nec mi. Quisque facilisis volutpat nibh eu commodo. Aliquam gravida eget risus quis porttitor. Aenean augue eros, molestie vel ipsum ut, convallis viverra orci. Aliquam mattis volutpat urna, vitae porttitor mi pulvinar id. Sed justo nisi, blandit id varius sed, hendrerit sit amet lectus. Quisque mollis tristique nisi at euismod.`},
                {key: "queue", label: "Queues", message: "Coming soon...", href: null,text: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ex eget dictum vulputate. Vivamus posuere velit quis enim bibendum fermentum. Nunc in porttitor sem. Donec nisl urna, accumsan eu metus nec, iaculis aliquam purus. Vivamus non libero eu nisi mattis pellentesque. Donec vestibulum leo ac libero dapibus, et rutrum ipsum aliquet. Aliquam convallis non nisi in cursus. Etiam ac elit sit amet mi semper hendrerit et eget risus. Aliquam et nulla pharetra, dictum dolor sit amet, dictum ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse maximus commodo mauris euismod placerat. Curabitur mauris elit, convallis eget dolor et, semper elementum quam. Aenean viverra velit et neque fermentum tincidunt. Etiam lobortis, velit at sagittis euismod, dolor orci ornare metus, vel ultricies ipsum erat lacinia lacus.

                Duis vel ligula et sem pellentesque iaculis eu nec mi. Quisque facilisis volutpat nibh eu commodo. Aliquam gravida eget risus quis porttitor. Aenean augue eros, molestie vel ipsum ut, convallis viverra orci. Aliquam mattis volutpat urna, vitae porttitor mi pulvinar id. Sed justo nisi, blandit id varius sed, hendrerit sit amet lectus. Quisque mollis tristique nisi at euismod.`},
                
                {key: "binaryTree", label: "Binary Tree", message: "Coming soon...", text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ex eget dictum vulputate. Vivamus posuere velit quis enim bibendum fermentum. Nunc in porttitor sem. Donec nisl urna, accumsan eu metus nec, iaculis aliquam purus. Vivamus non libero eu nisi mattis pellentesque. Donec vestibulum leo ac libero dapibus, et rutrum ipsum aliquet. Aliquam convallis non nisi in cursus. Etiam ac elit sit amet mi semper hendrerit et eget risus. Aliquam et nulla pharetra, dictum dolor sit amet, dictum ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse maximus commodo mauris euismod placerat. Curabitur mauris elit, convallis eget dolor et, semper elementum quam. Aenean viverra velit et neque fermentum tincidunt. Etiam lobortis, velit at sagittis euismod, dolor orci ornare metus, vel ultricies ipsum erat lacinia lacus.

                Duis vel ligula et sem pellentesque iaculis eu nec mi. Quisque facilisis volutpat nibh eu commodo. Aliquam gravida eget risus quis porttitor. Aenean augue eros, molestie vel ipsum ut, convallis viverra orci. Aliquam mattis volutpat urna, vitae porttitor mi pulvinar id. Sed justo nisi, blandit id varius sed, hendrerit sit amet lectus. Quisque mollis tristique nisi at euismod.`
                },
                {key: "graph", label: "Graphs", message: "Coming soon...", text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ex eget dictum vulputate. Vivamus posuere velit quis enim bibendum fermentum. Nunc in porttitor sem. Donec nisl urna, accumsan eu metus nec, iaculis aliquam purus. Vivamus non libero eu nisi mattis pellentesque. Donec vestibulum leo ac libero dapibus, et rutrum ipsum aliquet. Aliquam convallis non nisi in cursus. Etiam ac elit sit amet mi semper hendrerit et eget risus. Aliquam et nulla pharetra, dictum dolor sit amet, dictum ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse maximus commodo mauris euismod placerat. Curabitur mauris elit, convallis eget dolor et, semper elementum quam. Aenean viverra velit et neque fermentum tincidunt. Etiam lobortis, velit at sagittis euismod, dolor orci ornare metus, vel ultricies ipsum erat lacinia lacus.

                Duis vel ligula et sem pellentesque iaculis eu nec mi. Quisque facilisis volutpat nibh eu commodo. Aliquam gravida eget risus quis porttitor. Aenean augue eros, molestie vel ipsum ut, convallis viverra orci. Aliquam mattis volutpat urna, vitae porttitor mi pulvinar id. Sed justo nisi, blandit id varius sed, hendrerit sit amet lectus. Quisque mollis tristique nisi at euismod.`
                }
            ]
        }
    }
    render(){
        return (
            <React.Fragment>
                <Tiles items={this.state.menuItems} />
            </React.Fragment>
        )
    }
}


export default DataStructures;