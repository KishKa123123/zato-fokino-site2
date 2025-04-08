
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDate = document.getElementById("modal-date");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.querySelector(".close-btn");

    document.querySelectorAll(".news-item").forEach(item => {
        item.addEventListener("click", function () {
            const title = item.querySelector(".news-title").innerText;
            const date = item.querySelector(".news-date").innerText;
            const image = item.querySelector("img").src;
            const desc = item.querySelector(".news-description").innerText;

            modalTitle.innerText = title;
            modalDate.innerText = date;
            modalImage.src = image;
            modalDescription.innerText = desc;

            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

