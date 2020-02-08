const endpoint = '/api/links'

export default function deleteLink(id){
    const promise =fetch(endpoint, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({id:id})
    }).then(res=>res.json())
return promise
}