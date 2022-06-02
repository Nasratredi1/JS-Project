document.addEventListener("DOMContentLoaded",function() {
    document.querySelector("button").onclick = count;   // if you write count()with parenthesis that run the count function right now on line two
    // but i don't want to run the count function now. i want to say when the button is clicked then run the function. mean prividing value for onClick
}); 
let counter = 0;  

function count(){
    counter++;
    document.querySelector("#counter").innerHTML = counter;// set its inner HTML to be whatever the current value of my counter
    

}

/*
Document.addEventListner is saying let's take the document, this web page,
and add event listner to it. 
and what event i'm listening for. I'm listnenig for special event called 
Dom Content loaded.

I'm saying is let's wait for all of the DOM to finish loading, when eveything done loading.
then run this function. the function that comes after it.

What is the meaning of of first few lines.
I only want it to run after the DOM is done loading. wait untill the whole page is 
done loading. and then run the javascript code.

In third line i can take a function and set it equal to some variable of some value.

In line 2 function function is actually being provided as an argument to add event listener.
this is a function that i'm saying, this is function that should run when the DOM content is loaded.
in otherword  this is just a function that's describing what code is going to run when the content is done loading


*/