//  This class is used for creating a button and appending it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// The creating of a close button to hide the already populated list items
var close = document.getElementsByClassName("close");
var i;

for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Creating the new list view item after the add button has been clicked
function newElement() {
    var li = document.createElement("li");

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

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
} // Close function

var slectedChild = $("ul li:nth-child(3)");
         slectedChild.append("<span> 4th child!</span>");