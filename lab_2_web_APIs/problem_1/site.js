var createHeadersBoolean = true;

// function to validate user input
function formValidation() {
    var name = document.getElementById('name').value;
    var tel = document.getElementById('number').value.trim();
    var email = document.getElementById('email').value.trim();
    var error = document.getElementById("error");
    var specialChars = /^[0-9]+$/;
    var letters = /[A-Za-z]+$/; 
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    error.style.display = "hidden";

    // Checks if input fields are empty
    if (name === null || name === '' || tel === null || tel === '' || email === null || email === '') {
        error.style.display = "block";
        return false;
    }
    // Name field validation
    else if (!name.match(letters) || name.length > 20) {
        error.style.display = "block";
        return false;
    }

    // Telephone field validation
    else if (!tel.match(specialChars) || tel.length != 10) {
        error.style.display = "block";
        return false;
    }
    // Email field validation
    else if (!email.match(mailformat) || email.length > 40) {
        error.style.display = "block";
        return false;
    }
    else {
        error.style.display = "none";
        console.log(error.style.display);
        return true;
    }
    
}

// Function used to iterate over the table cells to find the telephone number the user has searched for
function telSearch() {
    
    var input, filter, a, i, txtValue, counter = 0;
    input = document.getElementById("myInput").value.trim();
    table = document.getElementById("myTable");
    rows = table.rows;
    filter = input.toUpperCase();

    // Loop to iterate over each cell
    for (i = 1; i < (rows.length); i++) {
        a = rows[i].getElementsByTagName("TD")[1];
        txtValue = a.textContent || a.innerText;
        
        // Checks if the user's input matches the data already in the table
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            rows[i].style.display = "";
        } 
        else {
            rows[i].style.display = "none";
            counter++;
        }
    }

    // If each cell has been iterated over and there are no matches then the noResult div message is displayed
    if (counter === (rows.length - 1)) {
        console.log("No Results");
        noResult.style.display = "block";
    }
}

// Gets called when user submits a new contact
function createRow() {
    error.style.display = "hidden";
    // form validation function called and returns a boolean 
    formBoolean = formValidation();
    
    if (formBoolean === true) {

        Errorstyle = document.getElementById("error");


        // If the table headers have not been previously called, this function is executed
        if (createHeadersBoolean)
        {
            createHeaders();
            createHeadersBoolean = false;
        }
        
        var table = document.getElementById('myTable');
        var name = document.getElementById('name').value;
        var number = document.getElementById('number').value;
        var email = document.getElementById('email').value;
        var tbody = ''
        tbody += '<tr>';
        tbody += '<td>';
        tbody += '<td>';
        tbody += '</td>';
        
        // Creates a new table with 3 new cells which have the user's entered details inside them
        let newRow = table.insertRow(-1);
        let newCell = newRow.insertCell(-1);
        let newCell2 = newRow.insertCell(-1);
        let newCell3 = newRow.insertCell(-1);
        let newText = document.createTextNode(name);
        let newText2 = document.createTextNode(number);
        let newText3 = document.createTextNode(email);
        newCell.appendChild(newText);
        newCell2.appendChild(newText2);
        newCell3.appendChild(newText3);
        document.getElementById("contact").reset();
        newCell.id="name";
    }
    else {
        console.log("Error Message");
    }
    document.getElementById("contact").reset();
}

//  Function to create the table's three headers
function createHeaders() {
    var table = document.getElementById('myTable');
    var tbody = '';
    tbody += '<tr>';
    tbody += '<td>';
    tbody += '<td>';
    tbody += '</td>';

    let newRow = table.insertRow(-1);
    let newCell = newRow.insertCell(-1);
    let newCell2 = newRow.insertCell(-1);
    let newCell3 = newRow.insertCell(-1);
    let newText3 = document.createTextNode("Email");
    newCell3.appendChild(newText3);

    var nameBtn = document.createElement("button")
    var numberBtn = document.createElement("button")
    
    // The two header buttons called the required function
    nameBtn.onclick = sortbyName;
    numberBtn.onclick = sortbyNumber;

    nameBtn.innerHTML = "<b>Name</b>";
    numberBtn.innerHTML = "<b>Number</b>";
    newCell3.innerHTML = "<b>Email</B>";

    nameBtn.id = "nameBtn";
    numberBtn.id = "numberBtn";

    newCell.appendChild(nameBtn);
    newCell2.appendChild(numberBtn);
    
}

function sortbyName() {
    n = 0;
    sortTable(n);
}

function sortbyNumber() {
    n = 1;
    sortTable(1);
}

// Function to sort the table according to name or telephone number
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc"; 
    while (switching) {
        switching = false;
        rows = table.rows;
        
        // Switches the postition of the row in the table if that element is less/greater than the next element.
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            // If the sorting direction is in ascending order
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                  shouldSwitch= true;
                  break;
                }
            } 
            else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and exit the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }

        // If the shouldSwitch boolean was marked as true, insert the element before the previous element.
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;      
        }
        else {
            // If each element has been sorted, change the ascending order to descending.
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}