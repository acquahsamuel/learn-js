// HTML template Quiz
const content = document.querySelector('.content');
const people = ['James', 'Alex', 'Eruc'];
people.forEach(person => {
    content.innerHTML += `<div class="media"><div class="media-left">
    </div>
     <div class="media-body">
       <h4 class="media-heading"> ${person} </h4>
        <p> I am a programmer in the making wait for me </p>
    </div>
  </div>`;
});