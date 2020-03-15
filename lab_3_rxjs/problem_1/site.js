//  This class is used for creating a button and appending it to each list item
var myNodelist = document.getElementsByTagName("LI");
// variables used for indexing
var index = 0;
var btnID_counter = 0;
var color;
var defaultColor = "#0000ff";

window.onload = startup;

function startup() {
    const start = document.querySelector('#color');
    const startSource = Rx.Observable.fromEvent(start, 'change');
    startSource.subscribe(event => {
        console.log("Colour chooser implemented using Rx Observable");
        var x = document.querySelectorAll("li");
        var count = 0;
        var i, newColor;

        newArray = Array.from(x)
        obj = newArray.map(index => {
            x[count].style.borderColor = event.target.value;
            count++;
        }); 
        newColor = event.target.value; 
    });
}

var count = 0;

// Creates an array, allowing us to map each element
newArray = Array.from(myNodelist)
obj = newArray.map(index => {

    // Appending the edit button to each list element already populated
    var span2 = document.createElement("SPAN");
    var txt2 = document.createElement("img");
    txt2.src = "edit.png";

    span2.className = "edit";
    span2.contenteditable="true";
    span2.appendChild(txt2);
    myNodelist[count].appendChild(span2);

    // Appending the close button to each lis element already populated
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[count].appendChild(span);
    count++;
});

// The creating of a close button to hide the already populated list items
var close = document.getElementsByClassName("close");
var edit = document.getElementsByClassName("edit");
var count = 0;

// Creates an array, allowing us to map each element
newArray = Array.from(edit)
obj = newArray.map(index => {
    
    const editSource = Rx.Observable.fromEvent(edit[count], 'click');
    editSource.subscribe(event => {
        // This gets the div needed to be removed in order to close the note
        var div = editSource.sourceObj.parentElement;
        console.log("Note edited using Rxjs");

        /* This checks if the list view item is set to 'contentEditible' 
        and sets it allow the user to enable and disable whether the item can be edited */
        if (div.contentEditable == "true") {
            div.contentEditable = "false";
        }
        else {
            div.contentEditable = "true";
        }
    });

    const exitSource = Rx.Observable.fromEvent(close[count], 'click');
    exitSource.subscribe(event => {
        // This gets the div needed to be removed in order to close the note
        var div = exitSource.sourceObj.parentElement;
        console.log("Note removed using Rxjs");
        div.style.display = "none";
    });
    count++;
});   



// Creating the new list view item after the add button has been clicked
const addBtn = document.getElementsByClassName('InsertBtn');
const source = Rx.Observable.fromEvent(addBtn, 'click');
source.subscribe(event => {
    if (document.title !== 'Lab_03 : Part 1') {
        subscribe.error('Wrong page title');
    }
    
    console.log("Add button clicked and executed using Rx Observable")
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
    count = 0;

    newArray = Array.from(close)
    obj = newArray.map(index => {

        const editSource = Rx.Observable.fromEvent(edit[count], 'click');
        editSource.subscribe(event => {
            // This gets the div needed to be removed in order to close the note
            var div = editSource.sourceObj.parentElement;
            console.log("Note edited using Rxjs");

            /* This checks if the list view item is set to 'contentEditible' 
            and sets it allow the user to enable and disable whether the item can be edited */
            if (div.contentEditable == "true") {
                div.contentEditable = "false";
            }
            else {
                div.contentEditable = "true";
            }
        });

        const exitSource = Rx.Observable.fromEvent(close[count], 'click');
        exitSource.subscribe(event => {
            // This gets the div needed to be removed in order to close the note
            var div = exitSource.sourceObj.parentElement;
            console.log("Note removed using Rxjs");
            div.style.display = "none";
        });
        count++;
    });
});


const clearList = document.getElementsByClassName('remove_all');
const clearSource = Rx.Observable.fromEvent(clearList, 'click');
clearSource.subscribe(event => {
    console.log("List cleared using Rx Observable")
    var full_ul_list = document.getElementsByTagName("ul");
    full_ul_list[0].innerHTML= "";
});