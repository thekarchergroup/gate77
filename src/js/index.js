// Styles
import "../scss/master.scss";
// jQuery - parcel wants it imported like this
import "./jquery";
// Scripts
import "./counters";
import "./spotlight/dist/spotlight.bundle.js";

// gallery
const gallery = [
  { src: "DSC07711.jpg" },
  { src: "DSC07715.jpg" },
  { src: "DSC07731.jpg" },
  { src: "DSC07734.jpg" },
  { src: "DSC07736.jpg" },
  { src: "DSC07743.jpg" },
  { src: "DSC07746.jpg" },
  { src: "DSC07752.jpg" },
  { src: "DSC07756.jpg" },
  { src: "DSC07760.jpg" },
  { src: "DSC07766.jpg" },
  { src: "DSC07768.jpg" },
  { src: "DSC07771.jpg" },
  { src: "DSC07777.jpg" },
  { src: "DSC07778.jpg" },
  { src: "DSC07783.jpg" },
  { src: "DSC07788.jpg" },
  { src: "DSC07796.jpg" },
];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("open-gallery").addEventListener("click", () => {
    // Open the gallery
    Spotlight.show(gallery);
  });
});
