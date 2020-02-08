import React from 'react';

export default function Link(props){
    
    function handleDelete() {
        props.delete(props.id)
    }
    return(
    <div className="link-container">
        <p className="link-title"><a href={props.href}>{props.title}</a></p>
            {
                (props.description) ? <p className="link-description">{props.description}</p> : null
            }
            <button className="link-delete-button" onClick={handleDelete}>Delete</button>
    
    </div>)
            
}