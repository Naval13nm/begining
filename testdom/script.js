
let ul = document.getElementById('ul');

let validmess = document.getElementById('validmess');

let input = document.getElementById('inp');

input.addEventListener('change', ((x) => {

    let inputValue = x.target.value.trim();
    if (inputValue == 0) {
        console.log('empty task')
        alert('empty task')
        validmess.innerText = 'empty task entered';
        return;

    }
    validmess.innerText = '';

    let createlist = document.createElement('li');
    //giving id to list 
    createlist.classList.add('list');
    //to add if removed or if removed then add use toggle
    // createlist.classList.toggle('list');

    //to remove clss
    // createlist.classList.remove('list');

    let taskText = document.createElement('span');
    taskText.innerText = inputValue;


    let stbtn = document.createElement('button')

    stbtn.innerText = 'start';

    stbtn.addEventListener('click', function () {
        taskText.style.color = 'green'

    })


    let clsbtn = document.createElement('button')

    clsbtn.innerText = 'end';

    clsbtn.addEventListener('click', function () {
        createlist.remove()

    })


    createlist.append(taskText, stbtn, clsbtn);
    ul.append(createlist);



    x.target.value = '';
}))