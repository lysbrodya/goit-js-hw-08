import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const FEEDBACK_FORM = 'feedback-form-state';
const feedbackForm = {
  email: '',
  message: '',
};
if (localStorage.getItem(FEEDBACK_FORM)) {
  form.elements.email.value = JSON.parse(
    localStorage.getItem(FEEDBACK_FORM)
  ).email;
  // const messageLocal =
  form.elements.message.value = JSON.parse(
    localStorage.getItem(FEEDBACK_FORM)
  ).message;
}

form.addEventListener('input', throttle(emailLis, 500));

function emailLis(el) {
  const message = el.target.value;
  if (el.target.name === 'email') {
    feedbackForm.email = message;
    feedbackForm.message = form.elements.message.value;
    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(feedbackForm));
  } else {
    feedbackForm.message = message;
    feedbackForm.email = form.elements.email.value;
    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(feedbackForm));
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(FEEDBACK_FORM)));
  localStorage.clear();
  form.reset();
});
