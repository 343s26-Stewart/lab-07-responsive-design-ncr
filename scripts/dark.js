document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelectorAll(".main-nav a");
    const body = document.body;

    const toggleMode = (mode) => {
        body.classList.remove("dark-mode", "light-mode");

        if (mode === "dark") {
            body.classList.add("dark-mode");
        } else if (mode === "light") {
            body.classList.add("light-mode");
        }
    };

    nav[0].addEventListener("click", (event) => {
        event.preventDefault();
        toggleMode("os");
    });

    nav[1].addEventListener("click", (event) => {
        event.preventDefault();
        toggleMode("dark");
    });

    nav[2].addEventListener("click", (event) => {
        event.preventDefault();
        toggleMode("light");
    });
});