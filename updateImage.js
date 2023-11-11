// variables to store HTML elements
let placeholder = document.querySelector(".placeholder");
let buttonOne = document.querySelector(".button-one");
let buttonTwo = document.querySelector(".button-two");


// click event for buttonOne
buttonOne.addEventListener('click', function() {

    // 1. Select the placeholder and update the src.
    // - The image address should be a picture of a place you want to travel to.
    // - Use Google Search, find a photo you want, right-click, and copy the image address.
  placeholder.src = "https://www.state.gov/wp-content/uploads/2019/04/Guyana-e1556101186323-2505x1406.jpg";



});


// click event for buttonTwo
buttonTwo.addEventListener('click', function() {

    // 2. Select the placeholder and update the src.
    // - The image address should be a picture that represents your mood.
    // - Use Google Search, find a photo you want, right-click, and copy the image address.

  placeholder.src = "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/11/tiredAdult-1253251689-770x533-1.jpg";

    

});