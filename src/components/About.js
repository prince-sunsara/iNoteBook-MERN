import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/NoteContext'

export default function About() {
  const data = useContext(noteContext);
  useEffect(() => {  
    data.update()
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>This is about {data.state.name} and he is in class {data.state.class}</div>
  )
}
