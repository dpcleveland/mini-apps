var hobbiesForm = document.forms.hobbiesForm;

hobbiesForm.name.onfocus = function() {
    hobbiesForm.name.style.border = "4px solid red";
}

hobbiesForm.name.onblur = function() {
    hobbiesForm.name.style.border = "none";
}
