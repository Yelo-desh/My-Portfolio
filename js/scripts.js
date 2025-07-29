  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        alert('Thank you for your message!');
        form.reset();
      } else {
        alert('Oops! There was a problem submitting your form');
      }
    });
  });