
const formulario = document.querySelector(".formulario");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");

const personas = [];

function mostrarPersonas() {
  console.log("Mostrar Cargando");

  let texto = "";
  personas.forEach((persona) => {
    texto += `<li> ${persona.nombre} ${persona.apellido} </li>`;
  });

  document.querySelector(".personas").innerHTML = texto;
}

function agregarPersonas() {
  if(nombre.value && apellido.value){
    const persona = new Persona(nombre.value, apellido.value);
    personas.push(persona);
    mostrarPersonas();

  }else{
    document.querySelector('.contenedor2').style.display = 'flex';
  }
}

window.addEventListener("load", mostrarPersonas);
document.addEventListener("click", (e) => {

  document.querySelector('.contenedor2').style.display = 'none';

  e.preventDefault();

  if (e.target.matches("#buton")) {
    agregarPersonas();
  }
});
