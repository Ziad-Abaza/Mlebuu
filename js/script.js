var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    width: 950,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

function call() {
    var displayInput = document.getElementById("display");
    var numberButtons = document.querySelectorAll('.buttons input[type="button"]');
    numberButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            displayInput.value += this.value;
        });
    });
}

function del() {
    var displayInput = document.getElementById("display");
    var delButton = document.getElementById("del");

    delButton.addEventListener("click", function(event) {
        event.preventDefault();

        var currentValue = displayInput.value;

        var newValue = currentValue.slice(0, -1);

        displayInput.value = newValue;

        if (newValue === "") {
            delButton.style.display = "none";
        }
    });

    var numberButtons = document.querySelectorAll('.buttons input[type="button"]');
    numberButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            if (displayInput.value !== "") {
                delButton.style.display = "inline-block";
            }
        });
    });
}

function calling() {
    function showAlert() {
        var alertBox = document.getElementById('myAlert');
        alertBox.classList.add('show');
    }
    var calling = document.getElementById('calling');
    var displayInput = document.getElementById("display");
    calling.addEventListener("click", function(event) {
        event.preventDefault();
        displayInput.value = "";
        showAlert()
    });
}

function closeAlert() {
    var alertBox = document.getElementById('myAlert');
    alertBox.classList.remove('show');
}

function startClock() {
    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12;

        minutes = minutes.toString().padStart(2, '0');

        document.querySelector('.hrs').textContent = hours;
        document.querySelector('.mins').textContent = minutes;
        document.querySelector('.ampm').textContent = ampm;
    }

    setInterval(updateClock, 1000);
}