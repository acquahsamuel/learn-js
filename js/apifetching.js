// fetch('json/home.json').then((response) => {
//     console.log('resolved', response);
//     return response.json();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected', err);
// });


// Using Asyn and await
const getTodo = async () => {

    const apiURL = await fetch('json/home.json');

    if (apiURL.status !== 200) {
        throw new Error('Cannot fetch Data');
    }

    const resultOfApi = await apiURL.json();
    return resultOfApi;

}

getTodo()
    .then(resultOfApi => console.log('resolved', resultOfApi))
    .catch(err => console.log('rejected', err.message));
