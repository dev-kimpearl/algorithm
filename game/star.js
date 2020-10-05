
// *
// **
// ***
// ****
// *****

// function getStar (num) {
//     let star = '';
//     for ( let i = 1; i <= num; i++) {
//         star = star + '*';
//         console.log(star);
//     }
// }

// getStar(5);


// function getStar (num) {
//     let star = '******';
//     for ( let i = 1; i <= num; i++) { 
//         star = star.substring(0, star.length -1);
//         console.log(star);
//     }
// }

// getStar(5);



// var line = 5;
// var result = "";

// for (var i = line; i >= 1; i--) {
//     for (var j = 1; j <= i; j++) {
//       result += "*";
//     }
//     result += "\n";
//   }

//   console.log(result);

 function getStar(length) {
    star = '*'
     for (let i = 1; i <= length; length--){
        const getStar = star.repeat(length);
        console.log(getStar);
    }
 }

 getStar(5);