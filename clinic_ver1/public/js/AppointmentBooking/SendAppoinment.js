document.addEventListener('submit', async function (event) {

    if (event.target && event.target.id === 'AppoinmentBooking') {

        event.preventDefault();

        const appointmentForm = event.target;

        const submitButton = document.getElementById('btnAppoinmentBooking');
        const spinner = document.getElementById('AppoinmentSpinner');
        const submitText = document.getElementById('AppoinmentSpinnerSubmitText');

        submitButton.disabled = true;
        submitText.classList.add('d-none');
        spinner.classList.remove('visually-hidden');

        var response = await sendEmail(
            'service_iyc6oig',
            'template_bhljqhx',
            'HZlDXrhR3PqDqQJuW',
            {
                name: document.getElementById("Name").value,
                mobileNumber: document.getElementById("MobileNumber").value,
                date: document.getElementById("AppintmentDate").value,
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

            Appcommon.ClearForm(appointmentForm);
            $('[data-bs-dismiss="modal"]').trigger("click");
        }
    }
});