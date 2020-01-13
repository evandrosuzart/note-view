import React from "react";

import api from "./services/api";

import NoteList from "./components/NoteList";
import NewNote from "./components/NewNote";
class App extends React.Component {
  state = {
    notes: null
  };

  componentDidMount() {
    const { notes } = this.state;
    if (!notes) {
      api.get("/notes").then((suss, fail) => {
        this.setState({ notes: suss["data"]["docs"] });
      });
    }
  }

  render() {
    const { notes } = this.state;

    return (
      <div className="App">
        <NewNote />
        <NoteList notes={notes} />
      </div>
    );
  }
}

export default App;
