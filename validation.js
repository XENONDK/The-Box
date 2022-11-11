let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");
let textarea = document.querySelector("#msg")
let submit = document.querySelector("#submit")
let form = document.querySelector("#contact-form")

form.addEventListener("submit", function(event){
    event.preventDefault()
    if(inputName.value == "") {
        alert("no name submitted")
    }  

if(inputEmail.value == ""){
    alert("no email submitted")
}

if (textarea.value == ""){
    alert("empty message")
}

})