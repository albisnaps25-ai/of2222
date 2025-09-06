let pressTimer;

// Show modal
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "flex";
}

// Close modal
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "none";
}

// Helper for click + long press
function attachPressEvents(element, clickModalId, longModalId) {
  element.addEventListener("click", () => openModal(clickModalId));

  element.addEventListener("mousedown", () => {
    pressTimer = setTimeout(() => openModal(longModalId), 600);
  });
  element.addEventListener("mouseup", () => clearTimeout(pressTimer));
  element.addEventListener("mouseleave", () => clearTimeout(pressTimer));
}

// Attach to Photos and Videos
const photosStat = document.querySelector(".stats span:nth-child(1)");
const videosStat = document.querySelector(".stats span:nth-child(2)");

if (photosStat) {
  attachPressEvents(photosStat, "photosClickModal", "photosLongModal");
}
if (videosStat) {
  attachPressEvents(videosStat, "videosClickModal", "videosLongModal");
}
