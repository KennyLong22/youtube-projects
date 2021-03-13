// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const grocery = document.getElementById('grocery');
const form = document.querySelector('.grocery-form');

const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');

const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-btn');

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);
// clear items
clearBtn.addEventListener('click', clearItems);

// ****** FUNCTIONS **********

function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    if (value) {
        const element = document.createElement('article');
        element.classList.add('grocery-item');
        element.innerHTML = `<p class="title">${value}</p>
                        <div class="btn-container">
                        <button type="button" class="edit-btn">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button type="button" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                        </div>`;
        list.appendChild(element);
        container.classList.add('show-container');
        grocery.value = '';
        
        const allEditBtns = document.querySelectorAll('.edit-btn');
        const allDeleteBtns = document.querySelectorAll('.delete-btn');

        allEditBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                grocery.value = btn.parentElement.parentElement.textContent;
            });
        });

        allDeleteBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                list.removeChild(btn.parentElement.parentElement);
                displayAlert('item removed', 'danger');
                grocery.value = '';
                if (list.children.length === 0) {
                    container.classList.remove('show-container');
                }
            });
        });
        displayAlert('added to list', 'success');
        // add to local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault();
    } else {
        displayAlert('please enter value', 'danger');
    }
}

// display alert
function displayAlert(text, color) {
    alert.textContent = text;
    alert.classList.add(`alert-${color}`);
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${color}`);
    }, 1500);
}

// set back to default
function setBackToDefault() {
    grocery.value = '';
    submitBtn.textContent = 'submit';
}

// clear items
function clearItems() {
    const allItems = document.querySelectorAll('.grocery-item');
    if (allItems.length > 0) {
        allItems.forEach((item) => {
            list.removeChild(item);
        });
        container.classList.remove('show-container');
        displayAlert('cleared items', 'danger');
        setBackToDefault();
    }
}


/* function addItem(e) {
    const value = grocery.value;
    e.preventDefault();
    if (value) {
        const item = document.createElement('article');
        item.innerHTML = `<p class="title">${value}</p>
                        <div class="btn-container">
                        <button type="button" class="edit-btn">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button type="button" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                        </div>`
        list.appendChild(item);
        container.classList.add('show-container');
        displayAlert('item added', 'success');
    } else if (!value) {
        displayAlert('item not added', 'danger');
    }
}

function displayAlert(text, color) {
    alert.textContent = text;
    alert.classList.add(`alert-${color}`);
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${color}`);
    }, 1500);
} */
