
//zadatak 1

// a=parseInt(prompt("unesi broj bodova:"))

// if(a>100 && a<0){
//     console.log("uneli ste pogresan broj!");
// }
// else if(a>=0 && a<=10){
//     console.log("vasa ocena je 1");
// }
// else if(a>10 && a<=20 ){
//     console.log("vasa ocena je 2");
// }
// else if(a>20 && a<=30){
//     console.log("vasa ocena je 3");
// }
// else if(a>30 && a<=40){
//     console.log("vasa ocena je 4");
// }
// else if(a>40 && a<=50){
//     console.log("vasa ocena je 5");
// }
// else if(a>50 && a<=60){
//     console.log("vasa ocena je 6")
// }
// else if(a>60 && a<=70){
//     console.log("vasa ocena je 7")
// }
// else if(a>70 && a<=80){
//     console.log("vasa ocena je 8 ")
// }
// else if(a>80 && a<=90){
//     console.log("vasa ocena je 9")
// }
// else if(a>90 && a<=100){
//     console.log("vasa ocena je 10")
// }


// zadatak 2


// a=parseInt(prompt("unesi broj bodova:"));

//  switch(true){
//     case(a>0 && a<=10):
//     console.log("vasa ocena je 1");
//     break;
//     case(a>10 && a<=20):
//     console.log("vasa ocena je 2");
//     break;
//     case(a>20 && a<=30):
//     console.log("vasa ocena je 3");
//     break;
//     case(a>30 && a<=40):
//     console.log("vasa ocena je 4");
//     break;
//     case(a>40 && a<=50):
//     console.log("vasa ocena je 5");
//     break;
//     case(a>50 && a<=60):
//     console.log("vasa ocena je 6");
//     break;
//     case(a>60 && a<=70):
//     console.log("vasa ocena je 7");
//     break;
//     case(a>70 && a<=80):
//     console.log("vasa ocena je 8");
//     break;
//     case(a>80 && a<=90):
//     console.log("vasa ocena je 9");
//     break;
//     case(a>90 && a<=100):
//     console.log("vasa ocena je 10");
//     break;
//     default:
//         console.log("pogresan unos bodva")
// }

//zadatak3
//sifra i email


//a=prompt("unesi e-mail");

// switch(true){

//     case(a==="amins@gmail.com"):
//     console.log("ulogovali ste se");
//     break;
//     default:
//         console.log("pogresn e-mail");
// }
// b=prompt("unesi lozinku:");

// switch(true){
//     case(b==="amin"):
//     console.log("ulogovali ste se");
//     break;
//     default:
//         console.log("pogresna lozinka");
// }

//zadatak 4 kucamo sifru malim slovima i pretvaramo je u velika;


// a=(prompt("password"));

// switch(true){
//     case(a.toUpperCase()==="AMIN"):
//     console.log("you joined");
//     break;
//     default:
//         console.log("wrong password");
// }

//for petlja

// for(i=0; i<11 ;i++){
//     console.log(i)
// }



// for(a=1;a<=10;a++){
//     if(a % 2===0){
//         console.log(a)
//     }
// }

// pocetna=parseInt(prompt("unesi pocetnu vrednost"))
// krajnja=parseInt(prompt("unesi krajnju vrednost"))

// for(i=pocetna){
//     console.log()
// }


// for(a=0;a<=15;a++){
//       if(a % 2===0){
//       console.log(  `broj {a} je paran`);
//       }
//       else{
//         console.log(`broj {a} je neparan`) 
//         }
  
// }





//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// pocetna=parseInt(prompt("unesi pocetnu vrednost"))
// krajnja=parseInt(prompt("unesi krajnju vrednost"))

// for(a=pocetna;a<=krajnja;a++){
//     if(a % 3===0 && a%5===0){
//         console.log("fizbuzz");
//     }
//     else if(a % 5===0){
//         console.log("buzz")
//     }
//     else if(a%3===0){
//         console.log("fizz")
//     }
//     else{
//         console.log(a)
//         }
// }


// kolicina=parseInt(prompt("koliko zelite brojeva"))
// sum=0;
// for(i=0;i<kolicina;i++){
//    unos= parseInt(prompt(`unesi broj`));
//   sum+=unos;
// }
// console.log(sum)
// console.log(sum/ kolicina)




