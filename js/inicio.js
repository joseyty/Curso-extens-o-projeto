function bitButton(){


    let nome=document.getElementById("nome").value;
      let email=document.getElementById("email").value;

      let mensagem= document.getElementById("mensagem");

        if(nome=="" || email==""){


            event.preventDefault();

            
    let erro= "preencha a lacuna!"
    mensagem.textContent= erro;
    mensagem.style.color= "red";

        } else{

            

    let sucesso= "Entrando.."
    document.getElementById("mensagem").textContent= "você "  + sucesso;
    mensagem.style.color= "green";

    window.location.href="contato.html";

     
        } 




}