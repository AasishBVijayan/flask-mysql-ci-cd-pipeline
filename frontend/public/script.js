const BACKEND_URL = "http://localhost:5000/predict";

const imageInput = document.getElementById("imageInput");
const uploadBtn = document.getElementById("uploadBtn");
const preview = document.getElementById("preview");
const caption = document.getElementById("caption");

imageInput.addEventListener("change", function () {
    let file = this.files[0];
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
});

uploadBtn.addEventListener("click", async function () {
    let file = imageInput.files[0];
    if (!file) {
        alert("Please select an image first!");
        return;
    }

    let formData = new FormData();
    formData.append("image", file);

    caption.textContent = "Generating caption...";

    let response = await fetch(BACKEND_URL, {
        method: "POST",
        body: formData
    });

    let data = await response.json();

    caption.textContent = data.caption;
});
