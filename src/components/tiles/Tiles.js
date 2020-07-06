import React from 'react';
import { Grid, Segment, Label, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const tiles = (props) => {
    
    return <React.Fragment>
        <Grid stackable>
            
            {props.items.map( item => {
                const color = item.color || 'gray';
                let message = {};
                console.log(typeof(item.message));
                if(item.message && typeof(item.message) === 'string'){
                    message['text'] = item.message;
                    message['color'] = color;
                    message['position'] = 'left';
                }
                else if(item.message){
                    message['text'] = item.message.text;
                    message['color'] = item.message.color || color;
                    message['position'] = item.message.position || 'left';
                }
                else{
                    message = null;
                }
                const lblRibbon = message ? <Label ribbon={message.position} color={message.color}>{message.text}</Label>  : null;
                return (
                    <Grid.Column width={8} key={item.key} >
                        <Segment >
                        <Label color={color} attached='top'>{item.label}</Label>
                        {lblRibbon}
                        <Segment basic style={{"height":"200px", "overflow-y":"auto"}}>{item.text}</Segment>
                        <Button disabled={item.href ? false : true} color={color} href={item.href}>{item.buttonText ? item.buttonText : "Learn more"}</Button>
                        </Segment>
                        
                    </Grid.Column>
            )} )} 
            
        </Grid>
    </React.Fragment>
}

tiles.propTypes = {
    items: PropTypes.arrayOf({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        href: PropTypes.string,
        text: PropTypes.string,
        buttonText: PropTypes.string,
        color: PropTypes.oneOf(['red',
        'orange',
        'yellow',
        'olive',
        'green',
        'teal',
        'blue',
        'violet',
        'purple',
        'pink',
        'brown',
        'grey',
        'black'])
    })
}

export default tiles; 