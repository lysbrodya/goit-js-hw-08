import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('form');
let email = '';
let message = '';
const form = {};
// const emailLocal =
if (localStorage.getItem('feedback-form-state')) {
  feedbackForm.elements.email.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
  // const messageLocal =
  feedbackForm.elements.message.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
}

const emailLis = feedbackForm.addEventListener('input', el => {
  //   el.preventDefault();
  if (el.target.name === 'email') {
    if (el.data === null) {
      email = el.target.value;
    } else {
      email += el.data;
    }
  }
  if (el.target.name === 'message') {
    if (el.data === null) {
      message = el.target.value;
    } else {
      message += el.data;
    }
  }

  form.email = email;
  form.message = message;
  const formJs = JSON.stringify(form);
  throttle(localStorage.setItem('feedback-form-state', formJs), 500);
});

// localStorage.setItem('feedback-form-state', input.value);
feedbackForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.reset;
  feedbackForm.reset();
});
