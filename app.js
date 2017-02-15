const toggleList = document.getElementById('toggleList');

const listDiv = document.querySelector('.list');

const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton= document.querySelector('button.description');
const addItemInput = document.querySelector('input.addIteminput');
const addItemutton = document.querySelector('button.addItemButton');

toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {

        toggleList.textContent = 'Hide List';
        listDiv.style.display = 'block';
    } else {

        toggleList.textContent = 'Show List';
        listDiv.style.display = 'none';
    }

});

descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
});

p.title = "List description";

addItemutton.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = addItemInput.value;

});



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
