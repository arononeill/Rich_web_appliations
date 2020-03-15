//  This class is used for creating a button and appending it to each list item
var myNodelist = document.getElementsByTagName("LI");
// variables used for indexing
var index = 0;
var btnID_counter = 0;

var color;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
    color = document.querySelector("#color");
    color.value = defaultColor;
    color.addEventListener("input", updateFirst, false);
    color.addEventListener("change", updateAll, false);
    color.select();
}

function updateFirst(event) {
    var p = document.getElementById('box');
    counter = 1;

    if (p) {
        p.style.borderColor = event.target.value;
    }
}

function updateAll(event) {
    var x = document.querySelectorAll("li");
    counter = 1;

    for (i = 0; i < x.length; i++) {
        x[i].style.borderColor = event.target.value;
    }
    newColor = event.target.value;

}

for (index = 0; index < myNodelist.length; index++) {

    // Appending the edit button to each list element already populated
    var span2 = document.createElement("SPAN");
    var txt2 = document.createElement("img");
    txt2.src = "edit.png";

    span2.className = "edit";
    span2.contenteditable="true";
    span2.appendChild(txt2);
    myNodelist[index].appendChild(span2);

    // Appending the close button to each lis element already populated
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[index].appendChild(span);

}

// The creating of a close button to hide the already populated list items
var close = document.getElementsByClassName("close");
var edit = document.getElementsByClassName("edit");
var index;

for (index = 0; index < edit.length; index++) {
    edit[index].onclick = function() {
        var div = this.parentElement;

        /* This checks if the list view item is set to 'contentEditible' 
        and sets it allow the user to enable and disable whether the item can be edited */
        if (div.contentEditable == "true") {
            div.contentEditable = "false";
            button.innerHTML = "Enable content of p to be editable!";
        }
        else {
            div.contentEditable = "true";
            button.innerHTML = "Disable content of p to be editable!";
        }
    }

    close[index].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}   

// Creating the new list view item after the add button has been clicked
function newElement() {

    var li = document.createElement("li");
    var count = 0;

    // Takes in the user's inputted list view item
    var inputValue = document.getElementById("userInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    // If statement to check if the user has entered a word before clicking the add button
    if (inputValue === '') {
        alert("Please fill out the required field!");
    } 

    else {
        document.getElementById("ListItem").appendChild(li);
    }

    document.getElementById("userInput").value = "";

    var span2 = document.createElement("SPAN");
    var txt2 = document.createElement("img");
    txt2.src = "edit.png";

    span2.className = "edit";
    span2.contenteditable="true";
    span2.appendChild(txt2);
    li.appendChild(span2);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    var x = document.querySelectorAll("li");

    // The select variable's ID is incremented in order to know what not to change the background color of
    var clone = li.cloneNode(true); 
    clone.id = "box" + ++index;

    for (index = 0; index < close.length; index++) {

        edit[index].onclick = function() {
            var div = this.parentElement;
    
            /* This checks if the list view item is set to 'contentEditible' 
            and sets it allow the user to enable and disable whether the item can be edited */
            if (div.contentEditable == "true") {
                div.contentEditable = "false";
                button.innerHTML = "Enable content of p to be editable!";
            }
            else {
                div.contentEditable = "true";
                button.innerHTML = "Disable content of p to be editable!";
            }
        }

        close[index].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
} // Close function

function clearList()
{
  var full_ul_list = document.getElementsByTagName("ul");
  full_ul_list[0].innerHTML= "";
}