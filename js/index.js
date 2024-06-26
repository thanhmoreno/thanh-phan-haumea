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
copyright.innerHTML = "Thanh Phan &copy; " + thisYear;

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

// fetch github repositories
// its the newest version of code that other people been using 
// its sending message to github, bringing all the cool code home and find out what projects i am working on!
const githubUsername = "thanhmoreno";
fetch(`https://api.github.com/users/${githubUsername}/repos`)

// handle response
// .then() is promisin method
// giving instructions to mke sure they understand what brings back from github
.then(response => response.json())

// handle JSON data
.then(data => {
        console.log(data);

// store repositories
const repositories = data;

// display repositories in list
// just finding "project", then "ul" 
const projectSection = document.getElementById('project');
const projectList = projectSection.querySelector('ul');

// loop over repositorie
// create list item for each repo
repositories.forEach(repository => {
        console.log(repository.name);

        // to create "li"
        const project = document.createElement('li');

        // set innerText for repo name
        // repository.name is the name of thing i want to write down
        project.innerText = repository.name;

        // append project to projectList
        projectList.appendChild(project);
        });
})
 
// handle errors
.catch(error => {
        console.error('Error fetching data:', error);
        // Displaying an error message to the user
        projectList.innerText = 'Error fetching data. Please try again later.';
});


fetch(`https://api.sampleapis.com/coffee/hot`)
.then(response => response.json())

// handle JSON data
.then(data => {
        console.log(data);
})