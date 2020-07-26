const getTodos = callbackFunction => {
  const request = new XMLHttpRequest()
  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const convertJSON = JSON.parse(request.responseText)
      callbackFunction(undefined, data)
    } else if (request.readyState === 4) {
      callbackFunction('Could not fetch data', undefined)
    }
  })

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
  request.send()
}

getTodos((err, data) => {
  console.log('callback fired')
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
