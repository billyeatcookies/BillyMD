import './App.css';
import SplitPane from 'react-split-pane';
import React, { Component } from 'react';
import Editor from './editor.js';
import ReactMarkdown from 'react-markdown';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      markdownSrc: "# Hello World"
    }
    this.onMarkdownChange = this.onMarkdownChange.bind(this);
  }

  onMarkdownChange(md) {
    this.setState(
      {
        markdownSrc: md
      }
    );
  }

  render() {
    return (
      <div className="App">
        <SplitPane split="vertical" defaultSize="50%">
          <div className="editor-pane">
            <Editor className="editor" value={this.state.markdownSrc} onChange={this.onMarkdownChange} />
          </div>
          <div className="view-pane">
            <ReactMarkdown className="result" source={this.state.markdownSrc} />
          </div>
        </SplitPane>
      </div>
    );
  }
}

export default App;
