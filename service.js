document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll('.service');
    
    services.forEach(service => {
        const image = service.querySelector('.service-image');
        
        service.addEventListener('mouseenter', function () {
            image.style.filter = 'blur(0)';
        });
        
        service.addEventListener('mouseleave', function () {
            image.style.filter = 'blur(10px)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
const signupForm = document.getElementById('signupForm');
const serviceNameInput = document.getElementById('serviceName');
const emailInput = document.getElementById('email');
const validationMessage = document.getElementById('validationMessage');

signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const selectedService = serviceNameInput.value;

    if (validateEmail(emailInput.value)) {
        alert('Successful');
        signupForm.reset();
        validationMessage.textContent = '';
    } else {
        validationMessage.textContent = 'Something went wrong';
    }
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
});
