const endPoint='/api/links'

export default function addLink(link) {
    console.log('add links called')
    fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify(link)
    })
    .then((response) => { console.log(response) })
    .catch((err)=>{console.log(err)})
}