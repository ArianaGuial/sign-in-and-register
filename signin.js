document.getElementById('signin-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formFields = document.querySelectorAll('#signin-form input[required]');
    let allFieldsFilled = true;

    formFields.forEach((field) => {
        if (!field.value.trim()) {
            allFieldsFilled = false;
            field.style.border = '1px solid red'; 
        } else {
            field.style.border = '';
        }
    });

    const errorMessage = document.getElementById('error-message');
    if (!allFieldsFilled) {
        errorMessage.style.display = 'block'; 
    } else {
        errorMessage.style.display = 'none'; 
        
        setTimeout(() => {
            window.location.href = 'materials.html'; 
        }, 1000);
    }
});