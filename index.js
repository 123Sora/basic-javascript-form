// const ul = document.querySelector(".items")

// // ul.remove() //remove all ul tag
// // ul.lastElementChild.remove() // remove the last li in ul tag
// ul.firstElementChild.textContent = "Hello" // change content of li from item 1 to hello
// ul.children[1].innerHTML = "Peace"
// ul.lastElementChild.innerHTML = "<h2>Hello</h2>"

// const btn = document.querySelector(".btn")
// btn.style.background = "red"

// const btn = document.querySelector(".btn")

// btn.addEventListener("click", (e) =>{
//     e.preventDefault()
//     document.querySelector("#my-form").style.background = "#ccc"
// })
const myForm = document.querySelector("#my-form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const msg = document.querySelector(".msg")
const userList = document.querySelector("#users")

myForm.addEventListener("submit",onSubmit)

function onSubmit(e){
    e.preventDefault();
    
    if(nameInput.value === "" || emailInput.value === ""){
        msg.classList.add("error")
        msg.innerHTML = "Please enter all fields "
        setTimeout(() => msg.remove(0),3000)
    }else{
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(`
            Name : ${nameInput.value},  
            Email:${emailInput.value}
        `))

        userList.appendChild(li)

        //create fields 
        nameInput.value = ""
        emailInput.value= ""
    }
}