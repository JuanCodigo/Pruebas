let numero = document.getElementById("num");
let modulo = document.getElementById("mod");
let boton = document.getElementById("enviar");
let x = document.getElementById("parra");
      
boton.onclick = () => {
  let resultado = numero.value % modulo.value;
  if (numero.value == "" && modulo.value == "") { x.innerHTML = "Introduce ambos números"} 
  else {
    if (modulo.value == 0) {
      x.innerHTML = "Introduce un modulo mayor a 0"
    }
    else {
      x.innerHTML = `<span style="color: red">${numero.value}</span> mod <span style="color: blue">${modulo.value}</span> = <span style="color: green">${resultado}</span>`
  
          numero.value = "";
          modulo.value = "";
          }
        }
      }