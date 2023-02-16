// Task - 1

const mynewlist = document.createElement("li"); // This code creates a new <li> element:
mynewlist.innerHTML = "<a>Hire Me</a>"; // This code will add inner HTML to that new created <li> element
// Finally in below two lines we're appending the new element to an existing element
const element = document.querySelector("nav ul"); // This code finds our existing element i.e., <ul>
element.appendChild(mynewlist); // This code appends the new element to the existing element


// Task - 2

const element2 = document.querySelector(".search-field input");
element2.setAttribute("placeholder", "Search My Project");


// Task - 3

const element3 = document.querySelector(".hero-left-section p span:nth-of-type(2)");
element3.textContent = "an Employee"; 

const element4 = document.querySelector(".hero-left-section p span:last-child");
element4.textContent = "iNeuron Intelligence Pvt Ltd";

// Or
// let element3 = document.querySelectorAll(".hero-left-section p span");
// element3[1].innerText = "an Employee";
// element3[2].innerText = "iNeuron Intelligence Pvt Ltd";

// Task - 4

const element5 = document.querySelector(".hero-right-section img");
element5.setAttribute("src", "./DOM1/person-image.jpg");


// Task - 5

const mynewbutton = document.createElement("button");
mynewbutton.textContent = "Support Me";
// Another way to add text content is by creating a text node
// const node = document.createTextNode("Support Me"); // To add text to the <button> element, we're creating a text node first.
// mynewbutton.appendChild(node); // Then we're appending the text node to the <button> element
const element6 = document.querySelector(".hero-right-section-btns");
element6.appendChild(mynewbutton);