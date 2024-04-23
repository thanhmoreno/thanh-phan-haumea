// using appendChild to add something new to the bottom
let body = document.body;
let footerElement = document.createElement("footer");
body.appendChild(footerElement); // program add elements to html

// create a variable named today
let today = new Date();

// create a varible named thisYear
let thisYear = today.getFullYear();

// create a varible named footer
let footer = document.querySelector("footer");

// create a varible named copyright
let copyright = document.createElement("p");

// inner HTML of copyright elements
copyright.innerHTML = "Nancy Phan &copy; " + thisYear;

// append the copyright element 
footer.appendChild(copyright);

// list of technical skills
let arrayOfSkills = ["JavaScript", "HTML", "CSS", "Algorithms", "GitHub"];

// create a variable named skillsSection
let skillsSection = document.querySelector("#skills"); // select the element with the ID

// create a varible named skillsList
let skillsList = document.querySelector("ul");

// 1. create a for loop of skills Arrays
// 2. create a varible named skill to create new list item (li)
// 3. use skill variable set inner text to current array element
// 4. append skill element to skillsList element
for ( let i = 0; i < arrayOfSkills.length; i++) {
        let skill = document.createElement("li");
        skill.textContent = arrayOfSkills[i];
        skillsList.appendChild(skill);
}   

