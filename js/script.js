var nombre = document.getElementById("name")
var apellido = document.getElementById("apellido")
var edad = document.getElementById("age")
var direccion = document.getElementById("direccion")
var telefono = document.getElementById("telefono")
var correo = document.getElementById("correo")
var boton = document.getElementById("botondatos")

function cambiarNombre() {
    let nombretemp = prompt("escribe tus nombres")
    let apellidotemp = prompt("ingresa tus apellidos")
    var edadtemp = prompt("ingresa tu edad")
    var direcciontemp = prompt("ingrese su direccion")
    var telefonotemp = prompt("ingrese su numero de telefono")
    var correotemp = prompt("ingresa tu correo")
    nombre.innerHTML ="Nombres: " +  nombretemp;
    apellido.innerHTML ="Apellidos: " +  apellidotemp;
    edad.innerHTML = "Edad: " + edadtemp;
    direccion.innerHTML = "Direccion: " + direcciontemp
    telefono.innerHTML = "Telefono: " + telefonotemp
    correo.innerHTML = "Correo: " + correotemp


}

boton.onclick = function () {
    cambiarNombre();
    
}
