// const main=document.getElementById("main");
// novi=document.createElement("h1")
// novi.innerText="amin"
// main.appendChild(novi)
// console.log("Ss");

// function myfunction(){
//   const button=document.querySelector("button")
//   button.classList.add("buttonhover")
//   button.style.backgroundColor="red"
//   const klasa="buttonhover"
//   button.classList.toggle("button")
// }

// function some(){
//     const main=document.getElementsByClassName(".div1")    
// }

// async function klick(){
//     const main=document.getElementById("but3")
//      const response=await fetch("https://jsonplaceholder.typicode.com/users")
//     const response2=await response.json()
//     response2.forEach((user)=>{
//     var element=document.createElement("h1")
//     element.innerText=user.name
//     main.appendChild(element)
//     })
//   }

// const input =document.getElementById("name")
// input.addEventListener("change",inputHandler())
// function inputHandler(){
//   console.log("some");
// }

forma=document.getElementById("form")
email=document.getElementById("email")
namea=document.getElementById("name")
username=document.getElementById("username")
password=document.getElementById("password")
const reqbody={}

forma.addEventListener("submit",(e)=>{
  e.preventDefault();
  reqbody.email=email.value
  reqbody.namea=namea.value
  reqbody.username=username.value
  reqbody.password=password.value
  fetch("http://serene-fortres-45917.herokuapp.com/v1/aturj/signup",{
    method:"POST",
    body:JSON.stringify(reqbody),
})
.then((res)=>{
  return res.json()
})
.then((response)=>{
  console.log(response);
})

})


