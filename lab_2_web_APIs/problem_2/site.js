// Question 1 from Part 2
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    return response.json()
  })
  .then(data => {

    console.log("The following post titles have more than 6 words: ")

    // Map() to iterate over all elements and assign each element's title to the object, obj
    obj = data.map(book => {
      var newObj = book.title;
      return newObj;
    });

    // Iterating over each obj element to find which titles have more than 6 words
    obj.map(element => { 
      var spaceCount = (element.split(" ").length - 1);
      if (spaceCount >= 6) {
        console.log(element);
      }
    });
    
  });


// Question 2 from Part 2
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {

  // Map() is used to iterate over each element and assign the body attribute to newObj
  obj = data.map(book => {
    var newObj = book.body;
    return newObj;
  });
  
  // Calls the function to show a word frequency map
  parse(obj);

});

function parse(data)
{
  var bodys = [];
  
  for(var i=0; i < data.length; i++)
  {
    // Append each body element to the array, bodys
    bodys.push(data[i]); 
  }
  
  // Separating the body array into firstly, a string, then substrings.
  var x = bodys.toString();
  var ary = x.split(",").join(" ");
  var words = [];
  words = ary.split(" ");
  console.log("\n\nThe following shows a word frequency map for all the body contents of the posts: ")
  // Call the word count function and display the word frequency map
  console.log(getWordCntRd(words));
}

// function implemented to count the frequency of the word by using the reduce() method to reduce the array to a single value
function getWordCntRd(words) 
{
  return words.reduce((prev, nxt) => 
  {
    prev[nxt] = (prev[nxt] + 1) || 1;
    return prev;
  }, {});
  
}
