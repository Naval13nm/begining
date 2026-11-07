// let ans=document.getElementById('hh')
// console.log(ans.innerText)
// console.log(ans.innerHTML)     //chnge inner html and add content
// ans.innerHTML=`<h1>hi</h1>`;
// console.log(ans.in)
// console.log(ans.innerText)    //chng inner text not html same for text content
// console.log(ans.textContent)

let ullist = document.createElement("ul")
console.log(ullist)

let list1 = document.createElement('li')
// console.log(list1)
list1.innerHTML = 'first element 1'

let list2 = document.createElement('li')
// console.log(list2)
list2.innerHTML = 'first element 2'

let list3 = document.createElement('li')
list3.innerHTML = 'first element 3'

ullist.append(list1)
// console.log(ullist)
ullist.append(list2)
ullist.appendChild(list3)
console.log(ullist)


let list4 = document.createElement('li')
list4.innerHTML = 'first element 4'

// ullist.insertAdjacentElement("afterbegin",list4)    //add just st of ul
// ullist.insertAdjacentElement("beforebegin",list4)
// ullist.insertAdjacentElement("beforeend",list4)   //add just before end of ul 

// ullist.insertAdjacentElement("afterend", list4)

let showdata = document.getElementById('showdata')
showdata.append(ullist)

let a = document.querySelector('a');   //new latest approch to select 
a.setAttribute('href', 'https://google.com')  //set attribute val
console.log(a.getAttribute('href'))   //give attribute value


// a.remove();

list1.style.background = 'yellow'
list1.style.margin = '50px'
list1.style.color = 'red'

list2.style.cssText = 'background:blue;color:pink;border:5px solid brown'


let classlistuse = document.getElementById('classliststudy')
console.log(classlistuse)

//add class 
classlistuse.classList.add('class1')
//    hide class act as on off button
classlistuse.classList.toggle('class1')
// remove clss       
classlistuse.classList.remove('class1')


let clasnameuse = document.querySelector('p')
console.log(clasnameuse)
//gets all clss avl in p
console.log(clasnameuse.className)
//to add more clss in p but below will overwrite prev clss so we will do 
// clasnameuse.className='5'
//this will work add prev clss with new which you wants to add
clasnameuse.className = clasnameuse.className + ' 5'
console.log(clasnameuse)
console.log(clasnameuse.className)


//event listener
// 1. Start button function (turns CSS ON)
function btn(){
    button.style.background = 'red';
    button.style.padding = '50px';
}

let button = document.getElementById('btn');
button.addEventListener('click', btn); // Leaves this connection active permanently

let cancelbutton = document.getElementById('cancelbtn');

// 2. Cancel button (only turns CSS OFF, doesn't break the Start button)
cancelbutton.addEventListener('click', () => {
    button.style.background = '';
    button.style.padding = '';
});

let inputtext = document.getElementById('input');
let inputtextdatashow=document.getElementById('showdt');

//get chnge auto 
inputtext.addEventListener('input', ((e) => console.log(e.target.value)))
//when we move cursor then give final chng only

inputtext.addEventListener('change', ((e) => {
    console.log(e.target.value)
    inputtextdatashow.innerText=e.target.value;
    inputtextdatashow.append(inputtextdatashow)
    
}))






