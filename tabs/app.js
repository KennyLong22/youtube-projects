const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const paragraphs = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach((btn) => {
            if (btn.dataset.id === id) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        paragraphs.forEach((paragraph) => {
            if (paragraph.id === id) {
                paragraph.classList.add('active');
            } else {
                paragraph.classList.remove('active');
            }
        });
    }
});

/* const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        // remove active class from all other buttons
        btns.forEach((btn) => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        // remove active class from all other article
        articles.forEach((article) => {
            article.classList.remove('active');
            if (article.id === id) {
                article.classList.add('active');
            }
        });
    }
}); */

