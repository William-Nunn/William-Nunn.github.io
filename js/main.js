// general rule of thumb about Javascript: it shouldn't have to be enabled to make usage of the website
// (I guess the embedded audio clips need Javascript to work, but them's the rubs)

// if the hamburger button is focused, let keyboard users hit "ENTER" to change open/close state (checkboxes normally only work with spacebar, but the checkbox is hidden from view)
// this should only present a problem for keyboard users who both have javascript disabled and do not use screen readers
document.getElementById("site-nav-toggle").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.target.checked = !e.target.checked;
  }
});

// this code enables the "random image" gimmick - won't run without javascript enabled, but this is not required to get the full functionality of the website
const imagePaths = ["headshot.jpg", "metal-gear-cooking.jpg"];
const randomImage = imagePaths[Math.floor(Math.random() * imagePaths.length)];
document.getElementById('site-look-at-this-guy').style.backgroundImage = `url(/content/images/${randomImage})`;
