import { useState } from 'react'
import NoteContext from './NoteContext'


const NoteState = (props) => {
    const initialNotes = [
        {
          "_id": "64f176383999d43c388227c1",
          "user": "64eecd531ced76507b124ae7",
          "title": "Prince",
          "description": "The briliant engineer",
          "tag": "personal",
          "date": "2023-09-01T05:27:20.858Z",
          "__v": 0
        },
        {
          "_id": "64f1776b3999d43c388227c3",
          "user": "64eecd531ced76507b124ae7",
          "title": "Rigveda",
          "description": "The Rigveda Samhita is the oldest extant Indic text.",
          "tag": "ancient history",
          "date": "2023-09-01T05:32:27.709Z",
          "__v": 0
        },
        {
          "_id": "64f176383999d43c388227c1",
          "user": "64eecd531ced76507b124ae7",
          "title": "Prince",
          "description": "The briliant engineer",
          "tag": "personal",
          "date": "2023-09-01T05:27:20.858Z",
          "__v": 0
        },
        {
          "_id": "64f1776b3999d43c388227c3",
          "user": "64eecd531ced76507b124ae7",
          "title": "Rigveda",
          "description": "The Rigveda Samhita is the oldest extant Indic text.",
          "tag": "ancient history",
          "date": "2023-09-01T05:32:27.709Z",
          "__v": 0
        },
        {
          "_id": "64f176383999d43c388227c1",
          "user": "64eecd531ced76507b124ae7",
          "title": "Prince",
          "description": "The briliant engineer",
          "tag": "personal",
          "date": "2023-09-01T05:27:20.858Z",
          "__v": 0
        },
        {
          "_id": "64f1776b3999d43c388227c3",
          "user": "64eecd531ced76507b124ae7",
          "title": "Rigveda",
          "description": "The Rigveda Samhita is the oldest extant Indic text.",
          "tag": "ancient history",
          "date": "2023-09-01T05:32:27.709Z",
          "__v": 0
        },
      ]
      const [notes, setNotes] = useState(initialNotes)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;
