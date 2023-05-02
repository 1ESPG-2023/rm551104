
//const liElement = document.getElementsByTagName("li") //elementS - na função a gnt da um parametro pra ela me devolver algo



// for (let index = 0; index < liElement.length; index++) {
//     console.log (liElement[index].textContent)
//    //fez a leitura da collection . 
// }
// //console.log(liElement.length) //indica o comprimento do array
// //console.log(liElement) //posto os elementos li

// //innerHTML formata tags html
// //innerText pra mexer só com texto

//Declaração de arrays
// let nr1=[1,2,3,4,5];
// let nr2=[6,7,8,9,10];
// //let nr3=nr1+nr2
// let nr3=[nr1,nr2]

// console.log(`Array-1 ${nr1}`);
// console.log(`Array-2 ${nr2}`);
// console.log(`Array-3 ${nr3}`);

// //Listando um array! Tecnica especial
// // nr3.forEach((itemDoArray)=>{
// //     console.log(`Array-3 sendo listado ${itemDoArray}`);   
// // })

// // 18-04
// // collection tem Map
// // interador

// //Listando o array com MAP
// //a cada iteração vai gerar o elemento
// //key var servir como índice e começa do xero
// nr3.map((numero,key)=>{
//     console.log(`${(key+1)} - Itens do array - ${numero}`);
//     numero.forEach((digitos)=>{
//         console.log(digitos)
//     })


// })





//COPIEI O NÉGOCIO DE CIMA




// //Declaração de arrays
// let nr1=[1,2,3,4,5];
// let nr2=[6,7,8,9,10];
// //spalhando o array com SPREAD[...]
// let nr3=[...nr1,...nr2]

// console.log(`Array-1 ${nr1}`);
// console.log(`Array-2 ${nr2}`);
// console.log(`Array-3 ${nr3}`);

// //Listando um array! Tecnica especial
// // nr3.forEach((itemDoArray)=>{
// //     console.log(`Array-3 sendo listado ${itemDoArray}`);   
// // })

// // 18-04
// //Listando o array com MAP
// //a cada iteração vai gerar o elemento
// //key var servir como índice e começa do xero
// nr3.map((numero,key)=>{
//     console.log(`${(key+1)} - Itens do array - ${numero}`);
    


// })

// //Convertendo html em array de forma indireta
// const liElementHtml = document.getElementsByTagName("li");
// const liElementArray= [...liElementHtml];
// //agora tenho uma lista de elementos html só que em array

// liElementArray.map((item,key)=>{
//     if(item.textContent=="Item=39"){
//         console.log(`${key+1} - ${item.textContent="LOCALIZADO"}`)  
//     }
// })
// //console.log(liElementArray);
// //mostra o array

// function soma(p1,p2,p3){
//     nr1=p1;
//     nr2=p2;

//     return (parseInt(nr1) + parseInt(nr2) + parseInt(p3))
//     //quem tá chamdno a função(mo caso o botão) recebe o retorno

//     // console.log(`Resultado: ${parseInt(nr1) + parseInt(nr2) + parseInt(parametro)}`)
//     // console.log(`Este é o parametro que foi passada para a função:${parametro}`);
// }
// // soma(); //chamando a função

// //ARROW FUNCTION
// const mudaCor=()=>{

//     //FUNÇÃO SET-TIME-OUT
//     setTimeout(alert("EXECUTOUjj"),5000);
// }

// mudaCor();


//25-04

// let tmp ="";

// function mudaCor(){
//     let r="";
//     let g="";
//     let b="";

//     //random = Gera números aleatórios entre 0 e 1
//     //ceil, floor e round que arredondam o número para cima, baixo ou aleatoriamente
    
//     //Determinando para a variável r um valor entre 0 e 255
//     r= Math.round(Math.random()*255);
//     g= Math.round(Math.random()*255);
//     b= Math.round(Math.random()*255);

//     const cabecalho = document.querySelector(".cabecalho") //classe cabecalho em um elemento cabecalho

//     cabecalho.setAttribute("style",`background-color:rgb(${r},${g},${b})`)

//     tmp=setTimeout(mudaCor,1000)

// }
// mudaCor();

function alteraBanner(){

    let nr = Math.ceil(Math.random()*3);
    
    const img1 = document.querySelector(".l-e > img")
    const img2 = document.querySelector(".l-d > img")

    let caminho= `./img/banner-lateral-${nr}.png`;
    img1.src = caminho;

    nr = Math.ceil(Math.random()*3);
    caminho= `./img/banner-lateral-${nr}.png`;
    img2.src = caminho;

    setTimeout(alteraBanner, 1000);


}
alteraBanner()

