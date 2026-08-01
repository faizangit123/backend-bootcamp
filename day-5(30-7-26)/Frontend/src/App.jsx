import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);

  function fetchNote() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      console.log(res.data.notes); // just log res first then see what you get then . it
      setNotes(res.data.notes);
    });
  }

  useEffect(() => {
    fetchNote();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // const title = e.target.title.value;                     // form handling withoout usestate
    // const description = e.target.description.value;
    const { title, description } = e.target.elements; // with destructure
    console.log(title.value, description.value);
    // console.log(title,description);
    axios
      .post("http://localhost:3000/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        console.log(res.data);
        fetchNote(); // now it will show in ui when i created note
      }); // POST ask for what you need to send in req.body
    e.target.reset(); // it will reset the input fild
  }
  function handleDeleteNote(noteId) {
    console.log(noteId);
    axios.delete(`http://localhost:3000/api/notes/${noteId}`)
    .then((res) => {
      console.log(res.data);
      fetchNote();
    })
    .catch((err) => {
      console.log(err);
    });
  }
  // function handlePatchNote(noteId){

  // }

  return (
    <>
      <form className="note-create-form" onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Enter the title" />
        <input
          name="description"
          type="text"
          placeholder="Enter the description"
        />
        <button>Create note</button>
      </form>
      <div className="notes">
        {notes.map((note, _id) => {
          return (
            <div key={_id} className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={() => handleDeleteNote(note._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
