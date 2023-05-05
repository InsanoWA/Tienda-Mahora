const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');
mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito un nombre');
      return;
    }
    var telefono = document.getElementById('telefono').value;
    if (telefono.length < 9) {
      alert('el numero no es valido');
      return;
    }
  alert("Cotizacion realizada correctamente");
   	document.validarFormulario.submit();
  }