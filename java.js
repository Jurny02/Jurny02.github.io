const nazwa = document.getElementById("nazwa")
const temat = document.getElementById("temat")
const email = document.getElementById("email")
const tresc = document.getElementById("tresc")
const form  = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e)=>{
    let messages = []
    if (nazwa.value === '' || nazwa.value == null){
        messages.push("Nazwa użytkownika jest konieczna")
    }
    if (temat.value === '' || temat.value == null){
        messages.push("Nazwa użytkownika jest konieczna")
    }
    if (tresc.value === '' || tresc.value == null){
        messages.push("tresc użytkownika jest konieczna")
    }
    if(!(ValidateEmail(email.value)) )
    {
        messages.push("Błędny Emial")
    }
    if (messages.length > 0)
    {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    
})
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }

    return (false)
}