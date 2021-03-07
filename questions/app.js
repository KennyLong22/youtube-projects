const questions = document.querySelectorAll('.question');

questions.forEach(function(q) {
     const btn = q.querySelector('.question-btn');
     btn.addEventListener('click', function() {
         questions.forEach(function(item) {
            if (item !== q) {
                item.classList.remove('show-text');
            } else {
                q.classList.toggle('show-text');;
            }
         });        
     });
});



/* questionBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
}); */




/* for (let i = 0; i < questions.length; i++) {
    for (let j = 0; j < plusIcons.length; j++) {
        plusIcons[j].addEventListener('click', function() {
            if (j === i) {
                questions[i].classList.add('show-text');
            } 
        });
    } 
}

for (let i = 0; i < questions.length; i++) {
    for (let j = 0; j < minusIcons.length; j++) {
        minusIcons[j].addEventListener('click', function() {
            if (j === i) {
                questions[i].classList.remove('show-text');
            } 
        });
    } 
} */
