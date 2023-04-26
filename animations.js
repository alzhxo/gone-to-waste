function scrollToSection(id) {
    var section = document.getElementById(id);
    section.scrollIntoView({behavior: "smooth"});
  }

function isInViewport(element) {
var rect = element.getBoundingClientRect();
return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
    } 
  
document.addEventListener("scroll", function() {
    var contents = document.querySelectorAll(".content");
    for (var i = 0; i < contents.length; i++) {
      if (isInViewport(contents[i])) {
        contents[i].classList.add(".in-view");
      }
    }
  });