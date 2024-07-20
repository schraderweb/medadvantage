// document.addEventListener("DOMContentLoaded", (event) => {
//   const buttons = document.querySelectorAll(".btn-parts");

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       buttons.forEach((btn) => btn.classList.remove("active")); // Remove active class from all buttons
//       button.classList.add("active"); // Add active class to the clicked button
//     });
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn-parts");
  const contents = document.querySelectorAll(".part-content");

  function activateContent(part) {
    contents.forEach((content) => {
      if (content.classList.contains(part)) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      const part = this.getAttribute("data-part");
      activateContent(part);
    });
  });

  // Set default active content
  activateContent("partA");
});
