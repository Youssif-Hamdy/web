function changeColor(imageSrc, element) {
    var productImage = element.closest('.product').querySelector('.product-image');
    productImage.src = imageSrc;
    }
    

    document.addEventListener("DOMContentLoaded", function () {
      var filterButton = document.getElementById("filterButton");
      var filterMenu = document.getElementById("filterMenu");
  
      filterButton.addEventListener("click", function () {
          if (filterMenu.style.display === "none" || filterMenu.style.display === "") {
              filterMenu.style.display = "block";
          } else {
              filterMenu.style.display = "none";
          }
      });
  
      // Close the filter menu if the user clicks outside of it
      document.addEventListener("click", function (event) {
          if (!filterButton.contains(event.target) && !filterMenu.contains(event.target)) {
              filterMenu.style.display = "none";
          }
      });
  });
