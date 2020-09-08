import React from 'react';
import { PreviewView } from './styled';
const {Remarkable} = require('remarkable');
export default ({text})=>{
    const md = new Remarkable();
    const markdown = md.render(text);
    return(
        <PreviewView dangerouslySetInnerHTML={{__html:markdown}}/>
    );
};