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

// forma = document.getElementById("form");
// email = document.getElementById("email");
// namea = document.getElementById("name");
// password = document.getElementById("password");
// username = document.getElementById("username");

// const reqBody = {};

// forma.addEventListener("submit", (e) => {
//   e.preventDefault();
//   reqBody.email = email.value;
//   reqBody.name = namea.value;
//   reqBody.password = password.value;
//   reqBody.username = username.value;

//   fetch("http://serene-fortress-45917.herokuapp.com/v1/auth/signup", {
//     method: "POST",
//     body: JSON.stringify(reqBody),
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .then((response) => {
//       console.log(response);
//     });
// });

// async function myclick(){
//     const main=document.getElementById("dugme")
//      const response=await fetch("https://jsonplaceholder.typicode.com/users")
//     const response2=await response.json()
//     response2.forEach((user)=>{
//     var element=document.createElement("h1")
//     element.style.fontSize="30px"
//     element.innerText=user.name
//     main.appendChild(element)
//     })
//   }

//   async function getsome(){
//       const but2=document.getElementById("dugme2")
//  const response=await fetch("https://jsonplaceholder.typicode.com/users")
//  const response2=await response.json()
//  const a=response2.map((el)=>{
//     element=document.createElement("h2")
//     element.innerText=el.name
//     but2.appendChild(element)
//  })
 
// }

// async function myfunction(){
//     const main=document.getElementById("but3")
//      const response=await fetch("https://jsonplaceholder.typicode.com/users")
//     const response2=await response.json()
//     response2.forEach((user)=>{
//     var element=document.createElement("h1")
//     element.innerText=user.name
//     main.appendChild(element)
//     })

// }

// async function myfunction(){
//   const but3=document.getElementById("but3")
//   but3.style.backgroundColor="red"
//   const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];
//    const filter=numbers.filter((el)=>{
//      return el%2===0
//    })
//    console.log(filter);
// }



// function  nesto(name){
//    a= name.split('')
//    b=a.shift().toUpperCase()
//    return b+ a.join('')

// }

// console.log(nesto("amin"))

// numbers=[1,2,3,45,6,66,74,34,23,5,7,9]
// numbers2=[2,3,65,7,88,43,5646,453,23,43]

// ar=[]

// for(i=0;i<numbers.length;i++){
//    for(j=0;j<numbers2.length;j++){
//       if(numbers[i]===numbers2[j]){
//          ar.push(numbers[i])
//       }
//    }
// }
// console.log("ovi brojevu su isti",ar.join(' '));

// async function users(){
//    const dugme=document.getElementById('dugme')
//    const response=await fetch("https://jsonplaceholder.typicode.com/users")
//    const response2=await response.json()
//     response2.forEach((el) => {
//         element=document.createElement("h1")
//         element.innerText=el.name
//         dugme.appendChild(element)
//     });
// }

// 




// const numbers=[45,4,25,13,38,29]
// const b= numbers.map((el)=>{
//     return el**2
// })
// console.log(b)


//  function num(numbers){
//      return numbers.filter((el)=> el>18)
//  }
//  console.log(num([45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29]));



// function number(num){
// const a=num.map((el)=>{
//     return el**2
// })
// return a

// }

// let x=number([1,2,3,4])
// console.log(x);

// function average(){
//     let sum=0
//     const num=[[1,2,3,4,5],[1,3]]
//     for(i=0;i<num[0].length;i++){
//         sum+=num[0][i]
//     }
//     let sum2=0
//     for(i=0;i<num[1].length;i++){
//         sum2+=num[1][i]
//     }
//     return Math.floor((sum+sum2)/num.length)
  
  
// }


// function moveZeros(arr) {
//    for(i=0;i<arr.length;i++){
//       if(arr[i]===0){
//              arr.splice(i,1)
//              arr.unshift(0)
//       }
// }
// return arr
// }
// console.log(moveZeros([false,1,0,1,2,0,1,0,3,"a",0]));

console.log("hello");
