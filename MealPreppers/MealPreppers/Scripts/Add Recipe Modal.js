

let modalSubmitButton = document.getElementById('modalSubmitButton');
let previewTitle = document.getElementById('card-title-preview');
let previewDescription = document.getElementById('previewDescription');
let previewImage = document.getElementById('previewImage');

const modalForm = document.getElementById('add-recipe-modal-form');
const modalSUBMIT = document.getElementById('modalSubmitButton');

const modalClose = document.getElementById('Modalclose');


//modalForm.addEventListener('submit', callBack);

//function callBack(event) {
//    console.log("hi");
//    event.preventDefault();
//    const myFormData = new FormData(event.target);

//    /*const formDataObj = {};*/
//   /* myFormData.forEach((value, key) => (formDataObj[key] = value));*/

//    const formDataObj = Object.fromEntries(myFormData.entries());
//    console.log(formDataObj); 

    

//    var test = JSON.stringify(formDataObj);

//    $.ajax({

//        type: "post",
//        data: test,
//        url: "Home/AddRecipe",
//        success: console.log(json),
        


//    });
//};

//}
modalForm.addEventListener('submit', callBack);
function callBack(event) {
    event.preventDefault(); // prevent actual form submit
    var form = $(this);
   // console.log(form);
    
    $.ajax({
        type: "POST",
        url: "Home/AddRecipe",
        data: form.serialize(), // serializes form input
        success: function (e) {
            $("#grid-container").load("/Home/Index #grid-layout");        },
        error: console.log("not pog")
    });

   // location.reload(location.href);

    
    //$('#grid-layout').load(" Home/Index #grid-layout", function () {
    //    alert("Loaded");

    //});
/*$("#grid-layout").load(location.href + " #grid-layout");*/

    
};

modalSUBMIT.addEventListener('click', divReload);

function divReload() {

    console.log("poggers");
    

   // $("#grid-layout").load("Home/Index #grid-layout");
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









