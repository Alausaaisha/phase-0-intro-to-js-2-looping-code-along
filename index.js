// Code your solutions in this file
//for (let age = 30; age < 40; age++){
    //console.log(`I'm ${age} years old. Happy birthday to me!`);
  //  debugger;
//}

/**const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i< gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);*/

names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, eventMessage) {
    let newnames = []
    for (let i = 0; i < names.length; i++) {
        newnames.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        //newnames = [...eventMessage];
     // console.log(`Thank you, ${names[i]}, for the wonderful birthday gift!`);
       // debugger;
    }

return newnames;
}

function countDown() {
   let n = 11;
    while (n > 0) {
        n--;
        console.log(n);
    }
}