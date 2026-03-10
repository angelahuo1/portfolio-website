function loadActiveLightboxImage() {
  var hash = window.location.hash;
  if (!hash) {
    return;
  }

  var lightbox = document.querySelector(hash);
  if (!lightbox || !lightbox.classList.contains("lightbox")) {
    return;
  }

  var media = lightbox.querySelector("[data-src]");
  if (!media) {
    return;
  }

  var source = media.getAttribute("data-src");
  if (!source) {
    return;
  }

  if (media.tagName === "IMG") {
    if (!media.getAttribute("src")) {
      media.setAttribute("src", source);
    }
    return;
  }

  if (media.tagName === "VIDEO" && !media.getAttribute("src")) {
    media.setAttribute("src", source);
    if (typeof media.load === "function") {
      media.load();
    }
  }
}

window.addEventListener("hashchange", loadActiveLightboxImage);
window.addEventListener("DOMContentLoaded", loadActiveLightboxImage);
