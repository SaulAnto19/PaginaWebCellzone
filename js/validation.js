var btn = document.getElementById("sesion");

console.log(btn);

var c = 1234;
var u = "Admin";

btn.addEventListener("click", function (evt) {
  if (document.form.clave.value == c && document.form.usuario.value == u) {
    alert("Bienvenidos " + u + " en su inicio de sesion correctamente");
    window.location = "/html/comprasYsesion/homeAdmin.html";
    evt.preventDefault();
    return false;
  } else {
    alert("por favor ingrese nuevamente su contraseña y usuario");
    evt.preventDefault();
    return false;
  }
});
