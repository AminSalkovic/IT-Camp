
// function vezba(ime){
//  return ime.split('').reverse().join('')

// }

// // console.log(vezba("")) 

// function vezba(ime){
//     const arr=ime.split('')
//     const f=arr[0][0].toUpperCase()
//     const p=arr[1][0].toUpperCase()
//     const newString=f+"."+p
//     return newString
//  }
// console.log(vezba("amin")) 



// function domaci(str){
//   for(i=0;i<str.length;i++){
//       if(str[i]!== ""){
//           str.splice(i,1)
//       }
//     }
//     return str.join(' ')
// }
// console.log(domaci(["Saki",1,"sasdad",2,"amin",4,"amco"]))


// function numbers(a,b){
//   ar=[]
//    for(i=0;i<a.length;i++){
//      for(j=0;j<b.length;j++){
//        if(a[i]===b[j]){
//          ar.push(a[i])
//        }
//      }
//    }
//    return "ovo su isti brojevi"+" "+ ar.join(' ')
//  }
//  let x=numbers([1,2,34,5465,5656,4443,223,4],[23,3232,422,2,3232,4,1])
//  console.log(x)


// function sas(){
//    data=[3,21,32,36,37,56,8,12,16,18,20,68,69]
//   unos=parseInt(prompt("index kojeg broja zelite da znate"))
//   for(i=0;i<data.length;i++){
//     if(data[i]=== unos){
//       return  a="vas broj je na indexu"+" "+i
//     }
//   }
 
// } 

// console.log(sas())

// var library=[

//     {
//         autor:"bill gates",
//         title: "the road ahead",
//         readingStatus: true,
//     },
//     {
//         autor:"steve",
//         title: "walter",
//         readingStatus: true,
//     },
//     {
//         autor:"suzane",
//         title: "the road aheasdsdsdsdsdd",
//         readingStatus: false,
//     }
// ]


// for(let i=0;i<library.length;i++){
//     console.log(library[i].autor,library[i].readingStatus)
// }
// function user(){

//     const osoba={}  

//         osoba.ime=prompt("unesi ime")
//         osoba. prezime=prompt("unesi prezime")
//         osoba. god=parseInt(prompt("unesi god"))
//         osoba. visina=prompt("unesi visinu")
//         return osoba
// }
    
//   console.log(user());


// const car={
//     name:"audi",
//     model:"a7",
// };
// const keys=Object.keys(car);

// for(let key of keys){
//     console.log(car([keys]))
// }

// function user(){
//       const osoba={}  
//         osoba.ime=prompt("unesi ime")
//         osoba. prezime=prompt("unesi prezime")
//         osoba. god=parseInt(prompt("unesi god"))
//         osoba. visina=prompt("unesi visinu")
//         return osoba
// }
// console.log(user());



// function user(){
//     const car={
//         name:"bmw",
//         price:22123,
//         color:"black",
//     }
//     unos=prompt("what you want to know about car");
//       switch(unos){
//         case "name":
//             return car.name;
//         case "price":
//             return car.price;
//         case "color":
//             return car.color;
//         default:
//             return "pogresan unos"
            
//         }
// }
// console.log(user());
//==============================================domaci
// function num(){
//    const number={ a:1,b:2,}
//     delete number.b;
//    return number
// }
// console.log(num());


//==============================================================;;;;;

// function  space(s){
//    if(s[0]===" " || s[s.length-1]===" "){
//        return false
//    }
//     for(i=0;i<s.length-1;i++){
//         if(s[i]===" "){
//             if(s[i]===" "){
//                 return false
//             }
//         }
//     }
//    return true
// }
// console.log(space("sa ss"))
//============================///////====

// function pyramid(balls) {
//     brojac=0
//     while(balls>=brojac+1){
//       brojac++
//       balls=balls-brojac
//     }
//       return brojac
//   } 



// console.log(pyramid(100))

// function num(){
//    const number={ a:1,b:2,}
//     delete number.b;
//    return number
// }
// console.log(num());

// function korisnici(ages){
//     const users=[
//         {
//            name:"amin",surname:"salkovic",age:18,
//         },
//         {
//             name:"saki",surname:"saki",age:20,
//          },
//          {
//             name:"saki",surname:"salkan",age:18,
//          },
//          {
//             name:"nesto",surname:"nista",age:32,
//          },
//     ]
//      const ar=[]
//     for(i=0;i<users.length;i++){
//         if(users[i].age===ages){
            
//             ar.push(users[i])
//         }
//     }
//     return [ar]
// }
// let x=korisnici(18)
// console.log(x)


// const a={
//     name:"amin",
//     suranme:"salkovic",
//     age:18,
// }
// const b={...a,}
// b.age=28

// const c={...a,}
// c.name="saki",c.age=26


// console.log(a)
// console.log(b)
// console.log(c)

// const data={
//     a:1,
//     b:2
// }
// keys=Object.keys(data)
// const arr=[]
// for(el of keys){
//     arr.push([el,data[el]])
// }
// console.log(arr)

// function  num(num){
//    arr=[];
//    num.forEach((el) => {
//       if(el>4){
//         arr.push(el)
//       }
//    });
//    return arr
// }
// let x=num([1,2,3,4,5,6,7,8,9,10])
// console.log(x)


// function  rec(word){
//    return word.split('').reverse().join('')
   
// }
// let x=rec("saki")
// console.log(x)

// const num=[1,2,3,4,5,6,7,8,9,10];
// arr=[];
// num.forEach((el)=>{
//     if(el>4){
//        arr.push(el)
//     }
    
// });
//    console.log(arr)

