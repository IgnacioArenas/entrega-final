class Campeón {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const aatrox = new Campeón("Aatrox", 4800);
const darius = new Campeón("Darius", 4800);
const garen = new Campeón("Garen", 450);
const yasuo = new Campeón("Yasuo", 4800);
const zed = new Campeón("Zed", 4800);

const arrayCampeonesFav = [aatrox, darius, garen, yasuo, zed];
console.log("Mis campeones favoritos del juego son ");
console.log(arrayCampeonesFav)

const buscado = arrayCampeonesFav.find(Campeón => Campeón.nombre ==="Aatrox");
console.log("Mi mejor personaje es " + buscado);
console.log(buscado);

class Dato {
    constructor(nombreInvocador, ligaInvocador, campeon) {
        this.nombreInvocador = nombreInvocador;
        this.ligaInvocador = ligaInvocador;
        this.campeon = campeon;
    }
}

const datos = []; 

if(localStorage.getItem("datos")) {
    let dato = JSON.parse(localStorage.getItem("datos"));
    for(let i = 0; i < dato.length; i++ ) {
        datos.push(dato[i]);
    }
}

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarDato();
})

function agregarDato() {
    const nombre = document.getElementById("nombre").value;
    const liga = document.getElementById("liga").value;
    const campeon = document.getElementById("campeon").value;
    const nuevoDato = new Dato(nombre, liga, campeon);
    datos.push(nuevoDato);
    localStorage.setItem("datos", JSON.stringify(datos));
    formulario.reset();
}

const contenedorDatos = document.getElementById("contenedorDatos");

const verDatos = document.getElementById("verDatos");

verDatos.addEventListener("click", () => {
    mostrarDatos();
});

function mostrarDatos() {
    contenedorDatos.innerHTML = "";
    datos.forEach( dato => {
        const div = document.createElement("div");
        div.innerHTML = `
                        <div>
                            <p> Nombre de invocador: ${dato.nombreInvocador}</p>
                            <p> Liga: ${dato.ligaInvocador}</p>
                            <p> Campeón favorito: ${dato.campeon}</p>
                        </div>
                        `;
        contenedorDatos.appendChild(div);
    })
}

// Botones

const botonAatrox = document.getElementById("botonAatrox");

botonAatrox.addEventListener("click", () => {
    Swal.fire({
        title: "Aatrox",
        icon: "warning",
        imageUrl: "https://image0.uhdpaper.com/wallpaper-hd/aatrox-lol-splash-art-uhdpaper.com-hd-357.jpg",
        confirmButtonText: "Aceptar",
    });
});

const botonDarius = document.getElementById("botonDarius");

botonDarius.addEventListener("click", () => {
    Swal.fire({
        title: "Darius",
        icon: "warning",
        imageUrl: "https://image0.uhdpaper.com/wallpaper-hd/darius-lol-splash-art-uhdpaper.com-hd-673.jpg",
        confirmButtonText: "Aceptar",
    });
});

const botonGaren = document.getElementById("botonGaren");

botonGaren.addEventListener("click", () => {
    Swal.fire({
        title: "Garen",
        icon: "warning",
        imageUrl: "https://image0.uhdpaper.com/wallpaper-hd/garen-lol-splash-art-uhdpaper.com-hd-720.jpg",
        confirmButtonText: "Aceptar",
    });
});

const botonYasuo = document.getElementById("botonYasuo");

botonYasuo.addEventListener("click", () => {
    Swal.fire({
        title: "Yasuo",
        icon: "warning",
        imageUrl: "https://image0.uhdpaper.com/wallpaper-hd/yasuo-lol-splash-art-uhdpaper.com-hd-638.jpg",
        confirmButtonText: "Aceptar",
    });
});

const botonZed = document.getElementById("botonDarius");

botonDarius.addEventListener("click", () => {
    Swal.fire({
        title: "Darius",
        icon: "warning",
        imageUrl: "https://image0.uhdpaper.com/wallpaper-hd/zed-lol-splash-art-uhdpaper.com-hd-643.jpg",
        confirmButtonText: "Aceptar",
    });
});

/* Fetch */

const champs = document.getElementById("champs");

const fewChamps = "json/champions.json";

fetch(fewChamps)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach( champ => {
            champs.innerHTML += `<h3>Nombre: ${champ.nombre} </h3>
                                 <strong> Precio: ${champ.precio} </strong>
                                 <strong>ID: ${champ.id} </strong>`
        })
    })
    .catch(error => console.log(error))
    .finally(() => console.log("Proceso Finalizado"));