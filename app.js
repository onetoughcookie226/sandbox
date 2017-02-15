const toggleList = document.getElementById('toggleList');

const listDiv = document.querySelector('.list');

const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button= document.querySelector('button.description');


toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {

        toggleList.textContent = 'Hide List';
        listDiv.style.display = 'block';
    } else {

        toggleList.textContent = 'Show List';
        listDiv.style.display = 'none';
    }

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