// pocetna=parseInt(prompt("unesi pocetnu vrednost"))
// krajnja=parseInt(prompt("unesi krajnju vrednost"))
// sumP=0;
// sumN=0

// for(a=pocetna;a<krajnja;a++){
//     if(a%2===0){
//         sum1+=a;
//      }else{
//         sumN+=a;
//     }
// }
// console.log(sumP)
// console.log(sumN)


//uneti string i za dati string ispisati svako slovo pojedinacno sa for petljom  npr unos:amin; izlaz    A
                                                                                                        //M
                                                                                                        //I
      
//  unos=prompt("unesi ime")
// for(i=0;i<= unos.length;i++){
//     console.log(unos[i]);
// }
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

// for(i= 7; i>0;i--){
//     console.log(i);
// }

//vezba 10//////////////////////////////////////////////////////////////

// for(i=1;i<11;i++){
//     for(a=1;a<11;i++){
//         console.log(i,"*",a, "=" ,i*a)
//     }
 //////////////////////////////////////////////////////////////////////   
// }
//ispisivanje zvezdica
// sum="";
// char=" * "
// for(i=0;i<5;i++){
//     console.log((sum+=char))
// }
///////////////////////////////////////////////////////////
// unos=prompt("unesi string")
// unosr="";
// for(i=unos.length - 1;i>=0;i--){
//     unosr+=unos[i]
// }
// if(unos===unosr){
//     console.log("palindrom")
// }else{
//     console.log("nije palindrom")
// }


// unos=parseInt(prompt("unesi"))
// for(i=1;i<=unos;i++){
//     sum="";
//     for(j=1;j<=i;j++){
//         sum+=i;
//     }
//     console.log(sum)
// }

//napraviti program da izracuna 
//factorial od 5=1*2*3*4*5=120/


// unos=parseInt(prompt("unesi"))
// faktorijal=1;
// for(i=1;i<=unos;i++){
//     faktorijal*=i;
// }
// console.log(faktorijal)

//kubni brojevi

// pocetna=parseInt(prompt("unesi pocetnu vrednost"))
// krajnja=parseInt(prompt("unesi krajnju vrednost"))

// for(i=pocetna;i<=krajnja;i++){
//     console.log(`number is ${i} and cube of the ${i**3}`)
// }

// pocetna=parseInt(prompt("unesi pocetnu vrednost"))
// krajnja=parseInt(prompt("unesi krajnju vrednost"))
// for(i=pocetna;i<=krajnja;i++){
//     delioci=0;
//     for(j=1;j<=i;j++){
//         if(i % j===0){
//           delioci++;
//         }
//     }
//     if(delioci===2){
//         console.log(i)
//     }
    
    
// }




// prvi=parseInt(prompt("unesi pocetnu vrednost"))
// drugi=parseInt(prompt("unesi krajnju vrednost"))
//  for(i=prvi;i<100;i++){
//      if(i % prvi ===0 && i % drugi===0){
//          console.log(i);
//          break;
//      }
     
//  }

//ispis karaktera
// kolicina=parseInt(prompt("koliko zelite karaktera"))
// sum="";
// for(i=0;i<kolicina;i++){
//    unos= prompt(`unesi karakter`);
//    sum+=unos
// }
// console.log(sum)


// unos1=parseInt(prompt("unesi prvi broj"));
// unos2=parseInt(prompt("unesi prvi broj"));

// for(i=unos1;i<=unos2;i++){
//     if(i % 2===0){
//         console.log(`${i},je deljiv sa 2`)
//     }else{
//         console.log(`${i},nije deljiv sa 2`)
//     }
// }

// unos1=parseInt(prompt("unesi prvi broj"));
// unos2=parseInt(prompt("unesi prvi broj"));

// for(i=unos1;i<=unos2;i++){
//     for(j=unos1;j<=unos2;j++){
//         console.log(`${i},*,${j},=,`,i*j)
//     }
// }
//faktorijal
// unos=parseInt(prompt("unesi prvi broj"));
// fakt=1;
// for(j=1;j<=unos;j++){
//  fakt=fakt*i
// }
// console.log(fakt)

// unos=parseInt(prompt("unesi prvi broj"));
// for(i=1;i<=unos;i++){
//     fakt=1;
//     for(j=1;j<=i;j++){
//          fakt=fakt*j;
//         }
//     console.log(fakt)
// }

