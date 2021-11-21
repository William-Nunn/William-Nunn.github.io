// if the hamburger button is focused, let keyboard users hit "ENTER" to change open/close state (checkboxes normally only work with spacebar, but the checkbox is hidden from view)
// this should only present a problem for keyboard users who both have javascript disabled and do not use screen readers
document.getElementById("site-nav-toggle").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.target.checked = !e.target.checked;
  }
});
