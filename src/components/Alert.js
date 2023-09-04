import React from 'react'

export default function Alert(props) {
    // const capitalize = (word) => {
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
    return (
        <div style={{height: '60px'}}>
            {props && <div className={`alert alert-primary alert-dismissible fade show`} role="alert">
                {props.message}
            </div>}
        </div>
    )
}
    // )<strong>{capitalize(props.alert.type)}</strong>: 
// }${props.alert.type}