//objekti
// var student={
//     name:"SAAss",
//     sclas:"VI",
//     rollno:12
// }
// const keys=Object.keys(student);

// console.log(keys.join(','))

// const student={
//     name:"SAAss",
//     sclas:"VI",
//     rollno:12
// }
// const keys=Object.keys(student);

// console.log(keys.length)
//=============================================='

// const students=[
//     {
//         name:"amco",
//         height:187,
//         age:21,
//         gender:"male"
//     },
//     {
//         name:"saki",
//         height:187,
//         age:19,
//         gender:"male"
//     },
//     {
//         name:"cmsm",
//         height:187,
//         age:5,
//         gender:"male"
//     },
//     {
//         name:"Salkan",
//         height:187,
//         age:41,
//         gender:"male"
//     },
//     {
//         name:"amin",
//         height:187,
//         age:6,
//         gender:"male"
//     }
// ]

// function studenti(students){
//     ar=[]
//     for(i=0;i<students.length;i++){
//         if(students[i].age>18){
//             ar.push(students[i])
//         }
//     }
//     return ar
// }

// console.log(studenti(students))
//==============================================


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

// const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];

// numbers.forEach((el) => {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];
// const evenNumbers = [];

// numbers.forEach((el) => {
//   if (el > 20) {
//     evenNumbers.push(el);
//   }
// });
// console.log(evenNumbers)


// let str = "the quick brown fox";

// let nStr = "";
// str = str.split("");
// str.forEach((el, i) => {
//   if (i % 2 === 0) {
//     nStr += el.toLowerCase();
//   } else {
//     nStr += el.toUpperCase();
//   }
// });

// console.log(nStr);

// const data = [NaN, 0, 15, false, -22, "", undefined, 47, null];
// let brojac = 0;
// data.forEach((el) => {
//   if (!Boolean(el)) {
//     brojac++;
//   }
// });
// console.log(brojac);


// const numbers=[2,3,4,5,67,7,89,7654];
// arr=[];
// numbers.forEach((el)=>{
//    if(el%2===0){
//       arr.push(el)
//    }
// });
// console.log(arr.join(','))



// const num=[1,2,3,4,5,6,7,8,9,10];
// arr=[];
// num.forEach((el)=>{
//     if(el>4){
//        arr.push(el)
//     }
    
// });
//    console.log(arr)


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

function users(){
  const user=[
     {name:"amin",age:18,},
     {name:"saki",age:25,},
     {name:"saki",age:30,},

  ] 
  user.forEach((el)=>{
     arr=[]
     if((el).age>20){
        arr.push(user(el))
      }
  })
  return arr
}
console.log(users())