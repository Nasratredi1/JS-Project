const search = document.querySelector('.search')
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');


btn.addEventListener('click' , () => {
    search.classList.toggle('active')
    input.focus()

})


/*
var myElement = document.getElementById("myElementID");
myElement.classList.add("style1 style2");
myElement.classList.remove("style1 style2");

// .classList method returns an array of the classes attached to the element it is called with.
document.getElementById("myDIV").classList
// It returns
// [ 'className1', 'className2', ... ]

*/


