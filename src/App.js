import Markdown from "marked-react";
import React from 'react';
import { useState, useEffect } from "react";

<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/10.0.0/marked.min.js" integrity="sha512-EjCqglelq9tO9KdT2iRYtcj19Q8sSXblMy+5SBfogeh5TvLwmRh9dz5l1uEwNO40/cZInZsr3jti2JCNMZJsng==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
const defaultMarkdown = `# React Markdown Previewer

## Type your Markdown in the Editor!

### Main functionality

- Preview window updates real time with markdown syntax
- The editor has some predefined input on page load


\`Is the syntax highlighting even working?\`
\`\`\`javascript
let s = "JavaScript syntax highlighting";
alert(s);
\`\`\`


> “If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.”
― Marcus Aurelius, Meditations 


![react logo](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)

Coded by Anas
`;



export default function App() {

  let localValue = JSON.parse(localStorage.getItem('TEXT'))
  if (localValue == null) {localValue = defaultMarkdown}
  const [text, setText] = useState(localValue)

  useEffect(()=>{localStorage.setItem('TEXT', JSON.stringify(text))}, [text])

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Markdown Previewer</h1>
        <textarea id='editor' placeholder="Enter text here..." value={text} onChange={e => setText(e.target.value)}/>
        <div id='preview'><Markdown>{text}</Markdown></div>
      </div>
      
    </div>
  )
}
