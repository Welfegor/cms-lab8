const postRequest = (data, URL) => {
    fetch(URL, {
        method: "POST", body: JSON.stringify(data), headers: {'Content-Type': 'application/json'},
    }).then(() => console.log(data))
}

export default postRequest