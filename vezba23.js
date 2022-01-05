
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


unos=parseInt(prompt("unesi"))
for(i=1;i<=unos;i++){
    sum="";
    for(j=1;j<=i;j++){
        sum+=i;
    }
    console.log(sum)
}

