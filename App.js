let data;
let container = document.getElementById('posts-container')
///On page load
async function getData(){
    await fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(json => {
        data = json
    })    

    writeData()
}

function writeData(){
    let userNumbers = new Map()

    data.map(data => {
        ///creates new user div if not already created
        if(!userNumbers.has(data.userId)){
            userNumbers.set(data.userId, data.userId)
            ///creates elements
            let ulDiv = document.createElement('div')
            let ul = document.createElement('ul')
            let userName = document.createElement('p')

            ///gives class to ulDiv
            ulDiv.classList.add('ulDiv')
            ul.classList.add('hidden')
            userName.classList.add('username')

            ///sets ul id to userId
            ul.id = `user${data.userId}`

            ///Adds username text
            userName.innerText = ul.id

            ///onclick function
            userName.onclick = () => {toggleUser(`user${data.userId}`)}



            ///appends to the page
            container.append(ulDiv)
            ulDiv.append(userName)
            ulDiv.append(ul)
        }

        ///Creates li element
        let liElement = document.createElement('li')
        liElement.classList.add("single-element")
        liElement.innerText = (data.title)

        ///appends element
        document.getElementById(`user${data.userId}`).append(liElement)
    })
}

///Functtion to show or hide user posts when clicking on their username
function toggleUser(userId){
    if(document.getElementById(userId).classList.contains('hidden')){
        document.getElementById(userId).classList.remove('hidden')
    }else{
        document.getElementById(userId).classList.add('hidden')
    }
}