// for(i=1;i<=10;i++){
// red="";
// for(j=1;j<=10;j++){
//     red+=`${j*i}\t`
// }
// console.log(red)

// }
//unesi deset temperatura one koje su povis nula treba da se saberu i izracunaju prosecnu vrednost one koje su sipod isto
// unos=parseInt(prompt("koliko zelis da uneses temperatura"));
// sum=0;
// prosecna1=sum/unos
// sum2=0;
// for(i=1;i<=unos;i++){
//     unos1=parseInt(prompt("unesi temperaturu"));

//     if(unos1>=0){
//         sum=sum+unos1
//      }
//      else if(unos1<0){
//         sum2=sum2+unos1
//     }
// }
// console.log(` zbir temperatura  u plusu je ${sum}`)
// console.log(` zbir temperatura  u minusu je ${sum2}`)

// unos1=parseInt(prompt("unesi prvi broj"));
// unos2=parseInt(prompt("unesi prvi broj"));
// for(i=unos1;i<=unos2;i++){
//     if(i%2===0){
//         console.log(i,"je dejiv sa dva")
//     }else{
//         console.log(i,"nije deljiv sa dva")
//     }
// }

//brojevi koji su deljvi sa 2 i 3
// unos1=parseInt(prompt("unesi prvi broj"));
// unos2=parseInt(prompt("unesi prvi broj"));
// for(i=unos1;i<=unos2;i++){
//     if(i % 2===0 && i % 3==0){
//         console.log(i)
//     }
// }

// unos=prompt("unesi rec")

// while(unos.length<5){
//     unos=prompt("unesi rec ponovo")
// }
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// unos=prompt("unesite broj ili end")

// while(unos !== "end"){
//     unos=prompt("unesite broj ili end")
// }

// unos=parseInt(prompt("unesi broj"))
// sum=0;
// while(unos>0){
//     sum+=unos
//     unos=parseInt(prompt("unesi broj ponovo"))
// }
// console.log(sum)
///////////////////////////////////////////////////////////////////

//ZADATAK3
// unos=prompt("unesi ime")

// while(unos !== "END"){
 //console.log(unos)
//unos=prompt("unesi ponovo") ;
// }
// console.log("I am done");

// unos=parseInt(prompt("unesi ocene"))
// sum=0;
// kolicina=0;
// while(unos>=1 && unos<=5){
//     sum+=unos
//     kolicina++;
//     unos=parseInt(prompt("unesi ocene"))
// }
// console.log("prosek je",sum/kolicina)


// broj = Math.round(Math.random() * 10);
// unos = parseInt(prompt("Unesi broj"));

// while (unos !== broj) {
//   if (unos > broj) {
//     unos = parseInt(prompt("Broj je too high try again"));
//   } else {
//     unos = parseInt(prompt("Broj je too small try again"));
//   }
// }

// console.log("Pogodiliste broj");


// unos=parseInt(prompt("unesi broj"))
// brojac=1;
// fakt=1
// while(brojac<=unos){
//     fakt=fakt*brojac
//     brojac++
//     console.log(fakt)
// }


// unos=parseInt(prompt("unesi broj"))
// fakt=1;
// for(i=1;i<=unos;i++){
//     fakt=fakt*i
//     console.log(fakt)
// }



// unos=parseInt(prompt("koliko zelite stringova"))
// ar=[]
// for(i=0;i<unos;i++){
//     unos2=prompt("unesi string")
//     ar[i]=unos2

// }
// console.log(ar)


// unos=parseInt(prompt("koliko zelis brojeva da uneses"))
//  ar=[]           
//  for(i=0;i<unos;i++){
//      unos2=parseInt(prompt("unesi broj"))
//      ar[i]=unos2
//         if(ar[i]%2===0){
//           console.log(ar[i],"je deljiv sa 2")
//          }else {
//               console.log(ar[i],"nije deljiv sa 2")            
//          }
// }
//  console.log(ar)

// unos=parseInt(prompt("koliko zelite stringova"))
// ar=[]
// for(i=0;i<unos;i++){
//     unos2=prompt("unesi string")
//     ar[i]=unos2

// }

// console.log(ar)

// names=["amin","saki","salkan"]
// console.log(names)
// names.shift()
// console.log(names)

