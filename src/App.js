import React, { useState } from 'react';
import Container from './components/Container';
import Editor from './components/Editor';

import './App.css';
import { EditorContainer, PreviewContainer } from './components/AppStyled';
import Preview from './components/Preview';

function App() {
  const [text, setText] = useState('# Ola');
  return (
    <Container>
      <EditorContainer>
        <Editor text={text} setText={setText}/>
      </EditorContainer>
      <PreviewContainer>
        <Preview text={text}/>
      </PreviewContainer>
    </Container>
  );
}

export default App;
