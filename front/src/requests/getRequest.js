const getRequest = (defaultData, setData, URL) => {
    setData(defaultData)
    fetch(URL, {
        method: "GET", headers: {'Content-Type': 'application/json'},
    }).then((req) => req.json())
      .then((req) => { try {setData(req.reverse())} catch {setData(req)} }) 
}

export default getRequest