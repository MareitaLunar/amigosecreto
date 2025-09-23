// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listAmigos = [];



function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    
    amigosList = document.getElementById('listaAmigos');
    //validaciones de campo vacio
    if (amigo === ""){
        alert("Por favor ingrese un amigo");
        return; 
    }else{
        if (listAmigos.includes(amigo)){
            alert("Digite un amigo diferente");
        }else{
            listAmigos.push(amigo);
            console.log(listAmigos);
            amigosList.innerHTML += `<li>${amigo}</li>`;
        }
    }
    document.getElementById('amigo').value = "";
    
}
 