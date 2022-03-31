// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD

// Paso a paso:

window.onload = () => {

  //Etiqueta Form
  const formulario = document.querySelector("form");
  //Boton iniciar sesion
  let btnLogin = document.querySelector(".login-btn");
  //Div mensaje Iniciando sesion
  let loader = document.getElementById("loader");
  //Etiqueta h1
  let elementoH1 = document.querySelector("h1");
  //Campo email
  let campoEmail = document.getElementById("email-input");
  //Campo Contraseña
  let campoPassword = document.getElementById("password-input");
  //Div container mensaje error
  let errorContainer = document.getElementById("error-container");

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.
  
  btnLogin.addEventListener("click", e => {
    e.preventDefault();
    console.log(campoEmail.value);
    console.log(campoPassword.value);
    
    validarForm();
    // mensajeProcesado();
    // tiempoProcesado(validarForm);
  })

// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.

  function tiempoProcesado(funcion){
    setTimeout(funcion, 3000);
  }

// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."

  function mensajeProcesado(){
    loader.classList.remove("hidden");
    window.setTimeout(() => { loader.classList.add("hidden")}, 3000);
  }

// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
  
  function validarForm(){

// 1) Que el primer input sea un email válido.
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if(!regexEmail.test(campoEmail.value)){
      errorContainer.innerHTML = `<small>1Alguno de los datos ingresados son incorrectos</small>`;
      errorContainer.classList.remove("hidden");
    }
// 2) Que la contraseña tenga al menos 5 caracteres.
    if(campoPassword.value.length < 5){
      errorContainer.innerHTML = `<small>2Alguno de los datos ingresados son incorrectos</small>`;
      errorContainer.classList.remove("hidden");
    }

// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.
    if(validarEmail(campoEmail.value)){
      formulario.classList.add("hidden");
      elementoH1.innerHTML = `<h1> Bienvenido al sitio 😀 </h1>`;
    }
// 4) En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"
    else{
      errorContainer.innerHTML = `<small>3Alguno de los datos ingresados son incorrectos</small>`;
      errorContainer.classList.remove("hidden");
    }
  }
}

// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
function validarEmail(email){
  baseDeDatos.usuarios.find(usuario => usuario.email === email);
}
function validarPassword(password){
  baseDeDatos.usuarios.find(usuario => usuario.password === password);
}





/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */
