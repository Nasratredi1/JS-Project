const questions = [
    {
        question: "What is Ahmad's favorite Book?",
        option: ["Maths", "phasics","islsmyat","calculus"],
        answer: "Maths"
    },
    {
        question: "What is 10 + 10 ?",
        option: ["8", "20","28","30"],
        answer: "20"
    },
    {
        question: "what is your qualification?",
        option: ["PHD","Master","undergraduate","college_Student"],
        answer: "undergradate"
    }
       

];

let question_number = 0;
let correct = 0;

document.addEventListener("DomContentLoaded", () => {
    load_question();
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

function load_question() {
    document.querySelector("#question").innerHTML = questions[question_number].question;
    const option = document .querySelector("#options");
    option.innerHTML = "";
    for(const option of questions[question_number].options){
        options.innerHTML += `<button class = "option">${option}</button>`
    }
    document.querySelectorAll(".option").forEach(option =>{
        option.onclick = () => {
            alert(option.textContent);
        }
    });
}