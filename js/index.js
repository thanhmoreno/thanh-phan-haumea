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

// Create a variable named messageForm that uses "DOM Selection" to select the "leave_message" form by name attribute
const messageForm = document.querySelector('form[name="leave_message"]');

// add EventListener to messageForm
// add preventDefault form submission behavior
messageForm.addEventListener('submit', function(event) {
        event.preventDefault();

// create three new varibles and retrieve the value
        const usersName = event.target.usersName.value;
        const usersEmail = event.target.usersEmail.value;
        const usersMessage = event.target.usersMessage.value;

// add console.log statement 
        console.log(usersName);
        console.log(usersEmail);
        console.log(usersMessage);

// create variable named messageSection
        const messageSection = document.querySelector('#messages');
        console.log(messageSection);

// create variable named messageList to query messageSection
        const messageList = messageSection.querySelector('ul');

// create variable named newMessage make new list
//
        const newMessage = document.createElement('li');
        newMessage.innerHTML = '<a href="mailto:' + usersEmail + '">' + usersName + '</a> <span>' + usersMessage + '</span>';

// create variable removeButton make new button
        const removeButton = document.createElement('button');

// set type attribute to "button"
        removeButton.type = 'button';

// set inner text to "remove"
        removeButton.innerText = 'remove';

// add event listenser to removeButton
        removeButton.addEventListener('click', function(event) {

// create variable named entry
            const entry = removeButton.parentNode; //parentNode property

// add remove method
            entry.remove();  
        });

// append removeButton to newMessage
        newMessage.appendChild(removeButton);

// append newMessage to messageList
        messageList.appendChild(newMessage);

// add a reset method
        messageForm.reset();
});

