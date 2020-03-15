const client_id = "Iv1.9f1521ab64810c62"
const client_secret = "5267654f73990a55a5793a8396054d225a1860ba"

// Function to call the api and return data containing the github user's information
const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&
    client_secret=${client_secret}`)

    const data = await api_call.json();
    return { data }
};

// Function to display user info by passing the queried username to fetchUsers()
const showData = () => {
    var inputValue = document.querySelector(".searchValue");
    fetchUsers(inputValue.value)
    .then((res) => {
        console.log(res);

        // If the user has no name linked to his account, dont display a User Profile tag
        if (res.data.login != null) {
            console.log("hhh");

            var h = document.getElementById("p");
            var bold = document.createElement("b");
            bold.appendChild(document.createTextNode("User Profile:"));
            h.appendChild(bold);

            var table = document.getElementById('userTable');
            var linebreak = document.createElement('br');

            var tbody = '';
            tbody += '<tr>';
            tbody += '<td>';
            tbody += '<td>';
            tbody += '</td>';  

            // If the user has a name attribute, create a new cell and row to append the user's avatar_url to
            if (res.data.login != null) {
                let newRow6 = table.insertRow(-1);
                let newCell6 = newRow6.insertCell(-1);
                var img = document.createElement("img");
                img.src = res.data.avatar_url;
                img.style.height = '80%'
                newCell6.appendChild(img);
            }

            if (res.data.name != null) {
                let newRow = table.insertRow(-1);
                let newCell = newRow.insertCell(-1);
                let newText = document.createTextNode(res.data.name);

                var bold = document.createElement("b");
                bold.appendChild(document.createTextNode("Name: "));
                newCell.appendChild(bold);
                newCell.appendChild(newText);
            }

            if (res.data.login != null) {
                let newRow2 = table.insertRow(-1);
                let newCell2 = newRow2.insertCell(-1);
                let newText2 = document.createTextNode(res.data.login);

                newCell2.appendChild(linebreak);
                var bold = document.createElement("b");
                bold.appendChild(document.createTextNode("Username: "));
                newCell2.appendChild(bold);
                newCell2.appendChild(newText2);
            }
            
            if (res.data.email != null) {
                let newRow3 = table.insertRow(-1);
                let newCell3 = newRow3.insertCell(-1);
                let newText3 = document.createTextNode(res.data.email);
                newCell3.appendChild(linebreak);
                var bold = document.createElement("b");
                bold.appendChild(document.createTextNode("Email: "));
                newCell3.appendChild(bold);
                newCell3.appendChild(newText3);
            }
            
            if (res.data.location != null) {
                let newRow4 = table.insertRow(-1);
                let newCell4 = newRow4.insertCell(-1);
                let newText4 = document.createTextNode(res.data.location);

                var bold = document.createElement("b");
                bold.appendChild(document.createTextNode("Location: "));
                newCell4.appendChild(bold);
                newCell4.appendChild(newText4);
            }

            if (res.data.public_gists != null) {
                let newRow5 = table.insertRow(-1);
                let newCell5 = newRow5.insertCell(-1);
                let newText5 = document.createTextNode(res.data.public_gists);

                var bold = document.createElement("b");
                bold.appendChild(document.createTextNode("Number of Gists: "));
                newCell5.appendChild(bold);
                newCell5.appendChild(newText5);
            }
        }
    }).catch(function() {
        console.log("error");
    });
};


// Function to return the user's repo information 
const fetchRepos = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}/repos?client_id=${client_id}&
    client_secret=${client_secret}`)

    const data = await api_call.json();
    return { data }
};

// Function to get the user's repo information by calling fetchRepos()
const showRepos = () => {
    var inputValue = document.querySelector(".searchValue");
    fetchRepos(inputValue.value)
    .then((data) => {
        console.log(data);
        // Display the User Repos tag if the data returned wasn't empty
        if (data.data[0].name != null) {
            console.log(data.data);
            element_counter = 0;
            var table = document.getElementById('myTable');
            
            var h = document.getElementById("p2");
            var bold = document.createElement("b");
            bold.appendChild(document.createTextNode("User Repos:"));
            h.appendChild(bold);

            // Loop to iterate over each element in the repo array snd display the element's name and description
            data.data.forEach(element => {

                var tbody = '';
                tbody += '<tr>';
                tbody += '<td>';
                tbody += '<td>';
                tbody += '</td>';

                let newRow = table.insertRow(-1);
                let newCell = newRow.insertCell(-1);

                var bold = document.createElement("b");
                bold.appendChild(document.createTextNode("Name: "));
                newCell.appendChild(bold);
                let newText = document.createTextNode(element.name);
                var br = document.createElement("br");
                var linebreak = document.createElement('br');

                newCell.appendChild(newText);
                newCell.appendChild(linebreak);
                newCell.appendChild(br);
            
                // If the repo has no description, only display the repo name
                if (element.description != null) {
                    var bold2 = document.createElement("b");
                    bold2.appendChild(document.createTextNode("Description: "));
                    newCell.appendChild(bold2);
                    let newText2 = document.createTextNode(element.description);
                    newCell.appendChild(newText2);
                }
                element_counter++;
                
                // If there has been more than 5 repos, make the class scrollable
                if (element_counter > 5) {
                    table.setAttribute("class", "scrollable");
                }
                
            });
        }

    }).catch(function() {
        console.log("error");
    });
}

// Function called when the user searches for a github username
function fetchGithub() {
    // Function to check if the user doesn't enter any illegal characters and if the user has previously searched
    validation = validateForm();
    if (validation != "false" && validation <= 1) {
        showData();
        showRepos();
    }
}

// Function to check user hasn't prevoiously 
function validateForm() {
    var user = 0;
    var search_counter = 0;
    
    search_counter++;
    return search_counter;
}