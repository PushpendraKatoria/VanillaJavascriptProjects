//using selectors inside the element

const questions = document.querySelectorAll('.question')

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', function() {
        questions.forEach(function(q) {
            if(question !== q)
            q.classList.remove('show-text')
        })
        question.classList.toggle('show-text')
    })
})


// travserser the dom

// const qButton  = document.querySelectorAll('.question-btn');

// qButton.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         console.log(e.currentTarget.parentElement);
//         const question  = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text')
//     })
// })