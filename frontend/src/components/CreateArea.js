import React,{useState} from 'react'
import { Collapse, Form ,Button} from 'react-bootstrap';

export default function CreateArea(props) {
    const [link, setLink] = useState({
        href:'',
        title:'',
        description:''
    })
    const [expand, setExpand] = useState(false);
    function handleChange(event) {
        const { name, value }=event.target
        setLink((prev)=>({
            ...prev,
            [name]:value
        })
        )}

    function handleClick(){
        props.addLink(link)
    }

    return (
        <Form className='create-area-container'>
            <Form.Control
                onFocus={() => setExpand(true)}
                className='create-area-title'
                onChange={handleChange}
                type='text'
                name='title'
                value={link.title}
                placeholder='Insert title here' />
            <Collapse in={expand}>
            <Form.Group >
            <Form.Control
                className='create-area-link'
                onChange={handleChange}
                type="text"
                name='href'
                value={link.href}
                placeholder='Insert link here'/>
                    
            <Form.Control
                as='textarea'
                className='create-area-description'
                onChange={handleChange}
                name='description'
                value={link.description}
                placeholder='give it description ' />
            <Button
               className='create-area-button'
                onClick={handleClick}> 
                Add
            </Button>
            </Form.Group>
            </Collapse>
        </Form>
    )
}