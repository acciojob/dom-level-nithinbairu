//your JS code here. If required.
const listItems = document.querySelectorAll("ul li");

// Convert NodeList to array and find index of item with an id
const index = Array.from(listItems).findIndex(item => item.id);
alert("The level of th element is: "+index)