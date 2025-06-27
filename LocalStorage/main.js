/* 
📦 What is localStorage?  
localStorage is a property that allows JavaScript sites and apps to save key-value pairs 
in a web browser with no expiration date. This means the data persists even after the 
user closes the browser or restarts the computer.  
It is a window object property.
*/

/* 
📝 Simple Explanation  
Put simply, localStorage is used for storing and retrieving data. While you can store 
small amounts of data, it’s not suitable for large datasets.  

localStorage is accessible to anyone who uses the device, so don’t store sensitive info.

You can use it to store user preferences, like language or theme, or cache frequently used data.

localStorage can store form data that won’t be lost if the user closes the browser.
*/

/*
🌐 Web Storage API  
The Web Storage API enables browsers to store key-value pairs, designed to be more intuitive than cookies.
*/

/*
✅ localStorage and Offline Access  
localStorage allows websites to store data locally on the user's browser, accessible even offline.  
It works on the client-side (in the browser).  

Data remains available regardless of network state until cleared.
*/

/*
✅ How localStorage Reduces Load Time  
1. No Need for Network Requests  
Accessing data from localStorage is almost instant, faster than fetching from an API.

2. Reduces Server Load  
Avoids frequent requests for repeated data, reducing latency and backend load.

3. Improves User Experience  
Faster UI rendering based on cached data, with offline support.
*/

/*
⚠️ Disadvantages  
- localStorage operations are synchronous; may cause slowdowns with large data.  
- Not suitable for sensitive data; device users can access it.  
- Only stores strings; other data types must be serialized.  
- Excessive data slows the application.
*/

/*
⚙️ localStorage Operations  
*/

// Add key and value
localStorage.setItem('name', 'Sara Hassan');

// Get value by key
const name = localStorage.getItem('name');

// Remove a specific key
localStorage.removeItem('name');

// Clear all storage
localStorage.clear();

// Get key by index
const firstKey = localStorage.key(0);

// Loop through all keys
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(`${key}: ${value}`);
}

/*
🧰 Storing Arrays or Objects  
Use JSON.stringify to store and JSON.parse to retrieve.
*/

const userArray = ["Obaseki", 25];
localStorage.setItem('user', JSON.stringify(userArray));

const userData = JSON.parse(localStorage.getItem('user'));
console.log(userData);

/*
🍪 localStorage vs. Cookies  

- localStorage: ~5MB storage, stays local, no expiration unless manually cleared.
- Cookies: ~4KB storage, sent with every HTTP request, can expire or delete on browser close.
- Cookies accessible across tabs/windows; localStorage scoped by protocol/domain.
*/
