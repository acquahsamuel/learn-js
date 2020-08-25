// Promose is a method
const willGetYouADogProme = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5) {
                resolve();
            } else {
                reject();
            }
        }, 5000)

    })
}


willGetYouADogProme().then(() => {
    console.log('Hello i have dog now frrom promise');
}).catch(() =>{
    console.log('ops sorry do rejected at port');
})







