import './App.css';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown'

function App() {
	//=== State ===
	const [markdown, setMarkdown] = useState("Enter __Markdown__!");
		
	//=== JSX ===
	return (
	<div className="App">
    	<h1 className="title">Markdown Preview</h1>
	
    	<form className="textInput shadow">
    		<textarea></textarea>
    		<input className="btn btn-secondary" type="submit" value="Submit"/>
    	</form>
    	
    	<section className="markdownOutput shadow">
    		<ReactMarkdown children={markdown} />
    	</section>
	</div>
	);
}

export default App;
