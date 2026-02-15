function showMessage() {
    alert("🚀 Successfully deployed via AWS CodePipeline!");
}

function submitForm(event) {
    event.preventDefault();
    document.getElementById("formMessage").innerHTML =
        "✅ Message submitted successfully!";
}

// Scroll Reveal Animation
window.addEventListener("scroll", function () {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(function (element) {
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
});
