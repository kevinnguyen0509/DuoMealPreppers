let modalSubmitButton = document.getElementById('modalSubmitButton');
let previewTitle = document.getElementById('card-title-preview');

modalSubmitButton.addEventListener('click', function() {
    


});

let newText = document.getElementById('modal-input-title');

newText.addEventListener('keyup', function () {
    console.log(newText.value);
    previewTitle.innerHTML = newText.value;

});