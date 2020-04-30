document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "593983109017";
  
    //let cliente = document.querySelector("#cliente").value;
    let tomatetexto =document.querySelector("#tomateText").value;
    let tomate     =document.querySelector("#tomateValor").value;

    let pimientoText =document.querySelector("#piminetoText").value;            
    let pimiento =document.querySelector("#pimientoValor").value;       
    let resp = document.querySelector("#respuesta");
  
    //resp.classList.remove("fail");
    //resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_Estimado cliente_*%0A
          *Su pedido es:*%0A%0A

          
          ${tomatetexto}%0A          
          ${tomate}%0A%0A          
          
          ${pimientoText}%0A          
          ${pimiento}`;
  
    /*if (cliente === "" || fecha === "" || hora === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;*/
    resp.innerHTML="Su  pedido ha sido enviado ";
    window.open(url);
  });
