import React from 'react';
import { Card ,Button,Badge } from 'react-bootstrap';


export default function Link(props){
    
    function handleDelete() {
        props.delete(props.id)
    }
    return(
        <Card className="link-container">
            
            <Card.Title className="link-title"><a href={props.href}>{props.title}</a><Badge>Delete</Badge></Card.Title>
            {
                (props.description) ? <Card.Text className="link-description">{props.description}</Card.Text> : null
            }
            <Button
                variant="outline-info"
                size='sm'
                className="link-delete-button"
                onClick={handleDelete}>Delete
            </Button>
    
    </Card>)
            
}