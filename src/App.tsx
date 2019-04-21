import React, { Component } from "react";
import "./App.css";
import { Editor } from "./editor";

class App extends Component {
  public render(): React.ReactNode {
    return (
      <div className="App">
        <header className="App-header">
          <Editor />
        </header>
      </div>
    );
  }
}

export default App;
