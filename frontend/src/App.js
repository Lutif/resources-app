import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateArea from './components/CreateArea';
import Link from './components/Link';

import saveLinkdb from './requests/addLink';
import getLinks from './requests/getLinks';

import deleteLinkdb from './requests/deleteLink';


export default function App() {
    const [links,setLinks]=useState([])

    useEffect(() => {
            getLinks()
                .then(list => {
                console.log(list)
                setLinks([...list])
            })
            .catch(err=>console.log(err))
    },[])
    function addLink(link) {
        setLinks((prev) => [...prev, link])
        saveLinkdb(link)
    }

    function deleteLink(id) {
        // console.log("in frontend delete function id is",id)
        deleteLinkdb(id)
            .then(linksList => {
            setLinks([...linksList])
        })
    }
    
    return (
        <div>
            <h1>Keep Rresouces for later refrence</h1>
            <CreateArea addLink={addLink}/>
            {links.map(link => <Link
                id={String(link._id)}
                key={String(link._id)}
                href={link.href}
                title={link.title}
                description={link.description}
                delete={deleteLink}
            />
            )
            }
            
        </div>)
}