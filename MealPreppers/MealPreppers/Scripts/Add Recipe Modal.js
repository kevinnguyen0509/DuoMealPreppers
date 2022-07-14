let modalSubmitButton = document.getElementById('modalSubmitButton');
let previewTitle = document.getElementById('card-title-preview');
let previewDescription = document.getElementById('previewDescription');
let previewImage = document.getElementById('previewImage');


modalSubmitButton.addEventListener('click', function() {
    


});

let newTitle = document.getElementById('modal-input-title');

newTitle.addEventListener('keyup', function () {
    console.log(newTitle.value);
    previewTitle.innerHTML = newTitle.value;

});

let newDescription = document.getElementById('modal-description-preview');

newDescription.addEventListener('keyup', function () {
    console.log(newDescription.value);
    previewDescription.innerHTML = newDescription.value;

});

let newImage = document.getElementById('modal-preview-image');

newImage.addEventListener('keyup', function () {
    console.log(newImage.value);
    previewImage.src = newImage.value;

});


//$("#add-recipe-modal-form").submit(function (e) {
//        e.preventDefault(); // Prevents the form from submitting
//        console.log("pog");
//        var recipeForm = $(this);



//})

$(document).ready(function (e) {
    $('add-recipe-modal-form').


    
});

const formData = new FormData();

