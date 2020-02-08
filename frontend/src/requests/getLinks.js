const endpoint = '/api/links'

export default function getLinks() {
    //returns a promise to fetch links
    console.log('get request ')
    return    fetch(endpoint,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }).then(res=>res.json())

}