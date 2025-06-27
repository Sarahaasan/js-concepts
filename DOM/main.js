
// 🌐 DOM (Document Object Model) Manipulation
// The DOM allows JavaScript to interact with HTML and CSS dynamically.
// By selecting elements, modifying content, and applying styles, developers can create interactive web applications.

// 📝 JavaScript accesses elements in the document (HTML page) and creates an object containing all its properties and content.
// Example:
// let h2 = {
//     classList: "...",
//     id: "...",
//     style: "...",
//     ...
// };

//-----------------------------------------------------------------------------------------------------------------------------------

// 🎯 Methods for Selecting Elements:

// 1️⃣ getElementById() → Selects an element by its ID
const title = document.getElementById("main-title");
console.log(title); // Logs the element with id="main-title"  

// 2️⃣ getElementsByClassName() → Selects all elements with a specific class name (returns an HTMLCollection)
const items = document.getElementsByClassName("item");
console.log(items);   // Returns an HTMLCollection (explained later)
console.log(items[0]); // Returns the first element with this className  

// 3️⃣ getElementsByTagName() → Selects elements by their tag name (e.g., <p>, <div>)
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs); // Returns an HTMLCollection
console.log(paragraphs[0]);
console.log(paragraphs.length); // Logs the number of <p> elements

// 4️⃣ querySelector() → Selects the first matching element using a CSS selector
const firstItem = document.querySelector(".item");
console.log(firstItem); // Logs the first element with class="item"

// 5️⃣ querySelectorAll() → Selects all matching elements as a NodeList
const allItems = document.querySelectorAll(".item");
console.log(allItems); // Logs a NodeList of elements with class="item"

// 🔍 Comparing HTMLCollection & NodeList:

// 📌 HTMLCollection:
// ✅ is an  array-like-object  of elements  
// ✅  we cannot perfrom array methods on it 
// ✅  iterable but not  with forEach() (unless converted to an array). 
// ✅ Can be accessed by index and has a length property.
// ✅ Live Collection → Updates automatically if elements in the DOM change.
// ✅ Returned by getElementsByTagName() & getElementsByClassName().

// 📌 NodeList:
// ✅ Array-like object containing nodes (elements, text, comments, etc.).
// ✅  aslo as html collection we cannot perform array methods on it
// ✅ Supports forEach() (if obtained from querySelectorAll()).
// ✅ Static → Does not update automatically when elements are added/removed.
// ✅ Returned by querySelectorAll() 

//-----------------------------------------------------------------------------------

// 🎯 Methods for Modifying Content:

// 1️⃣  Changing Inner Text (innerText)
// Modifies only the visible text content inside an element.
//What it is:
// innerText is a property that gets or sets the text content inside an HTML element.
// It does not include hidden elements or any text inside hidden elements (such as elements with display: none or visibility: hidden).
document.getElementById("main-title").innerText = "Updated Title";
// It only returns the visible text that is shown to the user, without any HTML tags like <b>, <p>, <div>, etc.
let content = document.getElementById("example").innerText;
console.log(content);    // Output: "Hello world!" without <strong>
document.getElementById("example").innerText= "bye"
console.log(document.querySelector(".text").innerText="<strong> hi </strong>")   //doesnot respect strong traet all as a string 
// It's useful when you want to read or change the visible text in an element.
//cautios ==> Read-Only in some browsers: Some browsers may not update innerText in real time (especially with dynamic content).

//2️⃣  Changing Inner HTML (innerHTML)
// Modifies the HTML inside an element 
// (be cautious of security risks). When you use innerHTML to insert content from untrusted sources, it: Executes any embedded JavaScript within the content (e.g., <script>, onclick handlers, etc.). Can allow for code injection if you're not properly sanitizing the data before inserting it.

//Represents the HTML content inside an element, including all HTML tags and their attributes.
// It does not take into account CSS styling (i.e., even hidden elements can be retrieved).
// Can be used to change HTML content: You can use innerHTML to both read and modify the HTML structure inside the element.
document.getElementById("content").innerHTML = "<strong>Bold Text</strong>";
console.log(document.getElementById("content").innerHTML);
//Explanation: The innerHTML includes the HTML tags (<strong>) and returns the full HTML structure as a string.
//Use innerHTML when you need the full HTML structure or to modify it (like adding new tags).

//3️⃣ Changing Input Values (value)
// Used to modify input fields dynamically.
document.getElementById("name-input").value = "John Doe";

//-------------------------------------------------------------------------------------------------------------------
 // 🎯 Changing Styles
// JavaScript allows modifying CSS styles dynamically using the style property or CSS classes.
// 1. Modifying Individual Styles
document.getElementById("color").style.backgroundColor = "blue";
document.getElementById("content").style.fontSize = "20px";
document.getElementById("color").style.color="red";

//as a short hand property for styling ==>> cssText , text with cssTwxt is the same as css file ==> background-color not backgroundColor (js text)
document.getElementById("color").style.cssText = `
  color: yellow ;
  background-color: orange;
`
//------------------------------------------------------------------------------------------------------------------

// 🎯 Adding and Removing Classes
// Using classList.add(), classList.remove(), and classList.toggle() to manipulate CSS classes.
const element = document.getElementById("box");
element.classList.add("highlight"); // Adds a class

element.classList.remove("hidden"); // Removes a class

element.classList.toggle("active"); // Toggles the class on/off

console.log( element.classList.contains('my-class')	 );  //Checks if the class exists return true/false
//could be used with changing themes 
const theme = document.getElementById("theme");
theme.classList.toggle("dark-theme")  // ❌ al classlist functions work on one element not html collections or nodelists 

//⚠️ATTENTION ==> toggle ( add a class if it is not found and remove class if itis already found 
// if dark-mode class in prev ex 👆 is not exists toggle will add it but if it was a class already to elemt toggle willl remove it )
// unlike (.add) ==> add aclass regardless itis already found or not 
// theme.classList.toggle("dark-theme");
