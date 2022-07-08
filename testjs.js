async function facts(){
    const dugme=document.getElementById("dugme")
    const response = await fetch("https://catfact.ninja/facts")
    const response2 = await response.json()
      const  response3=response2.data
         response3.forEach((el) => {
        element=document.createElement("p")
         element.innerText=el.fact
         dugme.appendChild(element)
        });
}

console.log(facts());


// async function some(){
//     const dugme=document.getElementById("dugme")
//     const response = await fetch("https://catfact.ninja/facts")
//     const response2 = await response.json()
//     console.log(response2);
    
// }

// console.log(some());
async function facts(){
    const dugme=document.getElementById("dugme")
    const response = await fetch("https://catfact.ninja/facts")
    const response2 = await response.json()
      const  response3=response2.data
         response3.forEach((el) => {
        element=document.createElement("p")
         element.innerText=el.fact
         dugme.appendChild(element)
        });
}

console.log(facts());