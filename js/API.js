
fetch(`https://api.sampleapis.com/coffee/hot`)

// handle response
// .then() is promisin method
// giving instructions to mke sure they understand what brings back from github
.then(response => response.json())

// handle JSON data
.then(data => {
        console.log(data);

// store items
const items = data;

// display items in list
// just finding "latte", then "ul" 
const drinkName = document.getElementById('latte');
const drinkList = drinkName.querySelector('ul');

// loop over items
// create list item 
items.forEach(item => {
        console.log(item.title);

        // to create "li"
        const hotDrink = document.createElement('li');

        // set innerText for hot drink
        // item.title is the name of thing i want to write down
        hotDrink.innerText = item.title;

        // append project to drink list
        drinkList.appendChild(hotDrink);
        });
})
 
// handle errors
.catch(error => {
        console.error('Error fetching data:', error);
        // Displaying an error message to the user
        drinkList.innerText = 'Error fetching data. Please try again later.';
});

fetch(`https://api.sampleapis.com/coffee/iced`)

.then(response => response.json())

// handle JSON data
.then(data => {
        console.log(data);

const products = data;

// display items in list
// finding "coldbrew", then "ul" 
const nameOfDrink = document.getElementById('coldbrew');
const listOfDrink = nameOfDrink.querySelector('ul');


products.forEach(product => {
        console.log('list of cold drink',product.title);

        
        const coldDrink = document.createElement('li');

        
        coldDrink.innerText = product.title;

        
        listOfDrink.appendChild(coldDrink);
        });
})
 
// handle errors
.catch(error => {
        console.error('Error fetching data:', error);
        // Displaying an error message to the user
        listOfDrink.innerText = 'Error fetching data. Please try again later.';
});

