
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

        let userValidado ={}

        
        try{
            lista.forEach((usuario)=> {
                //VALIDAÇÃO
                if(inputUserValue == usuario.nomeUsuario && inputPassValue == usuario.senhaUsuario){
                    userValidado = usuario;
                    throw "VALIDADO";
                }
            });

            throw "NÃO VALIDADO";

        }catch(msg){
            if(msg == "VALIDADO"){
                h1Titulo.innerHTML = "<span><strong>Login validado com sucesso!</strong></span>"
                h1Titulo.setAttribute("style","color:#00ff00");

                //adicionando uma propriedade ao nosso objeto userioValidado
                userValidado["token"] = 

                //setando um novo objeto no local storage
                localStorage.setItem("userValidado", JSON.stringify (userValidado));
                //direcionando o usuário para a página de sucesso
                window.location.href = "./sucesso.html.";
            }else{
                h1Titulo.innerHTML = "<span><strong>Login ou senha invalidos!</strong></span>"
                h1Titulo.setAttribute("style","color:#ff0000")
                window.location.href = "./erro.html";
            }
        }       
    }
});
try{
    const userBemVindo = document.querySelector("#userWelcome");
    userBemVindo.innerHTML = JSON.parse (localStorage.getItem("userValidado"));
    userBemVindo.innerHTML = usuario.nomeUsuario;
}catch(erro){
    if(userBemVindo != null){
        userBemVindo.innerHTML = JSON.parse (localStorage.getItem("userValidado")).nomeUsuario;
    }
}
