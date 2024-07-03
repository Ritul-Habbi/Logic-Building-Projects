//! traversing the dom

// let btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) => {
//     btn.addEventListener("click", function (e) {
//         console.log(e.currentTarget.parentElement.parentElement);
//         let main = e.currentTarget.parentElement.parentElement
//         main.classList.toggle("show-text");

//     });
// });

//!using selectors inside the element
//? A fully Functional Accordion 

let questions = document.querySelectorAll(".question");

questions.forEach(question => {
    let btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function () {
        questions.forEach(function(item) {
            if (item!==question) {
                item.classList.remove("show-text")
            }
        });
        question.classList.toggle("show-text")
    });
});
