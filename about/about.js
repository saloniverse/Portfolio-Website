// let accordian = document.querySelectorAll(".accordian h3");
// accordian.forEach((element) => {
//   element.addEventListener("click", () => {
//     let para = element.nextElementSibling;
//     if (para.style.display === "block") {
//       para.style.display = "none";
//     } else {
//       para.style.display = "block";
//     }
//   });
// });

// Task 1

// const heading = document.querySelectorAll(".accordian h3");
// for (let i = 0; i < heading.length; i++){
//   heading[i].style.backgroundColor = "#dadaf8";
// }
// const paragraph = document.querySelectorAll(".accordian p");
// for (let i = 0; i < paragraph.length; i++){
//   paragraph[i].style.backgroundColor = "#eeeeff";
// }

// Or,
// heading.forEach(element) => {element.style.backgroundColor = "#dadaf8";}
// paragraph.forEach(element) => {element.style.backgroundColor = "#eeeeff";}


// Task 2
const myAccordian = `
<h3>Skills</h3>
<p>I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.</p>
`;
const myNewDiv = document.createElement("div");
myNewDiv.className = "accordian";
myNewDiv.innerHTML = myAccordian;
const element = document.querySelector(".accordian-wrapper");
element.appendChild(myNewDiv);

let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

const heading = document.querySelectorAll(".accordian h3");
for (let i = 0; i < heading.length; i++){
  heading[i].style.backgroundColor = "#dadaf8";
}
const paragraph = document.querySelectorAll(".accordian p");
for (let i = 0; i < paragraph.length; i++){
  paragraph[i].style.backgroundColor = "#eeeeff";
}