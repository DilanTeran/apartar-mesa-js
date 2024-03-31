alumnos = [{
    nombre: "Dilan teran",
    email: "dilan@gmail.com",
    materia: "Fisica 3"
},{
    nombre: "Luis bertiz",
    email: "luis@gmail.com",
    materia: "Programacion"
},{
    nombre: "Manuel redondo",
    email: "manuel@gmail.com",
    materia: "Estructura de datos"
},{
    nombre: "Alexa parodi",
    email: "alexa@gmail.com",
    materia: "Logica"
},{
    nombre: "Natalia alvarado",
    email: "natalia@gmail.com",
    materia: "Calculo"
},{
    nombre: "Ariana teran",
    email: "ariana@gmail.com",
    materia: "Matematicas"
}];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
    </div>`;
    contenedor.innerHTML += htmlCode;
}

boton.addEventListener("click", ()=>{
    let confirmar = confirm("¿Realmente quieres confirmar las mesas?")
    if (confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
});