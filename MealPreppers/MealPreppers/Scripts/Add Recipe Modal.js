﻿import { attachButtons } from '../Scripts/Get Recipe Details for Right Side.js'

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
    
   // console.log(form);

    //Update Instuctions

    var allInstructionsSeparatedByCarrot = "";
    var getAllInstructions = document.querySelectorAll(".instructionValue");
    for (var i = 0; i < getAllInstructions.length; i++) {
        if (getAllInstructions[i].value != "") {
            allInstructionsSeparatedByCarrot += getAllInstructions[i].value + "^ ";
            console.log(allInstructionsSeparatedByCarrot);
            
        }
        else {
            console.log("empty field");
        }
    }

    var allInstructions = document.getElementById("firstInstructionInput");
    allInstructions.value = allInstructionsSeparatedByCarrot;
    console.log(allInstructions.value);

    // Update Ingredients
    {
        var allIngredsSeparatedByCarrot = "";
        var getAllIngredients = document.querySelectorAll(".ingredientsValue");
        for (var i = 0; i < getAllIngredients.length; i++) {
            if (getAllIngredients[i].value != "") {
                allIngredsSeparatedByCarrot += getAllIngredients[i].value + "^ ";
                console.log(allIngredsSeparatedByCarrot);

            }
            else {
                console.log("empty field");
            }
        }
    }

    var allIngreds = document.getElementById("firstIngInput");
    allIngreds.value = allIngredsSeparatedByCarrot;
    console.log(allIngreds.value);

    //$("#firstIngInput").text = allIngredientsSeparatedByCarrot;
    //console.log($("#firstIngInput").value);

    var form = $(this);
    
    $.ajax({
        type: "POST",
        url: "Home/AddRecipe",
        data: form.serialize(), // serializes form input
        success: function (e) {
            $("#grid-container").load("/Home/Index #grid-layout", null, function () {
                newAlert.classList.remove("hide");
                modalSubmitButton.disabled = true;
                console.log(form);
                //modalForm.reset();
                attachButtons();

                setTimeout(pog, 5000);
            });
            

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

    //var pog = "";
    //var getAllIngreds = document.querySelectorAll(".instructionValue");
    //for (var i = 0; i < getAllIngreds.length; i++) {
    //    if (getAllIngreds[i].value != ""){
    //        pog += getAllIngreds[i].value + "^ ";
    //        console.log(pog);
    //    }
    //    else {
    //        console.log("empty field");
    //    }
    //}
    

});

let newDescription = document.getElementById('modal-description-preview'); // Preview Desc

newDescription.addEventListener('keyup', function () {
    
    previewDescription.innerHTML = newDescription.value;


});

let newImage = document.getElementById('modal-preview-image'); // Preview Image

newImage.addEventListener('keyup', function () {
    
    previewImage.src = newImage.value;

});

//// Add ingredient input

let ingContainer = $("#ingredientsContainer");
let add_ingred = $("#addIngredientButton");
let max_ing = 10;
let ingCount = 0;

$(add_ingred).click(function (e) {
    e.preventDefault();
    if (ingCount < max_ing) {
        ingCount++;
        $(ingContainer).append('<div><input class="form-control ingredientsValue" type="text" name="ingredients" placeholder="..." /><a href="#" id="deleteItemText" class="delete">Remove Ingredient Above</a></div>');
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

//// Add instruction input

let instrContainer = $("#instructionsContainer");
let add_instr = $("#addInstructionsButton");
let max_instr = 10;
let instrCount = 0;

let steps = 1;

$(add_instr).click(function (e) {
    e.preventDefault();
    if (instrCount < max_instr) {
        instrCount++;
        steps++;
        $(instrContainer).append('<div class="instructionStep">Step ' + steps + ':<textarea rows="3" class="form-control instructionValue" placeholder="..." ></textarea>' + '</div>'); //<a href="#" id="deleteItemText" class="delete">Remove Step Above</a></div>');
    }
    else {
        alert("Max steps added, we recommend merging smaller steps together for page room purposes");
    }


});

$(instrContainer).on("click", ".delete", function (e) {
    e.preventDefault();
    $(this).parent('div').remove();
    
    instrCount--;
    steps--;

});

// Remove ingredients button

let removeIngr = document.getElementById("removeInstructionsButton");

removeIngr.addEventListener("click", function (e) {
    var getIngredients = document.querySelectorAll(".instructionStep");

    if (getIngredients.length > 0) {
        console.log(getIngredients.length);
        getIngredients[getIngredients.length - 1].remove();
        steps--;
    }
    else {
        console.log("Not poggers");
        console.log(getIngredients.length);
    }


});






