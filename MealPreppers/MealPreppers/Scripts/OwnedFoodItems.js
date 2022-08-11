let filterList = $("#filterhaveIngredients");

let filterList2 = document.getElementById("filterhaveIngredients");

$("#addOwnedFood").click(function () {
    let filterItem = $("#haveIngredientsSearchInput");
   // let filterItem = document.getElementById("haveIngredientsSearchInput");
    console.log(filterList);
    let owndedFoodItem = `<button id="haveFood" class="btn" onclick="filterSelection("${filterItem.val()}")">${filterItem.val()}</button>`;
    filterList2.insertAdjacentHTML("beforeend", owndedFoodItem);
    //'<button id ="haveFood" class="btn" onclick="filterSelection('+filterItem.value+')>' + filterItem.value + '</button>';
    console.log(filterList);

});