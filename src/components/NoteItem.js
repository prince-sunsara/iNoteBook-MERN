import React from 'react'

function NoteItem(props) {
    const { note } = props;
    return (
        <div className='col-md-3 my-3'>
            <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        
                    </div>
            </div>
            
            
        </div>
    )
}

export default NoteItem