// console.log("hello world")
// var bool = true;
// console.log(bool)

// && and i 
// true && true => true
// true && false => false
// false && true => false
// false && false => false

// || or Ili 
// true || true => true
// true && false => true
// false && true => true
// false && false => false


//a=prompt("unesi broj a")
//b=prompt("unesi broj b")
//console.log(a>b)

//a=prompt("unesi broj a")
//console.log(a<10 && a>1 )

//a=prompt("unesi broj")
//console.log( a % 2===0)

//a="amin"
//console.log(a.length)

//ime=prompt("unesi ime")
//duzina=(ime.length);
//console.log(duzina)
  
//console.log("nesto".trim());

//a="amin"
//console.log(a.toUpperCacse())
//console.log(a.toLowerCacse())

//a="amin"
//console.log(a.concat("nesto"))
//console.log("amin".indexOf(a))
//console.log(a.includes("g"))
//console.log("amin".)

//b=prompt("unesi ime")
//a="amin"

//console.log(a.toUpperCase())
//console.log(a.toLowerCase())
//console.log(a.indexOf(m))
//console.log(a.includes("b"))
//console.log(a.concat("nesto"))

//str="Apple, Banana,Kivi"
//part=str.slice(7 ,13);
//console.log( "ovo je",part)

//str="Apple, Banana,Kivi"
//part=str.slice(7 );
//console.log( "ovo je",part)

//text="Please visit Microsoft";
//newText=text.replace("Microsoft", "Please");
//console.log(newText)


//text = "Kivi,banana,amin,kivi"
//console.log(text.split(","))

//a= 5+5
//console.log("ovaj broje je",a,"i on je u stringu")
//console.log(`ovaj broje je ${a} i on je u stringu`)

//Math.random()
//console.log(a);
//console.log(Math.round(a))

//if(5>4){
  //  console.log("tacno je")
//}

//a=prompt("unesi broj")
//b=prompt("unesi broj")

//if(a>b){
//    console.log("tacno je")
//}

//console.log("nastavi")

//a=prompt("unesi vreme");

// if(a<0 || a>24){
//   console.log("pogresno uneto vreme")
// }
// else if(a>=0 && a<=5)
// else if(a<10){
//   console.log("sada je jutro")
// }
// else if(a<18){
//   console.log("sada je dan ")
// }
// else if(a<20){
//   console.log("sada je vece ")
// }
// else if(a<24){
//   console.log("sada je noc")
// }

// a=prompt("unesi broj bodova:");

// if(a<50 || a>100){
//   console.log("uneli ste pogresan broj bodova");
// }
// else if(a>=50 && a<=60){
//   console.log("vasa ocena je 6");
// }
// else if( a>=61 && a<=70){
//   console.log("vasa ocena je 7");
// }
// else if( a>=71 && a<=80){
//   console.log("vasa ocena je 8");
// }
// else if(a>=81 && a<=90){
//   console.log("vasa ocena je 9");
// }
// else if(a>=91 && a<=100){
// console.log("vasa ocena je 10");
// }
// zadatak 1
// switch(3){
//   case 1:
//     console.log("slucaj 1");
//     break;
//   case 2:
//    console.log("slucaj 2");
//   case 3:
//      console.log("slucaj 3");
//      break;
//     default:
//       console.log("Pogresan unos")

// }

//zadatak 2;
// a=parseInt(prompt("unesi broj"));
// switch(a){
//   case 1:
//     console.log("danas je ponedeljak");
//     break;
//   case 2:
//    console.log("danas je utorak");
//   case 3:
//      console.log("danas je sreda");
//      break;
//   case 4:
//    console.log("danas je cetvrtak");
//      break;
//   case 5:
//    console.log("danas je petak");
//       break;
//   case 6:
//     console.log("danas je subota");
//       break;
//   case 7:
//       console.log("danas je nedelja");
//       break;
//   default:
//       console.log("uneti unos nije tacan");
//       break;

// }

// a=parseInt(prompt("unesi broj od 0-100"));
// switch(a>=0 && a<=30 || a>=31 && a<=70 ||  a>=71 && a<=100){
//   case (a>=0 && a<=30):
//     console.log("low");
//     break;
//   case (a>=31 && a<=70 ):
//    console.log("medium");
//    break;
//   case (a>=71 && a<=100):
//      console.log("high");
//     break;
//   default:
//       console.log("uneti unos nije tacan");
//       break;

// }
// a=parseInt(prompt("unesi broj od 0-100"));

//    switch(true){
//      case (a>0 && a<30):
//      console.log("low");
//      break;
//      case (a>30 && a<70):
//      console.log("medium");
//      break;
//      case (a>70 && a<=100):
//        console.log("high");
//        break;
//       default:
//         console.log("pogresan unos")
// }




ReactDOM.render(<h1>hello</h1> ,document.getElementById('mydiv'))
