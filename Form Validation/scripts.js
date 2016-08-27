var hobbiesForm = document.forms.hobbiesForm;
var message = document.getElementById("message");

hobbiesForm.onsubmit = function() {

    if (hobbiesForm.name.value == "") {
        message.innerHTML = "Please enter a name";
        return false;
    }
    else {
        message.innerHTML = "";
        return true;
    }

};
