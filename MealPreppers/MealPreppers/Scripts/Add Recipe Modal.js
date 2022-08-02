

let modalSubmitButton = document.getElementById('modalSubmitButton');
let previewTitle = document.getElementById('card-title-preview');
let previewDescription = document.getElementById('previewDescription');
let previewImage = document.getElementById('previewImage');

const modalForm = document.getElementById('add-recipe-modal-form');

let newAlert = document.getElementById('modalAlert');


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
function pog() {
    newAlert.classList.add("hide");
    modalSubmitButton.disabled = false;
}


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
            $("#grid-container").load("/Home/Index #grid-layout");
            newAlert.classList.remove("hide");
            modalSubmitButton.disabled = true;
            modalForm.reset();
            setTimeout(pog, 5000);

            },
        error: console.log("not pog")
    });

   // location.reload(location.href);

    
    //$('#grid-layout').load(" Home/Index #grid-layout", function () {
    //    alert("Loaded");

    //});
/*$("#grid-layout").load(location.href + " #grid-layout");*/

    
};






// -------------------------------- Modal Previews Below -------------------------------- //

let newTitle = document.getElementById('modal-input-title'); // Preview Title

newTitle.addEventListener('keyup', function () {
    
    previewTitle.innerHTML = newTitle.value;
           

});

let newDescription = document.getElementById('modal-description-preview'); // Preview Desc

newDescription.addEventListener('keyup', function () {
    
    previewDescription.innerHTML = newDescription.value;

});

let newImage = document.getElementById('modal-preview-image'); // Preview Image

newImage.addEventListener('keyup', function () {
    
    previewImage.src = newImage.value;

});

// Add ingredient input

let ingContainer = $("#ingredientsContainer");
let add_ingred = $("#addIngredientButton");
let max_ing = 10;
let ingCount = 0;

$(add_ingred).click(function (e) {
    e.preventDefault();
    if (ingCount < max_ing) {
        ingCount++;
        $(ingContainer).append('<div><input class="form-control" type="text" name="ingredients" placeholder="..." /><a href="#" id="deleteItemText" class="delete">Remove Ingredient Above</a></div>');
    }
    else {
        alert("Max ingredients posted, add additional smaller ingredients in instructions");
    }


});

$(ingContainer).on("click", ".delete", function (e) {
    e.preventDefault();
    $(this).parent('div').remove();
    ingCount--;

});

// Add instruction input

let instrContainer = $("#instructionsContainer");
let add_instr = $("#addInstructionsButton");
let max_instr = 10;
let instrCount = 0;

$(add_instr).click(function (e) {
    e.preventDefault();
    if (instrCount < max_instr) {
        instrCount++;
        $(instrContainer).append('<div><textarea rows="3" class="form-control" name="instructions" placeholder="..." ></textarea><a href="#" id="deleteItemText" class="delete">Remove Step Above</a></div>');
    }
    else {
        alert("Max steps added, we recommend merging smaller steps together for page room purposes");
    }


});

$(instrContainer).on("click", ".delete", function (e) {
    e.preventDefault();
    $(this).parent('div').remove();
    instrCount--;

});





