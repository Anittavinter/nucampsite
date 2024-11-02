document.addEventListener('DOMContentLoaded', function () {
    // Get the reservation form
    const reserveForm = document.getElementById('reserveForm');

    // Add event listener to the form
    reserveForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Gather form data
        const numCampers = reserveForm.numCampers.value;
        const date = reserveForm.date.value;

        // Perform validation (example: check if fields are empty)
        if (numCampers === 'Select...' || !date) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate a successful form submission (you can replace this with actual form submission logic)
        alert(`Reservation confirmed for ${numCampers} camper(s) on ${date}!`);

        // Optionally, you can reset the form after submission
        reserveForm.reset();
    });

    // Initialize the carousel
    const carousel = new bootstrap.Carousel('#homeCarousel', {
        interval: 5000,
        pause: false
    });

    // Get the carousel control button and icon
    const carouselButton = document.getElementById('carouselButton');
    const faIcon = document.getElementById('faButton');

    // Add event listener to the carousel button
    if (carouselButton) {
        carouselButton.addEventListener('click', function () {
            if (faIcon.classList.contains('fa-pause')) {
                faIcon.classList.remove('fa-pause');
                faIcon.classList.add('fa-play');
                carousel.pause();
            } else {
                faIcon.classList.remove('fa-play');
                faIcon.classList.add('fa-pause');
                carousel.cycle();
            }
        });
    }
});
