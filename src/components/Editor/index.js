import React from 'react';
import { EditorView, EditorHeader } from './styled';
import EditorInput from '../EditorInput';

const Editor = ({text,setText})=>{
    console.log(text);
    return(
        <EditorView>
            <EditorHeader>
                <h1>Editor</h1>
            </EditorHeader>
            <EditorInput value={text} setText={setText}/>
        </EditorView>
    );
}

export default Editor;