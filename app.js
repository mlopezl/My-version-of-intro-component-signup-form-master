const form = document.getElementById('form');
const inputs = document.querySelectorAll('.input');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let validSubmit = true;

    inputs.forEach(input => {
        const p = input.parentElement.nextElementSibling;
        const icon = input.nextElementSibling;

        if (input.value.trim() === '') {
            input.classList.add('input__error');
            if (input.type === 'email') {
                input.setAttribute('placeholder', 'example@email.com');
            } else {
                input.removeAttribute('placeholder');
            }
            icon.classList.remove('text__hide');
            p.classList.remove('text__hide');
            validSubmit = false;
        } else {
            input.classList.remove('input__error');
            icon.classList.add('text__hide');
            p.classList.add('text__hide');
        }
    });

    if (validSubmit) {
        form.submit();
    }
});
