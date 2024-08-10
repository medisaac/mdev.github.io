document.addEventListener("DOMContentLoaded", function () {
  const lightThemeButton = document.getElementById("lightTheme");
  const darkThemeButton = document.getElementById("darkTheme");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  lightThemeButton.addEventListener("click", function () {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  });

  darkThemeButton.addEventListener("click", function () {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  });
});
