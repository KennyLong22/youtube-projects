const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('button');
const span = document.querySelector('span');
const body = document.body;
btn.addEventListener('click', function() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = color;
    span.textContent = color;
})
