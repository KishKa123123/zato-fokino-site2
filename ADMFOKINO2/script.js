document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-container");
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".statistics-item");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;
    const itemsPerSlide = 3; // Количество видимых элементов
    const totalSlides = slides.length;
    const maxIndex = Math.ceil(totalSlides / itemsPerSlide) - 1;

    function updateSlider() {
        const slideWidth = sliderContainer.offsetWidth;
        slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

        // Делает кнопки кликабельными всегда
        prevButton.style.pointerEvents = currentIndex === 0 ? "none" : "auto";
        nextButton.style.pointerEvents = currentIndex === maxIndex ? "none" : "auto";

        // Убираем disabled, чтобы кнопка была активна
        prevButton.disabled = currentIndex === 0 ? true : false;
        nextButton.disabled = currentIndex === maxIndex ? true : false;
    }

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });

    window.addEventListener("resize", updateSlider);
    updateSlider();
});

document.addEventListener("DOMContentLoaded", function () {
    const docSlider = document.querySelector(".documents-wrapper");
    const prevBtn = document.querySelector(".doc-prev");
    const nextBtn = document.querySelector(".doc-next");
    const docItems = document.querySelectorAll(".doc-item");
    
    let currentIndex = 0;
    const itemsPerView = 3;
    const totalItems = docItems.length;
    const maxIndex = Math.ceil(totalItems / itemsPerView) - 1;

    function updateDocSlider() {
        const itemWidth = docItems[0].offsetWidth;
        docSlider.style.transform = `translateX(${-currentIndex * itemWidth * itemsPerView}px)`;

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === maxIndex;
    }

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateDocSlider();
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateDocSlider();
        }
    });

    updateDocSlider();
});

document.addEventListener("DOMContentLoaded", function () {
    const profileLink = document.querySelector(".profile-link");

    profileLink.addEventListener("click", function (e) {
        // Проверим, зарегистрирован ли пользователь
        const isRegistered = localStorage.getItem("userRegistered");

        if (!isRegistered) {
            e.preventDefault();
            alert("Пожалуйста, зарегистрируйтесь, чтобы перейти в профиль.");
        }
    });
});
