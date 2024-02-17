document.addEventListener('DOMContentLoaded', function() {
    const countSpan = document.querySelector('.count');
    const decreaseBtn = document.querySelector('.btn-decrease');
    const resetBtn = document.querySelector('.btn-reset');
    const increaseBtn = document.querySelector('.btn-increase');

    let count = 0;

    // Function to update the count display
    function updateCount() {
        countSpan.textContent = count;
    }

    // Event listener for the decrease button
    decreaseBtn.addEventListener('click', function() {
        count--;
        updateCount();
    });

    // Event listener for the reset button
    resetBtn.addEventListener('click', function() {
        count = 0;
        updateCount();
    });

    // Event listener for the increase button
    increaseBtn.addEventListener('click', function() {
        count++;
        updateCount();
    });
});