import React from 'react';
import { Segment, Container , Label, Icon, Divider} from 'semantic-ui-react';

import './code.css';

const langConfigurations = [
    {
        language: "Javascript",
        keyWords:["js", "javascript", "es6", "es5"],
        charSep: [' ', '{', '}','[',']', ';', '=', '(', ')', '"', "'", '>', '<', ':', ',', '.'],
        charSepClassName: 'js-special_chars',
        labelColor: 'red',
        syntaxClasses:[
            {className: "js-reserved-word", keyWords:["class", "const", 'constructor'] },
            {className: "js-reserved-word-2", keyWords:["if", "else", 'for', 'case', 'null', 'this', 'new', 'return'] },
            {className: "js-comments", keyWords:['/*', '*/', '/**'] }
        ] 
    }
];

const _getWord = (line, sepIdx, langConfig) => {
    const index = line.indexOf(langConfig.charSep[sepIdx]);
    if(index < 0){
        if(line.trim() === '')
            return <span>&nbsp;</span>;
        else if (sepIdx < langConfig.charSep.length )
            return (_getWord(line, ++sepIdx, langConfig) )
        else {
            let className = '';
            for(const syntaxClasses of langConfig.syntaxClasses){
                className += syntaxClasses.keyWords.some(element => element === line.trim()) ? syntaxClasses.className : '';
            }
            return <span className={className}>{line}</span>;
        }
    }
    
    return [_getWord(line.substring(0, index), sepIdx, langConfig) , <span className={langConfig.charSepClassName}>{langConfig.charSep[sepIdx]}</span> ,_getWord(line.substring(index+1) , sepIdx, langConfig)];
    
}

const formatCode = (sourceCode, langConfig) => {
    
    if(!sourceCode)
        return null;
    
    const htmlOutput = []
    for(const line of sourceCode.split('\n')){
        htmlOutput.push(_getWord(line, 0, langConfig));
        htmlOutput.push(<br />);
    }
    return (htmlOutput);
}

const codeViewer = (props) => {
    const langConfig = langConfigurations[0];
    return <React.Fragment>
        <Segment>
            <Label color={langConfig.labelColor} ribbon>
                {props.language || "Source Code"}
            </Label>
            <Divider clearing />
            <Label attached="top right" as="a">
                Code Viewer
                <Icon name="question" color='green' />
            </Label>
            <Container className="code-main-container">
                
                    {formatCode(props.src, langConfig)}
                
            </Container>
        </Segment>
    </React.Fragment>
}

export default codeViewer;
