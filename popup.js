// function toggle(){
//     var blur = document.getElementById("blur");
//         blur.classList.toggle("active");
//     var Popup = document.getElementById("Popup");
//     Popup.classList.toggle("active");
// }

document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");
  const closeButtons = document.querySelectorAll(".close-btn");
  const mainContent = document.getElementById("main-content");

  toggleButtons.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();

      const id = btn.getAttribute("data-id");
      const popup = document.querySelector(`.popup[data-id="${id}"]`);

      if (popup) {
        mainContent.classList.add("blur");
        document.querySelectorAll(".popup.active").forEach(p => p.classList.remove("active"));
        popup.classList.add("active");
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      mainContent.classList.remove("blur");
      document.querySelectorAll(".popup.active").forEach(p => p.classList.remove("active"));
    });
  });
});



