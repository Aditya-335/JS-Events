//challenge 1//
window.onload = function () {
    var name = document.getElementById('user');
    name.innerText = 'Aditya';
  };
  
  //challenge 2//
  const buttons = document.getElementById('btn-click');
  buttons.onclick = function () {
    buttons.style.background = 'orange';
  };
  
  //challenge 3//
  // Create a function named makeSentence
  function makeSentence() {
    // Get the values of the input elements by their ids
    let noun = document.getElementById("noun").value;
    let verb = document.getElementById("verb").value;
    let adverb = document.getElementById("adverb").value;
    // Make a sentence by concatenating the values with spaces
    let sentence = noun + " " + verb + " " + adverb;
    // Get the div element by its id
    let statement = document.getElementById("statement");
    // Set the innerHTML of the div element to the sentence
    statement.innerHTML = sentence;
  }
  
  // Get the button element by its id
  let button = document.getElementById("build-button");
  // Add an event listener to the button element
  button.addEventListener("click", makeSentence);
  
  //challenge 4.1 Event bubbling//
  const grandparent=document.getElementById('grandparent');
  const parent=document.getElementById('parent');
  const child=document.getElementById('child');
  child.addEventListener("click",  function(){
    console.log("Child clicked");
  });
  
  parent.addEventListener("click", function(){
    console.log("Parent clicked");
  });
  
  grandparent.addEventListener("click", function(){
    console.log("Grandparent clicked");
  });
    
  //challenge 4.2 Event capturing//
  grandparent.addEventListener("click", function() {
    console.log("Grandparent clicked");
  }, true);
  
  parent.addEventListener("click", function() {
    console.log("Parent clicked");
  }, true);
  
  child.addEventListener("click", function(){
    console.log("Child clicked ");
  }, true);
  
  //challenge 5//
  const category=document.getElementById("category");
  category.addEventListener("click", function(event){
    if(event.target.id==="blazers");
    console.log("blazers");
  });
  