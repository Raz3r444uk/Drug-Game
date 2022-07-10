const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

placeholders.forEach((el) => {
  el.addEventListener("dragover", dragover);
  el.addEventListener("dragenter", dragenter);
  el.addEventListener("dragleave", dragleave);
  el.addEventListener("drop", drop);
});

function dragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0);
}
function dragend(event) {
  event.target.classList.remove("hold", "hide");
}

function dragover(e) {
  e.preventDefault();
}

function dragenter(e) {
  e.target.classList.add("hovered");
}

function dragleave(e) {
  e.target.classList.remove("hovered");
}

function drop(e) {
  e.target.append(item);
  e.target.classList.remove("hovered");
}
