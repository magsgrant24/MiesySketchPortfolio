const cursor = document.querySelector(".cursor");

window.addEventListener("pointermove", (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

document.querySelectorAll("a, .work-card").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursor.style.width = "34px";
    cursor.style.height = "34px";
    cursor.style.background = "var(--acid)";
  });
  item.addEventListener("mouseleave", () => {
    cursor.style.width = "14px";
    cursor.style.height = "14px";
    cursor.style.background = "transparent";
  });
});
