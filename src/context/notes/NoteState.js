import { useState } from 'react'
import NoteContext from './NoteContext'


const NoteState = (props) => {
    const s1 = {
        "name": "Prince",
        "class": "a1"
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Ravan",
                "class": "a2"
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;
