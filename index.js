const submitData = (userName, userEmail) => {
    const url = "http://localhost:3000/users"
    const htmlBody = document.querySelector('body')
    
    let data = {
        name: userName,
        email: userEmail
    }

    let configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }

    return fetch(url, configurationObject)
    .then(resp => resp.json())
    .then(json => {
        htmlBody.append(json.id)
    })
    .catch( error => {
        htmlBody.append(error.message)
    })
}