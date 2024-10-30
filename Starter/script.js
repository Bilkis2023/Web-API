var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// create order list elements
var listEl = document.createElement("ol");
// crate ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li"); 


h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten";
nameEl.textContent = "His name is Miluw";
favoriteEl.textContent = "My favorite foods are here:"
// Add text content for the list items
li1.textContent = "Apples:";
li2.textContent = "Milk:";
li3.textContent = "Fish:";
li4.textContent = "Dumplings:";


body.appendChild(h1El);
body.appendChild(infoEl);
body.appendChild(imgEl);
body.appendChild(kittenEl);
body.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append order list
favoriteEl.appendChild(listEl);
// Append list items to order list element
favoriteEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);




h1El.setAttribute("style", "margin:50px; width:50%, text-align:center;");
infoEl.setAttribute("style","margin:auto; width:50%, text-align:center;");
imgEl.setAttribute("src", "../images/kittys.png");
// imgEl.setAttribute("src", "/images/grey-kitty.png");
nameEl.setAttribute("style", "font-size: 25px; text-align:center;");
kittenEl.setAttribute("style", "font-size: 25px; text-align: center;");
favoriteEl.setAttribute("style","font-size:20px;");
// Add styling to list element
listEl.setAttribute("style", "background:#333333; padding:30px;");
// Add styling to the list items
li1.setAttribute("style", "color:yellow; background:#666666; padding:5px; margic-left:35px;");
li2.setAttribute("style", "color:yellow; background:#777777; padding:5px; margic-left:35px;");
li3.setAttribute("style", "color:yellow; background:#888888; padding:5px; margic-left:35px;");
li4.setAttribute("style", "color:yellow; background:#999999; padding:5px; margic-left:35px;");


