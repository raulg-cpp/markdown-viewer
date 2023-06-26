import './App.css';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import TextareaAutosize from 'react-textarea-autosize';

const DEFAULT_TEXT = "Enter __Markdown__!";

function App() {
	//=== State ===
	const [markdown, setMarkdown] = useState(DEFAULT_TEXT);
	
	// Functions
	const getText = (event) => { setMarkdown(event.target.value) };
	
		// Initial input value
	// eslint-disable-next-line
    useEffect( () => { 
    	document.getElementById("textArea").value = DEFAULT_TEXT;
    }, []); 

	//=== JSX ===
	return (
	<div className="App">
		{/* Input */}	
    	<div className="textInput">
    		<h3 className="title">Markdown Editor</h3>
    		<TextareaAutosize className="textArea" id="textArea" onChange={getText} />
    	</div>
    	
    	{/* Output */}
    	<section className="markdownOutput">
    		<h3 className="title">Preview</h3>
    		<ReactMarkdown className="render" children={markdown} remarkPlugins={[remarkGfm]}/>
    	</section>
	</div>
	);
}

export default App;
