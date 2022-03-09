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

// const a=[1,2,3,4]

// const b = a.map((el,i)=>{
//    return el + i
// })
// console.log(b)


// const numbers=[45,4,25,13,38,29]

// const b= numbers.map((el)=>{
//     return el**2
// })
// console.log(b)

// function stringItUp(arr){
//    const a=arr.map((el)=>{
//         return el.toString()
//    })
//    return a
// }

// console.log(stringItUp([2,5,100]))

// function stringItUp(arr){
//        return arr.map((el)=>{
//             return el.toString()
//        })
       
//     }
    
//     console.log(stringItUp([2,5,100]))
//=================================================================
//slice je isekao ostatak posle prvog slova
// function capitalizeNames(arr){
//   return arr.map((el)=>{
//     el=el.toLowerCase();
//     el=el[0].toUpperCase()+ el.slice(1)
//     return el
//   })

// }
// console.log(capitalizeNames(["amin","saki","SALKAN","sasasasasas"]))



// function namesOnly(arr){
//       return arr.map((el)=>{
//           return el.name
//       })
// }
// console.log(namesOnly([
//     {
//       name:"Angelina Jolie",
//       age:80
//     },
//     {
//         name:"Eric Jones",
//         age:2
//       },
//       {
//         name:"Kayne West",
//         age:100
//       }
// ]));

// function namesOnly(arr){
//       return arr.map((el)=>{
//           if(el.age<18){
//               return el.name + " is under age"
//           }else{
//               return el.name + " can go to "
//           }
//       })
// }
// console.log(namesOnly([
//     {
//       name:"Angelina Jolie",
//       age:80
//     },
//     {
//         name:"Eric Jones",
//         age:2
//       },
//       {
//         name:"Kayne West",
//         age:100
//       }
// ]));


// function namesOnly(arr){
//       return arr.map((el)=>{
//           return ["<h1>",el.name,"</h1>","<h2>",el.age,"</h2>"]
//       })
// }
// console.log(namesOnly([
//     {
//       name:"Angelina Jolie",
//       age:80
//     },
//     {
//         name:"Eric Jones",
//         age:2
//       },
//       {
//         name:"Kayne West",
//         age:100
//       }
// ]));

// function names(arr){
//    arr= arr.split("")
//    const newArr= arr.map((el)=>{
//         return el[0]
//    })
//    return newArr.join(".")
// }
// console.log(names(["Amin Salkovic Amin Salkovic"]))



// function numbers(num){
//     for(i=1;i<num.length;i+=2){
//         num[i]*=2
//     }
//     return num
// }
// console.log(numbers([1,2,3,4,2,3]));
//===========================================
//fliter

// const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];

// const filtered=numbers.filter((el)=>{
//     return el > 18
// })

// console.log(filtered);

// const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];

// const filtered=numbers.filter((el)=>{
   
//     return el%2===0
// })
// console.log(filtered);

// function fiveAnd(arr){
//     const num=arr.filter((el)=>{
//         return el>5 
//     })
//     return num
// }
// console.log(fiveAnd([3,6,8,2]));


// function five(arr){
//    return arr.filter((el)=>{
//        return el.length<=5
//    })
// }

// console.log(["by"],["cat"],["wolf"],["family"],["camping"]);

// function people(arr){
//    return arr.filter((el)=>{
//        return el.member === true;
//    })
// }

// console.log(people([
//     {name:"amin",member:true},
//     {name:"kany",member:false},
//     {name:"eric",member:false},
//     {name:"hari",member:true},
//     {name:"msmdmsmsdm",member:true},
// ]));
//==================================================================

// function ofAge(arr){
//     return arr.filter((el)=> el.age>18)
//   }
//   console.log(ofAge([
//       { name: "Angelina Jolie", age: 80 },
//       { name: "Eric Jones", age: 2 },
//       { name: "Paris Hilton", age: 5 },
//       { name: "Kayne West", age: 16 },
//       { name: "Bob Ziroll", age: 100 }
//   ])); 

// function five(arr){
//    return arr.filter((el,i)=> !(i%2))

// }
// console.log(["by","cat","wolf","amily","camping"]);
//====


// const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];

// const paran=numbers.every((el)=> el%2===0)

// console.log(paran);
//===================================================


//====every
// const peoples=[

//     {name:"amin",member:true},
//     {name:"kany",member:false},
//     {name:"eric",member:false},
//     {name:"hari",member:true},
//     {name:"msmdmsmsdm",member:true},
// ]

// const  even=peoples.every((el)=> el.member===true)
// console.log(even);
//========================================================================SOME
// const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];

// const isany = numbers.some((el)=> el>18)

// console.log(isany);
//===========================
// const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];

// const isany = numbers.some((el)=> el%2===0)

// console.log(isany);



