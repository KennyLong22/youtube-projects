let counter = 0;

const value = document.querySelector('#value');
const allBtns = document.querySelectorAll('.btn');

allBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const className = e.currentTarget.classList;
        if (className.contains('decrease')) {
            counter--;
        } else if (className.contains('reset')) {
            counter = 0;
        } else if (className.contains('increase')) {
            counter++;
        }
        value.textContent = counter;
        if (counter < 0) {
            value.style.color = 'red';
        } else if (counter === 0) {
            value.style.color = '#444';
        } else if (counter > 0) {
            value.style.color = 'green';
        }
    })
})



