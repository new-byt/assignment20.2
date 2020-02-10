// When the user scrolls the page call sticky
window.onscroll = function() {
  stickyFunction();
};

// gets the header
var header = document.getElementById("header");
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
