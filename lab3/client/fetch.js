
let DisplayAllBtn = document.querySelector('.container button');

let dataContainer = document.querySelector('#data')

function createElement(key,value){

    let p = document.createElement('p')

    p.innerText = `${key} : ` ;

    let span = document.createElement('span')

    span.innerText = value

    p.appendChild(span)

    dataContainer.appendChild(p)

}


DisplayAllBtn.addEventListener('click' , function(){

    fetch('http://localhost:7000/clients.json')

    .then((response)=>{

        if(response.ok === false){

            throw new Error(response.status)

        }else{

            return response.json();

        }

    })

    .then((data)=>{

        dataContainer.innerHTML = ""
        createElement( 'user name', data[0].username)
        createElement( 'email', data[0].email)
        createElement('address',data[0].address)
        createElement('Phone',data[0].phone)

    })

    .catch((err)=>{

        console.log(err)

    })
})