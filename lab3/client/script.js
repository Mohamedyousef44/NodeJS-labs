

let inputs = document.querySelectorAll('.types input')
let username = inputs[0]
let email = inputs[1]
let address = inputs[2]
let phone = inputs[3]

let btn = document.querySelector('.form-footer button')
let form = document.querySelector('form')


// form validation 

function emailValidation(email){

    let pattern = /(^\w+)([\.\-_]\w*)*?[@]([a-z]{1,})\.([a-z]{1,})/;
    return pattern.test(email)

}

function phoneValidation(phone){

    let pattern = /\d{11}/;
    return pattern.test(phone)

}




form.addEventListener('submit' , function(e){

    if(username.value == "" || email.value == "" || phone.value == "" || address.value == ""  ){
        e.preventDefault();
    }

})


