let filterList = $("#filterhaveIngredients");
let filterItem = $("#haveIngredientsSearchInput");
let filterList2 = document.getElementById("filterhaveIngredients");

$("#addOwnedFood").click(function () {
    filterList2.innerHTML = "";
    console.log(filterList);
    filterList2.innerHTML += '<button id="haveFood" class="btn" onclick="filterSelection("Lettuce")">Lettuce</button>';
    //'<button id ="haveFood" class="btn" onclick="filterSelection('+filterItem.value+')>' + filterItem.value + '</button>';
    console.log(filterList);

});