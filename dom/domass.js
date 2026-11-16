// q1
// let heading=document.getElementById('heading');
// console.log(heading.innerText);

// let paragraph=document.getElementsByClassName('paragraph')
// for (const element of paragraph) {
//     console.log(element.innerHTML)
// }

// let buttton=document.getElementsByTagName('button')
// for (const element of buttton) {
//     console.log(element.innerHTML)
// }

// let containerfirst=document.querySelector('.container')
// console.log(containerfirst.innerHTML)

// let containers=document.querySelectorAll('.container')
// containers.forEach(element => {
//     console.log(element.innerHTML)
// });


//q2

// let heading=document.querySelector('h1')
// // console.log(heading.innerHTML)

// let paragraph=document.querySelector('p')
// // console.log(paragraph.innerHTML)

// let div=document.querySelector('div')
// // console.log(div.innerHTML)

// let firstbtn=document.getElementById('btn1')
// let secondbtn=document.getElementById('btn2')
// let thirdbtn=document.getElementById('btn3')


// firstbtn.addEventListener('click',(()=>{
//     let boldelement=document.createElement('i');
//     boldelement.textContent='thanks for clicking me'
// heading.innerText='hi i am heading ';

// heading.append(boldelement)
// }))

// secondbtn.addEventListener('click',(()=>{
//     paragraph.textContent='hi i am paragraph '
// }))

// thirdbtn.addEventListener('click',(()=>{
//     let h2=document.createElement('h2');
//     h2.textContent='hi i am new h2 '
//     let p=document.createElement('p')
//     p.textContent='hi i am new paragraph'
//     div.append(h2,p)

// }))

//q3

// let h1 = document.querySelector('h1')
// let p = document.querySelector('p')
// let span = document.querySelector('span')

// let newdiv = document.createElement('div');
// let btn1 = document.createElement('button');
// let btn2 = document.createElement('button');
// let btn3 = document.createElement('button');

// btn1.addEventListener('click', (() => {
//     console.log(h1.innerText)
//     console.log(p.innerText)
//     console.log(span.innerText)
//     newdiv.innerText = h1.innerText + " " + p.innerText + " " + span.innerText

// }))

// btn2.addEventListener('click', (() => {
//     console.log(h1.innerHTML)
//     console.log(p.innerHTML)
//     console.log(span.innerHTML)
//     newdiv.innerHTML = h1.innerHTML + " " + p.innerHTML + " " + span.innerHTML
// }))

// btn3.addEventListener('click', (() => {
//     console.log(h1.textContent)
//     console.log(p.textContent)
//     console.log(span.textContent)
//     newdiv.textContent = h1.textContent + " " + p.textContent + " " + span.textContent
// }))

// newdiv.append(btn1, btn2, btn3);
// document.body.append(newdiv)


// 1. Select the main container div
// const conDiv = document.querySelector('.con');

// // 2. Create three buttons and give them visible text labels
// const btn1 = document.createElement('button');
// btn1.textContent = 'Show innerText';

// const btn2 = document.createElement('button');
// btn2.textContent = 'Show textContent';

// const btn3 = document.createElement('button');
// btn3.textContent = 'Show innerHTML';

// // 3. Create a separate empty div to display the output
// const outputDiv = document.createElement('div');

// // 4. Add click events to read from conDiv and show it in outputDiv
// btn1.addEventListener('click', () => {
//     outputDiv.innerText = conDiv.innerText;
// });

// btn2.addEventListener('click', () => {
//     outputDiv.innerText = conDiv.textContent;
// });

// btn3.addEventListener('click', () => {
//     outputDiv.innerText = conDiv.innerHTML;
// });

// // 5. Add the buttons and the output div to the webpage
// document.body.append(btn1, btn2, btn3, outputDiv);


// q4

// const input = document.querySelector('input');
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');

// button
// .addEventListener('click', () => {

//     console.log(input.value)
//     if (input.value.trim() === '') return;


//     const li = document.createElement('li');

//     li.textContent = input.value;

//     ul.append(li);

//     input.value = '';
// });


// //chng , input


// //q5

// let div=document.querySelector('div')
// // console.log(div)
// let first=document.querySelector('#first')
// // console.log(first)
// let second=document.querySelector('#second')
// console.log(second)

// first.addEventListener('click',(()=>{
//     let heading=document.createElement('h1')
//     let paragraph=document.createElement('p')
//     heading.textContent='heading created'
//     paragraph.textContent='paragraph created'
//      // Inserts multiple elements in a single call
//     div.append(heading,paragraph) 

// }))

// second.addEventListener('click',(()=>{
//     let button=document.createElement('button')
//     button.textContent='button created'
//       // Uses appendChild() as required (accepts only 1 node)
//     div.appendChild(button)

// }))

//q6

// let h1 = document.querySelector('h1')
// let btn1 = document.querySelector('#one')
// let btn2 = document.querySelector('#two')
// let btn3 = document.querySelector('#three')
// let btn4 = document.querySelector('#four')

// btn1.addEventListener('click', (() => {
//     let paragraph = document.createElement('p');
//     paragraph.textContent = 'paragraph created'
//     h1.insertAdjacentElement("beforebegin", paragraph)
//     //add p before begin of h1 
// }))

// btn2.addEventListener('click', (() => {
//     let paragraph = document.createElement('p');
//     paragraph.textContent = 'paragraph created'
//     h1.insertAdjacentElement("afterbegin", paragraph)
//     // add p at a starting of h1 or in h1 container st line
// }))

// btn3.addEventListener('click', (() => {
//     let paragraph = document.createElement('p');
//     paragraph.textContent = 'paragraph created'
//     h1.insertAdjacentElement("beforeend", paragraph)
//     // add p at the end line of  h1 container or at the border of h1 
// }))

// btn4.addEventListener('click', (() => {
//     let paragraph = document.createElement('p');
//     paragraph.textContent = 'paragraph created'
//     h1.insertAdjacentElement("afterend", paragraph)
//     //add p after end of h1 box 
// }))


//q7

// let btn = document.querySelector('button');
// let savedHTML = document.querySelectorAll('p')


// btn.addEventListener('click', (() => {
//     let paragraphs = document.querySelectorAll('p')
//     if (paragraphs.length == 0) {
//         for (const element of savedHTML) {
//             btn.insertAdjacentHTML('beforebegin', element.outerHTML);
//         }

//         return alert('para is empty')


//     }
//     paragraphs[paragraphs.length - 1].remove()
// }))

//q8



