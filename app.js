const toggleList = document.getElementById('toggleList');

const listDiv = document.querySelector('.list');

const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button= document.querySelector('button');


toggleList.addEventListener('click', () => {
    listDiv.style.display = 'none';

});

button.addEventListener('click', () => {
    p.innerHTML = input.value + ':';
});

p.title = "List description";


/*above is the EMCA6 syntax for anonymous function*/
// button.addEventListener('click', function() {
//     p.innerHTML = input.value + ':';
// });
//
//
// function myFunction() {
//     p.innerHTML = input.value + ':';
// }
// button.addEventListener('click', myFunction());
