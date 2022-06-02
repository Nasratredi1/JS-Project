// i want to separate function from previous code in counter1.js
// document.addEventListener("DOMContentLoaded",start); // mean when the DOM content is leaded run the start function

// function start(){
//     document.querySelector("button").onclick = count;   
// }

// or you can take full function and plug in to it. like below which is called anonymous function. No need to give a name to it.
 document.addEventListener("DOMContentLoaded", function (){  // when the dom content is loaded this is the function that you have to run
    document.querySelector("button").onclick = count;    // if you used more  id or class you can add it below (think about it.)
}); 


let counter = 0;  

function count(){
    counter++;
    document.querySelector("#counter").innerHTML = counter;// set its inner HTML to be whatever the current value of my counter
    

}

// you can write the above code in this way also if we create another anonymous function => 
// both working same but preferable to used above b/c we want that our code must be clean.
// let counter = 0;  
// document.addEventListener("DOMContentLoaded", function (){  // when the dom content is loaded this is the function that you have to run
//     document.querySelector("button").onclick = function(){
//         counter++;
//         document.querySelector("#counter").innerHTML = counter;
//     };    
// }); 


/*
Difference b/w query selector and event listner
Query selector is going to look throghout the page for an HTML element. and pick it out for me, give me that
HTML element so that I can do something with it , So that I can modify if, so that i can add properties to it.

Add event listner is going to take some element and it's going to wait for something to happen.
and when something happens, then it's going to run a function.

In this case, I'm taking the document - my whole web page adding an event listner, saying wait for all the content of thi
page to be done loading , and when it's done loading, run this function


*/