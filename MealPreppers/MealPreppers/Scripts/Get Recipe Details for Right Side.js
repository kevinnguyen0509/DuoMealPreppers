

export function attachButtons() {
    
    

   


    $(".grid-button").on( "click", function (e) {

       

        e.preventDefault();
        var title = $(this).attr("mealname");
        var desc = $(this).attr("description");
        var calories = $(this).attr("calories");
        var servings = $(this).attr("servings");
        var imageurl = $(this).attr("imageurl");
        var ingredients = $(this).attr("ingredients");
        var preptime = $(this).attr("preptime");
        var instructions = $(this).attr("instructions");


        document.getElementById("mealRightSideImage").src = imageurl;
        document.getElementById("RightSideTitle").textContent = title;
        document.getElementById("RightSideDetailsTXT").textContent = desc;
        document.getElementById("RightCalories").textContent = calories;
        document.getElementById("RightServingSize").textContent = servings;
        document.getElementById("RightPrepTime").textContent = preptime;

        let IngredientsArr = ingredients.split("^ ");
        var IngredientsUL = document.getElementById("IngredientList");
      
        IngredientsUL.innerHTML = "";
        for (var i = 0; i < IngredientsArr.length; i++) {
            if (IngredientsArr[i] != "")
                IngredientsUL.innerHTML += "<li>" + IngredientsArr[i] + "</li>";
        }

        let InstructionsArr = instructions.split("^ ");
        console.log(InstructionsArr);
        var InstructionsUL = document.getElementById("InstructionList");

        InstructionsUL.innerHTML = "";
        for (var i = 0; i < InstructionsArr.length; i++) {
            if (InstructionsArr[i] != "")
                InstructionsUL.innerHTML += "<li>" + InstructionsArr[i] + "</li>";
        }

    });
}

attachButtons();

