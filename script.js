<script>
let pressTimer;

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "flex";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "none";
}

function attachPressEvents(element, clickModalId, longModalId) {
  if (!element) return;
  element.addEventListener("click", () => openModal(clickModalId));

  element.addEventListener("mousedown", () => {
    pressTimer = setTimeout(() => openModal(longModalId), 600);
  });
  element.addEventListener("mouseup", () => clearTimeout(pressTimer));
  element.addEventListener("mouseleave", () => clearTimeout(pressTimer));
}

window.addEventListener("DOMContentLoaded", () => {
  const photosStat = document.querySelector(".stats span:nth-child(1)");
  const videosStat = document.querySelector(".stats span:nth-child(2)");

  attachPressEvents(photosStat, "photosClickModal", "photosLongModal");
  attachPressEvents(videosStat, "videosClickModal", "videosLongModal");
});
</script>