//  function num(numbers){
//      return numbers.filter((el)=> el>18)
//  }
//  console.log(num([45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29]));



// const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];

// const filtered=numbers.filter((el)=>{
   
//     return el%2===0
// })
// console.log(filtered);

// function toNumberArray(stringarray){
//     return stringarray.map((el)=>{
//          return parseInt((el))
//     })
//  }

//  console.log((toNumberArray(["1.1", "2", "3"])));

// function sumMix(x){
//     sum=0
//     for(i=0;i<x.length;i++){
        
//         sum+=parseInt(x[i])
//     }
//     return sum
//  }
// console.log(sumMix([9, 3, '7', '3']));


// function consectuive(nums){
//    let counter=0;
//    let max=0
//    for(let i=0;i<nums.length;i++){
//        if(nums[i]=== 1){
//            counter+=1
//         }else if(nums[i]===0){
//            if(max<counter){
//                max=counter
//            }
//            counter=0
//         }
//     }
//     console.log(max)
// }

// console.log(consectuive([1,1,0,0,1,1,1,0,1,1]));

// console.log(3===3?1:2)
//=====================================================

// function xo(str){
//    xcount=0
//    ocount=0
//    for(let i=0;i<str.length;i++){
//     if(str[i]==="x" || str[i]==="X"){
//         xcount++
//     }else if(str[i]==="o" || str[i]==="O"){
//         ocount++
//     } 
// }
// if(xcount==ocount){
//     return true
// }
// }
// console.log(xo("ooxx"));
// function matrix(array) {
//     for (var i = 0 ; i < array.length ; i++){
//         if (array[i][i] < 0)
//           array[i][i] = 0;
//         else
//           array[i][i] = 1;
//       }
//       return array;
// }
// console.log(matrix([
//     [-1,  4, -5, -9,  3 ],
//     [ 6, -4, -7,  4, -5 ],
//     [ 3,  5,  0, -9, -1 ],
//     [ 1,  5, -7, -8, -9 ],
//     [-3,  2,  1, -5,  6 ]
//   ]))



// function modifiedSum(a, n) {
//        const sum1=a.map((el)=>{
//        return el**n
//        })
//   let sum=0
//   for(i=0;i<sum1.length;i++){
//          sum=sum+sum1[i]
//        }
//        let sum3=0
//        for(i=0;i<a.length;i++){
//              sum3+=a[i]
//       }
//        return sum-sum3
// }
// console.log(modifiedSum([1, 2, 3],3));
       
// function moveZeros(arr) {
//    for(i=0;i<arr.length;i++){
//       if(arr[i]===0){
//              arr.splice(i,1)
//              arr.push(0)
//       }
// }
// return arr
// }
// console.log(moveZeros([false,1,0,1,2,0,1,0,3,"a",0]));

// function countDevelopers(list) {
//        for(let i=0;i<list.length;i++){
//        //   if(list[i][i].country ==="Europe"){
//        //       return
//        //   }
//        return list[i].age
//        }

//      }
// console.log(countDevelopers( [
//        { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript', },
//        { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' ,},
//        { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' ,},
//        { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS', }
//      ]));

//      a=num.math

//==========================================================================
// function greet(name){
//   return `Hello, ${name} how are you doing today?`
// }
// console.log(greet("amin"));
//=====================================codewars

// function arrayPlusArray(arr1, arr2) {
//   let sum1=0;
//   for(i=0;i<arr1.length;i++){
//     sum1+=arr1[i]
//   }
//   let sum2=0;
//   for(i=0;i<arr2.length;i++){
//     sum2+=arr2[i]
//   }
//   return sum1+sum2
// }


// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// function getAverage(marks){
//   let sum=0
//     for(i=0;i<marks.length;i++){
//          sum+=marks[i]
//     }
//     return Math.floor(sum/marks.length)
// }
// console.log(getAverage([1,2,3,4,5,]));

// function grow(x){
//   sum=1
//   for(i=0;i<x.length;i++){
//      sum*=x[i]
//    }
//    return sum
// }
// console.log(grow([1, 2, 3, 4]));

// console.log("code start-----");
// let user=0
// const myProm= new Promise((resolve,reject)=>{
// setTimeout(()=>{
//   user=5
//   resolve("uspsesno")
//    })
// })


// myProm

// .then(()=>{
// console.log(user)
// }).catch(()=>{

// });


// const myProm=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve(5)
//   },2000);
// })
// let user=0

// async function getData(){
// try{ 
//   const users=await myProm;
     
//     users.map((el)=>{
//     console.log
//     })
//     console.log(users)
//    }catch(err){}
// }
// getData();

// function getAverage(marks){
//   let sum=0
//     for(i=0;i<marks.length;i++){
//          sum+=marks[i]
//     }
//     return Math.floor(sum/marks.length)
// }
// console.log(getAverage([1,2,3,4,5,]));