// function imena(){
//     names=["amin","saki","salkan"]
//     for(i=0;i<names.length;i++){
//         if(names[i]==="amin"){
//             names.splice(i,1)
//             }
//         }
//         console.log(names)
// }

// imena()

// function calculator(){
//     function basicOp(operation, value1, value2) {
//         switch (operation) {
//             case '+':
//                 return value1 + value2;
//             case '-':
//                 return value1 - value2;
//             case '*':
//                 return value1 * value2;
//             case '/':
//                 return value1 / value2;
//             default:
//                 return 0;
//         }
//     }
//     operation=prompt("unesi sta zelis:+,-,/,*")
//         value1=parseInt(prompt("unesi broj"))
//         value2=parseInt(prompt("unesi broj"))
//      let x=basicOp(operation, value1, value2)
//     console.log(x)
//     }
//     calculator();
//////////////////////////////////////////////////////////////
// function calculator(){
//     unos=prompt("unesi operaciju koju zelis:+,-,*,/")
//     while(unos!== "stop"){
//         unos1=parseInt(prompt("unesi prvi broj"))
//         unos2=parseInt(prompt("unesi drgi broj"))
//         switch(unos){
//             case '+':
//                 console.log(unos1+unos2);
//                 break;
//             case '-':
//                 console.log(unos1-unos2);
//                 break;
//             case '*':
//                     console.log(unos1*unos2);
//                  break;
//             case '/':
//                     console.log(unos1/unos2);
//             break;
//             default:
//                 console.log("greska")
//             }
//     unos=prompt("unesi operaciju koju zelis:+,-,*,/")
//    }
// }
    
//     unos=prompt("unesi sta zelis")
    
//     if(unos==="calculator"){
//         calculator();
//     }else{
//         console.log("nista")
//     }
///////======================================
// function calculator(){
// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+':
//             return value1 + value2;
//         case '-':
//             return value1 - value2;
//         case '*':
//             return value1 * value2;
//         case '/':
//             return value1 / value2;
//         default:
//             return 0;
//     }
// }
// operation=prompt("unesi sta zelis:+,-,/,*")
//     value1=parseInt(prompt("unesi broj"))
//     value2=parseInt(prompt("unesi broj"))
//  let x=basicOp(operation, value1, value2)
// console.log(x)
// }
// calculator();

// function poens(){
//     function myFunction(num){
//         switch(true){
//             case(num<30):
//             return "good";
//             case(num<=70):
//             return "verygood";
//             case(num<=90):
//             return "excelent";
//             case(num<=100):
//             return "perfect"
//         } 
//     }
//     num=parseInt(prompt("unesi broj"))
//     let y=myFunction(num)
//     console.log(y)
//     }
    
//     function calculator(){
//         function basicOp(operation, value1, value2) {
//           switch (operation) {
//              case '+':
//                 return value1 + value2;
//              case '-':
//                 return value1 - value2;
//              case '*':
//                 return value1 * value2;
//              case '/':
//                 return value1 / value2;
//              default:
//                 return 0;
//         }
//     }
//     operation=prompt("unesi sta zelis:+,-,/,*")
//         value1=parseInt(prompt("unesi broj"))
//         value2=parseInt(prompt("unesi broj"))
//      let x=basicOp(operation, value1, value2)
//     console.log(x)
//     }
    
//     unos=prompt("calculator or poens")
//     while(unos!=="stop"){
//         if(unos==="calculator"){
//             calculator();
//         }else if(unos==="poens"){
//             poens();
//         }else{
//             console.log("wrong input")
//         }
//         unos=prompt("calculator or poens")
//     }


// function abbrevName(name){
//    const arr=name.split('')
//     const f=arr[0][0].toUpperCase()
//     const p=arr[1][0].toUpperCase()
//     const newString=f+"."+p
//     return newString
// }

// const intDiff = (arr, n) => {
//     brojac=0
//     for(i=0;i<arr.length;i++){
//       for(j=i+1;j<arr.length;j++){
//         if(Math.abs(arr[i]-arr[j])===n){
//           brojac++
//         }
//       }
//     }
//     return brojac
//   }


function numbers(num){
    for(i=1;i<num.length;i+=2){
        num[i]*=2
    }
    return num
}
console.log(numbers([1,2,3,4,2,3]));
//===========================================