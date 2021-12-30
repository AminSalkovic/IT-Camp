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
a=parseInt(prompt("unesi broj od 0-100"));
   switch(true){
     case (a>0 && a<30):
     console.log("low");
     break;
     case (a>30 && a<70):
     console.log("medium");
     break;
     case (a>70 && a<=100):
       console.log("high");
       break;
      default:
        console.log("pogresan unos")
}
