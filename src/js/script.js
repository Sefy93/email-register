
const form = document.querySelector('form')
const erro = document.querySelector('#valid')
const main = document.querySelector('main')
const checked = document.querySelector('.check')
const text = document.querySelector('.text')
const dismiss = document.querySelector('#dismiss')


form.addEventListener('submit', (event)=>{
    const email = document.querySelector('#email')
    console.log("hello");
    console.log(email.value);
if(email.value == '' || validatorEmail(email.value) !== true){
    erro.style.display = "block"
}else{
    text.innerText = email.value; 
    erro.style.display = "none";
    main.style.display = "none";
    checked.style.display = "block"
}

    email.value = "";
    event.preventDefault();
})




function validatorEmail(email){
    let emailRegex = /^[a-z0-9]+@[a-z0-9]+\.([a-z]+)?$/i;

    
    return emailRegex.test(email)
}

dismiss.addEventListener('click', ()=>{
    main.style.display = "block";
    checked.style.display = "none"
})