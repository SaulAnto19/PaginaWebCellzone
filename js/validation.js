var btn = document.getElementById("sesion");

console.log(btn);

/* Administrador*/
var c = 1234;
var u = "Admin";

/* Empleado */
var cE = 12345678;
var uE = "Allison";

btn.addEventListener("click", function (evt) {
  if (document.form.clave.value == c && document.form.usuario.value == u) {
    alert("Bienvenidos " + u + " en su inicio de sesion correctamente");
    window.location = "html/comprasYsesion/homeAdmin.html";
    evt.preventDefault();
    return false;
  } else if (document.form.clave.value == cE && document.form.usuario.value == uE) {
    alert("Bienvenidos " + uE + " en su inicio de sesion correctamente");
    window.location = "html/comprasYsesion/homeEmpleado.html";
    evt.preventDefault();
    return false;
  } else {
    alert("por favor ingrese nuevamente su contraseña y usuario");
    evt.preventDefault();
    return false;
  } 
});
