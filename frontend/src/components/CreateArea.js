import React,{useState} from 'react'

export default function CreateArea(props) {
    const [link, setLink] = useState({
        href:'',
        title:'',
        description:''
    })
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
        <div className='create-area-container'>
            <input
                className='create-area-title'
                onChange={handleChange}
                type='text'
                name='title'
                value={link.title}
                placeholder='Insert title here' />
            <input
                className='create-area-link'
                onChange={handleChange}
                type="text"
                name='href'
                value={link.href}
                placeholder='Insert link here' />
            <textarea
                className='create-area-description'
                onChange={handleChange}
                name='description'
                value={link.description}
                placeholder='give it description ' />
            <button
               className='create-area-button'
                onClick={handleClick}> 
                Add
            </button>
            
        </div>
    )
}