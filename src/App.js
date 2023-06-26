import './App.css';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const DEFAULT_TEXT = "Enter __Markdown__!";

function App() {
	//=== State ===
	const [markdown, setMarkdown] = useState(DEFAULT_TEXT);
	
	// Functions
	const getText = (event) => { 
		let value = event.target.value;
		if( value === "" ) {
			setMarkdown(DEFAULT_TEXT);
		} else {
			setMarkdown(event.target.value) 
		}
	};
	
		// Initial value
	// eslint-disable-next-line
    useEffect( () => { 
    	document.getElementById("textArea").value = DEFAULT_TEXT;
    }); 

	//=== JSX ===
	return (
	<div className="App">
		{/* Input */}	
    	<form className="textInput shadow">
    		<h3 className="title">Markdown Editor</h3>
    		<textarea id="textArea" onChange={getText}></textarea>
    	</form>
    	
    	{/* Output */}
    	<section className="markdownOutput shadow">
    		<h3 className="title">Preview</h3>
    		<ReactMarkdown className="render" children={markdown} remarkPlugins={[remarkGfm]}/>
    	</section>
	</div>
	);
}

export default App;
