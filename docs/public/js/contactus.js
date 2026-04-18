document.addEventListener('submit', async function (event) {
    if (event.target && event.target.id === 'contactForm') {
        event.preventDefault();
        debugger;

        const submitButton = document.getElementById('contactUsSubmitButton');
        const spinner = document.getElementById('contactUsSpinner');
        const submitText = document.getElementById('contactUssubmitText');

        submitButton.disabled = true;
        submitText.classList.add('d-none');
        spinner.classList.remove('visually-hidden');

        const response = await sendEmail(
            'service_iyc6oig',
            'template_qu001qo',
            'HZlDXrhR3PqDqQJuW',
            {
                title: "test",
                name: document.getElementById('name').value,
                message: document.getElementById('description').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value
            }
        );

        spinner.classList.add('visually-hidden');
        submitButton.disabled = false;
        submitText.classList.remove('d-none');

        if (response.ok === true) {


            $.alert({
                title: 'Success!',
                type: 'green',
                content: '<div class="custom-alert-content">Thank you! We will contact you shortly to confirm the details.</div>',
            });

        
            $('[data-bs-dismiss="modal"]').trigger("click");

            // Clear form
            document.getElementById('contactForm').reset();
        }
    }
});