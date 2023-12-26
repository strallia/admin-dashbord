const html = document.querySelector("html");
const colorThemeIcon = document.querySelector(".color-theme .icon");
const colorThemeBtn = document.querySelector(".color-theme");

// Set default actions and styles
colorThemeBtn.addEventListener("click", toggleColorTheme);
html.classList.add("light");
let theme = 'light';

function toggleColorTheme() {
  let icon;
  if (theme === 'dark') {
    theme = 'light';
    icon = 'dark';
    html.classList.remove('dark');
  } else if (theme === 'light') {
    theme = 'dark';
    icon = 'light';
    html.classList.remove('light');
  }
  colorThemeIcon.src = `assets/icons/${icon}.svg`;
  html.classList.add(`${theme}`); 
}