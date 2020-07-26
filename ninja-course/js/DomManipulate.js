var wrapper = document.getElementById('wrapper');

console.dir(window);

for(var prop in window){
    document.write(prop + " " + window[prop] + "<br>")
}


const heighWidth = wrapper.innerHTML += window.innerHeight + " " + window.innerWidth;
console.log(heighWidth);

wrapper.innerHTML += window.location;

//Opening and directioning
window.open('./events.html');


