
//GERANDO DOIS OBJETOS NO LOCALSTORAGE
const usuario1 = {
    nomeUsuario:"predo",
    senhaUsuario:"12345", 
 }


const usuario2 = {
   nomeUsuario:"anzina",
   senhaUsuario:"12345", 
}

let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2)

localStorage.setItem("listaUser", JSON.stringify (listaDeUsuarios));
//transforma em string???


addEventListener("click", (evento)=>{
    //console.log(evento.target.id == "btnSubmit");

    evento.preventDefault();//previne o reload da página

    if(evento.target.id == "btnSubmit"){
        //paramos de usar esse depois que colocamos o onjeto cons usuario ali emcima
        // let usuario = document.querySelector("#idUser").value;
        // let senha = document.querySelector("#idPass").value; //pega o valor que eu insiro na senha e usuário
        // //ARMAZENANDO OS DADOS NO OBJETO
        // usuario.nomeUsuario = document.querySelector("#idUser").value;
        // usuario.senhaUsuario = document.querySelector("#idPass").value;

        //RECUPERANDO DOS INPUTS
        let inputUserValue = document.querySelector("#idUser").value;
        let inputPassValue = document.querySelector("#idPass").value;

        const h1Titulo = document.querySelector("#titulo");

        let lista = JSON.parse(localStorage.getItem("listaUser"));
        // let listaDeUsuarios = JSON.parse(lista);

        lista.forEach((usuario)=>{
        //VALIDAÇÃO
        //if(usuario == "pf0670" && senha =="12345"){
        if(inputUserValue == usuario.nomeUsuario &&  inputPassValue == usuario.senhaUsuario){
            console.log("VALIDADO!");
            h1Titulo.innerHtml = "Bem vindo: " + usuario.nomeUsuario;
        }else{
            console.log("NÃO VALIDOU!");
            h1Titulo.innerHtml = "";
        }
        })
    }
});