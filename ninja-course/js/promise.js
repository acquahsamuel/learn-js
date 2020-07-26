const getoTods = function (resource) {

    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('error getting the resource');
            }
        });

        request.open('GET', resource);
        request.send();
    });
};


console.log("Promise Chaining ");

getoTods('json/home.json').then(data => {
    console.log('promise resolved ', data);
    return getoTods('json/index.json');
}).then((data) =>{
    console.log('Promise 2 resolved', data);
    return getoTods('json/users.json');
}).then((data) =>{
    console.log('promise 3 resolved' , data);
}).catch((err) => {
    console.log('promise rejected', error);
});

