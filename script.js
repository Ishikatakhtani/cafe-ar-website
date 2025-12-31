function orderNow() {
    alert("Thank you for choosing Cozy Cafe!");
}

function submitForm(event) {
    event.preventDefault();
    alert("Message sent successfully!");
}

// function openAR(dish) {
//     window.location.href = `ar.html?dish=${dish}`;
// }
function openAR(dish) {
    window.location.href = `ar.html?dish=${dish}`;
}

const fadeElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});
function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("active");
}

function closeMenu() {
    document.getElementById("nav-menu").classList.remove("active");
}
