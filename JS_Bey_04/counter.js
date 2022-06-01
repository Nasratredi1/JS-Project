let counter = 0;  // b/c it's mutable the value is going to changed.

function count(){
    // you can write increase value of count like this: count = counter + 1; or counter += 1; but simplest is below
    counter++;
    // get the thing that has the id of counter
    document.querySelector("#counter").innerHTML = counter;// set its inner HTML to be whatever the current value of my counter
    //console.log ("button is clicked");

}

/*
I'm defaining a variable on line one, let counter equal to 0, 
using let not const because the value of counter's going to change.
i want to update the value of counter throughout this program. Then I have
a function which is going actually do the counting.and increment the value of the variable
and then manipulate the DOM, updates the contents of the actual page. to reflect whatever the 
value of the variable is. 

QuerySelctor for the id is always one b/c it's unique.

* You can used getElementById also.
*/