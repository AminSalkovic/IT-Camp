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


const a={
    name:"amin",
    suranme:"salkovic",
    age:18,
}
const b={...a,}
b.age=28

const c={...a,}
c.name="saki",c.age=26


console.log(a)
console.log(b)
console.log(c)