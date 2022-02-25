fetch('urlEndpoing').then((response) => {
    if (!response.ok)
        // New Error has access to the catch error down
        throw new Error(`Status Code Error `, response.status);

    response.json().then((data) => {
        for (let planet of data.results) {
            console.log(planet.name);
        }
    })
}).catch((error) => {
    console.log('Something went wrong with fetch');
    console.log('Error Code');
});

