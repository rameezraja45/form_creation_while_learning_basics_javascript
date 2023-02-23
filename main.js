const ul = document.querySelector('.items');
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'World';
ul.lastElementChild.innerHTML = '<h1>Kem Cho!</h1>';
ul.firstElementChild.style.color = 'green';
ul.children[1].style.color = 'yellow';
ul.lastElementChild.style.color = 'red';

/* const btn = document.querySelector('.btn');
btn.addEventListener('click', (e)=> {
    e.preventDefault();
    document.querySelector('#my-form').style.background = 'yellow';
    document.querySelector('body').style.background = '#4C4646';
    console.log('click');
}); */

const btn1 = document.querySelector('.btn');
btn1.addEventListener('mouseover', (e)=> {
    e.preventDefault();
    document.querySelector('#my-form').style.background = 'green';
    document.querySelector('body').style.background = '#4C4646';
    console.log('mouseover');
});

const btn2 = document.querySelector('.btn');
btn2.addEventListener('mouseout', (e)=> {
    e.preventDefault();
    document.querySelector('#my-form').style.background = 'grey';
    document.querySelector('body').style.background = '#4C4646';
    console.log('mouseout');
});



// USER FORM SCRIPT
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    
    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = ' ';
    emailInput.value = ' ';
  }
}