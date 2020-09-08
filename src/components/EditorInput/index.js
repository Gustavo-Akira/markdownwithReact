import React from 'react';
import { Input } from './styled';

const EditorInput = ({value, setText})=>{
    return(
        <Input value={value} onChange={(e)=>setText(e.target.value)}/>
    );
}

export default EditorInput;