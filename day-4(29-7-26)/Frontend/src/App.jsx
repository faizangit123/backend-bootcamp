import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
  const [notes, setNotes] = useState([
  {
    title:"test title 1",
    description:"test description 1"
  },
  {
    title:"test title 2",
    description:"test description 2"
  },
  {
    title:"test title 3",
    description:"test description 3"
  }
])
  useEffect(()=>{
    axios.get('http://localhost:3000/api/notes')
  .then((res)=>{
    console.log(res.data.notes)
    setNotes(res.data.notes)
  })
  .catch((err)=>{
    console.log(err)
  })
  },[])
  return (
    <>
    <div className="notes">
    {
      notes.map((note)=>{                       // i use to use elem
        return <div key={note._id} className="note">
        <h1>{note.title}</h1>
        <p>{note.description}</p>
      </div>
      })
    }
    </div>
    </>
  )
}

export default App