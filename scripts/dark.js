document.addEventListener("DOMContentLoaded", () => {
    const osLink = document.querySelector("#os");
    const darkLink = document.querySelector("#dark");
    const lightLink = document.querySelector("#light");
    const body = document.body;

    const toggleMode = (mode) => {
        body.classList.remove("dark-mode", "light-mode");

        if (mode === "dark") {
            body.classList.add("dark-mode");
        } else if (mode === "light") {
            body.classList.add("light-mode");
        }
    };

    osLink.addEventListener("click", (event) => {
        event.preventDefault();
        toggleMode("os");
    });

    darkLink.addEventListener("click", (event) => {
        event.preventDefault();
        toggleMode("dark");
    });

    lightLink.addEventListener("click", (event) => {
        event.preventDefault();
        toggleMode("light");
    });
});