// for one h1 tag.
// function hello() {
//     document.querySelector("h1").innerHTML = "Hello!";
// }
    // you can write somefunction like this
   // document.querySelector("name_of_id").innerHTML = "Hello!";
   // document.querySelector("name_of_class").innerHTML = "Hello!";

   /* 
   there is a two concept 
   1: is a eventListner when i click on a button that triggers an event , the click event
   and that's going to run the hello function

   2:concept of Dom Minipulation that i can select for part of the page get an element out
   of the page programmatically and update it's value.

   above statement of the code only change first h1 element

   assume if i have multiple h1 tag then for that i will used queryselectorAll like below
   and you have to save it to some variable b/c they return array of an element.
   and other words we want to save thats array in a variable whic is headings.

   for that we used a for loop which structure is below withing hello function
*/
function hello() {
    // don't write like that
    //document.querySelectorAll("h1").innerHTML = "Hello!";
   const headings = document.querySelectorAll("h1");
   for (const heading of headings){
       heading.innerHTML = "Hello!";
   }

}