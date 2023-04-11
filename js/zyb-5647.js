
const liElement = document.getElementsByTagName("li") //elementS - na função a gnt da um parametro pra ela me devolver algo



// for (let index = 0; index < liElement.length; index++) {
//     console.log (liElement[index].textContent)
//    //fez a leitura da collection . 
// }
// //console.log(liElement.length) //indica o cumprimento do array
// //console.log(liElement) //posto os elementos li

// //innerHTML formata tags html
// //innerText pra mexer só com texto

//Declaração de arrays
let nr1=[1,2,3,4,5];
let nr2=[6,7,8,9,10];
//let nr3=nr1+nr2
let nr3=[nr1,nr2]
console.log(`Array-1 ${nr1}`);
console.log(`Array-2 ${nr2}`);
console.log(`Array-3 ${nr3}`);

//Listando um array! Tecnica especial
nr3.forEach((itemDoArray)=>{
    console.log(`Array-3 sendo listado ${itemDoArray}`);   
})
//Array vs collection