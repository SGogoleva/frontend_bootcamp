// JavaScript – forEachDOM
// The following exercise contains the following subjects:
// ● DOM
// ● foreach
// Instructions
// You get an array of objects of users from your database:
const users = [
{
id: 167464,
firstName: "Jimmy",
lastName: "Arnold",
email: "jimmya@gmail.com",
},
{
id: 578447,
firstName: "Martha",
lastName: "Goldman",
email: "gold@hotmail.com",
},
{
id: 864578,
firstName: "Tim",
lastName: "Burton",
email: "timmy.hotmail.com",
},
];
// 1. Loop over the array with the forEach method and
// dynamically create an ordered list of the first and last
// names of the objects.
// 2. Remove the bullet points of the ordered list with
// JavaScript.
// 3. Create a custom data attribute called “data-id” and attach
// the id value to each li.
// Your markup should look like this:

const newUl = document.createElement('ul')
newUl.className = "users_list"

users.forEach((dict) => {
    for(let i in dict) {
        if(i == 'firstName') {
            const liElement = document.createElement('li')
            liElement.setAttribute('data-id', dict['id'])
            liElement.textContent = dict[i]
            newUl.appendChild(liElement)
        }
        if(i == 'lastName') {
            const liElement = document.createElement('li')
            liElement.setAttribute('data-id', dict['id'])
            liElement.textContent = dict[i]
            newUl.appendChild(liElement)
        }
    }
})
newUl.style.listStyleType = 'none'
document.querySelector('body').appendChild(newUl)
console.log(newUl)