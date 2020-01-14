import React from "react";

import api from "./services/api";

import Paginator from "./components/Paginator";
import NoteList from "./components/NoteList";
import NewNote from "./components/NewNote";

class App extends React.Component {
  state = {
    notes: null,
    page: 1,
    pages: 0,
    total: 0
  };

  componentDidMount() {
    const { notes, page } = this.state;
    if (!notes) {
      api.get(`/notes?page=${page}`).then((suss, fail) => {
        this.setState({
          notes: suss["data"]["docs"],
          pages: suss["data"]["pages"],
          total: suss["data"]["total"]
        });
      });
    }
  }

  handleReloadPage = page => {
    api.get(`/notes?page=${page}`).then((suss, fail) => {
      this.setState({
        notes: suss["data"]["docs"],
        pages: suss["data"]["pages"],
        page: suss["data"]["page"],
        total: suss["data"]["total"]
      });
    });
  };

  handleReload = () => {
    const { page } = this.state;

    api.get(`/notes?page=${page}`).then((suss, fail) => {
      this.setState({
        notes: suss["data"]["docs"],
        pages: suss["data"]["pages"],
        page: suss["data"]["page"],
        total: suss["data"]["total"]
      });
    });
  };

  handleDeleteNote = id => {
    api.delete(`/notes/${id}`).then((suss, fail) => {
      this.handleReload();
    });
  };

  handleSubmit = bodyRequest => {
    api.post("/notes", bodyRequest).then((suss, fail) => {
      console.log(suss);
      this.handleReload();
    });
  };

  handleSaveUpdateNote = note => {
    console.log(note);
    api.put(`/notes/${note._id}`, note);
    this.handleReload();
  };

  handleUpdateNotes = notes => {
    this.setState({ notes });
  };

  handleChangeDescription = (description, index) => {
    const { notes } = this.state;
    notes[index].description = description;
    this.setState({ notes });
  };

  handleChangeTitle = (title, index) => {
    const { notes } = this.state;
    notes[index].title = title;
    this.setState({ notes });
  };

  handleChangePage = page => {
    this.setState(prevState => {
      if (page !== prevState.page) {
        return { page };
      }
    });

    this.handleReloadPage(page);
  };

  render() {
    const { total, notes, page, pages } = this.state;

    return (
      <div className="App">
        <NewNote handleSubmit={this.handleSubmit} />
        <NoteList
          notes={notes}
          handleDelete={this.handleDeleteNote}
          handleSaveUpdateNote={this.handleSaveUpdateNote}
          handleUpdate={this.handleUpdateNotes}
          handleChangeDescription={this.handleChangeDescription}
          handleChangeTitle={this.handleChangeTitle}
          handleReloadAllNotes={this.handleReload}
        />
        <Paginator
          pages={pages}
          page={page}
          total={total}
          onChangePage={this.handleChangePage}
        />
      </div>
    );
  }
}

export default App;
