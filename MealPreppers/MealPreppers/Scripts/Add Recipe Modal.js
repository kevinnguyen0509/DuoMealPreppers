let modalSubmitButton = document.getElementById('modalSubmitButton');
let previewTitle = document.getElementById('card-title-preview');
let previewDescription = document.getElementById('previewDescription');
let previewImage = document.getElementById('previewImage');

const modalForm = document.getElementById('add-recipe-modal-form');




modalForm.addEventListener('submit', callBack);

function callBack(event) {
    console.log("hi");
    event.preventDefault();
    const myFormData = new FormData(event.target);

    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj); 

}







// -------------------------------- Modal Previews Below -------------------------------- //

let newTitle = document.getElementById('modal-input-title'); // Preview Title

newTitle.addEventListener('keyup', function () {
    //console.log(newTitle.value);
    previewTitle.innerHTML = newTitle.value;
           

});

let newDescription = document.getElementById('modal-description-preview'); // Preview Desc

newDescription.addEventListener('keyup', function () {
    console.log(newDescription.value);
    previewDescription.innerHTML = newDescription.value;

});

let newImage = document.getElementById('modal-preview-image'); // Preview Image

newImage.addEventListener('keyup', function () {
    console.log(newImage.value);
    previewImage.src = newImage.value;

});


//$("form").submit(function (e) {
//     e.preventDefault(); // Prevents the form from submitting
        
//    formData.append("recipeTitle", previewTitle.innerHTML);
//    console.log(formData.get("recipeTitle"))

//})









