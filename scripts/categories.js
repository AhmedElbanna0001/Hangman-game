//DOM Elements
var categoriesGrid = document.querySelector(".categories-grid");
var playButton = document.querySelector(".play-button");
var playButtonLink = document.getElementById("play-button-link");
var cateoryDescription = document.querySelector(".category-description p");

var category = "";

categoriesGrid.addEventListener("click", function (event) {
  var selectedCategory = event.target.closest(".category-prev");
  if (!selectedCategory) return;
  //Remove the selection from previous if was
  if (category) {
    var previousSelectedCategory = document.querySelector(".selected-category");
    previousSelectedCategory.classList.toggle("selected-category");
  }

  //Select new category
  selectedCategory.classList.toggle("selected-category");
  var categoryParagraph = selectedCategory.lastElementChild;

  //Showing the play button when a category is selected
  if (!category) {
    playButtonLink.classList.remove("hidden");
    playButton.classList.remove("hidden");
  }

  category = categoryParagraph.textContent;
  cateoryDescription.textContent = categoryParagraph.textContent;

  //Storing the category for the next page
  sessionStorage.setItem("category", category);
});
