
    // Update the file name when a file is selected
    const fileInput = document.querySelectorAll('.file-input-button');
    const fileName = document.querySelectorAll('.file-name');
    const checkoutButton = document.querySelector('.checkout-button');

    fileInput.forEach((input, index) => {
        input.addEventListener('change', function () {
            if (this.files.length > 0) {
                fileName[index].textContent = this.files[0].name;
                checkoutButton.removeAttribute('disabled');
            } else {
                fileName[index].textContent = 'No file selected';
                checkoutButton.setAttribute('disabled', 'disabled');
            }
        });
    });


//----------------------------------------- <!-- sidebar js  -->

    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const closeBtn = document.querySelector('.close-btn');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('show');
    });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('show');
    });

    window.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
            sidebar.classList.remove('show');
        }
    });
