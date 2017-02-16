const toggleList = document.getElementById('toggleList');

const listDiv = document.querySelector('.list');

const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton= document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

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
    descriptionP.title = "List description";
});



addItemButton.addEventListener('click', () => {

    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value= '';
});

removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
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
