// project accordion start
var projectHeader = document.getElementsByClassName("project-dropdown-header");
var i;

for (i = 0; i < projectHeader.length; i++) {
  projectHeader[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var projectContainer = this.nextElementSibling;
    if (projectContainer.style.display === "block") {
      projectContainer.style.display = "none";
    } else {
      projectContainer.style.display = "block";
    }
  });
}

// project accordion end