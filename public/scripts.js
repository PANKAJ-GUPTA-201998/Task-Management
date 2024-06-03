// Get the modal
var modal = document.getElementById("task-modal");

// Get the button that opens the modal
var btn = document.getElementById("create-task-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the cancel button
var cancelBtn = document.getElementById("cancel-btn");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks on the cancel button, close the modal
cancelBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
