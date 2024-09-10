function agregarchisme() {
    let memoria = JSON.parse(localStorage.getItem("Chimografo"));
    if (!memoria) {
        memoria = [];
    }

    let Identificador = document.getElementById("Identificador").value.trim();
    let descripcion = document.getElementById("descripcion").value.trim();
    let categoria = document.getElementById("categoria").value;
    let fecha = document.getElementById("fecha").value;
    let estado = document.getElementById("estado").value;
    let comentarios = document.getElementById("comentarios").value.trim();
    console.log(fecha)

    if (!Identificador || !descripcion || !categoria || !fecha || !estado) {
        alert("Todos los campos son obligatorios excepto los comentarios.");
        return;
    }

    for (const element of memoria) {
        if (element.id === Identificador) {
            alert("Chisme ya registrado, no puede continuar.");
            return;
        }
    }

    let nuevochisme = {
        id: Identificador,
        descripcion: descripcion,
        categoria: categoria,
        fecha: fecha,
        estado: estado,
        comentarios: comentarios
    };

    memoria.push(nuevochisme);
    localStorage.setItem("Chimografo", JSON.stringify(memoria));
    alert("Chisme agregado correctamente.");
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById("Identificador").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("comentarios").value = "";
}

document.getElementById("botonguardar").addEventListener("click", function(event) {
    event.preventDefault(); 
    agregarchisme();
});




function mostrarchismes(){
    let memoria = JSON.parse(localStorage.getItem("Chimografo"));
    let container = document.querySelector(".Padre");
    let template = document.getElementById("Mostrar");
    container.innerHTML = "";
    memoria.forEach((element,index ) => {
    let productClone = template.content.cloneNode(true);
    let Identificador = productClone.querySelector(".Identificador");
    let descripcion = productClone.querySelector(".Descripcion");
    let categoria = productClone.querySelector(".Categoria");
    let fecha = productClone.querySelector(".fecha");
    let estado = productClone.querySelector(".Estado");
    let comentarios = productClone.querySelector(".Comentarios");
    let botonborrar = productClone.querySelector(".Borrar")
    let botoneditar = productClone.querySelector(".Editar")

    Identificador.textContent = element.id
    descripcion.textContent = element.descripcion
    categoria.textContent = element.categoria
    fecha.textContent = element.fecha
    estado.textContent = element. estado
    
    comentarios.textContent = element.comentarios
    container.appendChild(productClone)

    botonborrar.addEventListener("click",  function(){
        borrarchisme(element.id)
    })
    botoneditar.addEventListener("click", function(){
        Editarchisme(element)
    })

    });
}

function borrarchisme (id){
    let memoria = JSON.parse(localStorage.getItem("Chimografo"));
    let index = memoria.findIndex((elemento)=> elemento.id == id)
    memoria.splice(index,1)
    console.log(index)
    localStorage.setItem("Chimografo", JSON.stringify(memoria));
    mostrarchismes()
    
}




function Editarchisme(element) {
    let memoria = JSON.parse(localStorage.getItem("Chimografo")) || [];
    let container = document.querySelector(".Padre");
    let template = document.getElementById("editor");
    let productClone = template.content.cloneNode(true);
    let botoneditar = productClone.querySelector("#botoneditar");
    let titulo = productClone.querySelector(".id_Edicion");
    container.innerHTML = "";
    titulo.textContent = element.id;
    container.appendChild(productClone);

    document.getElementById("descripcion_e").value = element.descripcion;
    document.getElementById("categoria_e").value = element.categoria;
    document.getElementById("fecha_e").value = element.fecha;
    document.getElementById("estado_e").value = element.estado;
    document.getElementById("comentarios_e").value = element.comentarios;

    botoneditar.addEventListener("click", function (event) {
        event.preventDefault();

        let descripcion = document.getElementById("descripcion_e").value.trim();
        let categoria = document.getElementById("categoria_e").value;
        let fecha = document.getElementById("fecha_e").value;
        let estado = document.getElementById("estado_e").value;
        let comentarios = document.getElementById("comentarios_e").value.trim();

        if (!descripcion || !categoria || !fecha || !estado) {
            alert("Todos los campos son obligatorios excepto los comentarios.");
            return;
        }

        let index = memoria.findIndex((el) => el.id === element.id);
        memoria[index] = {
            id: element.id,
            descripcion: descripcion,
            categoria: categoria,
            fecha: fecha,
            estado: estado,
            comentarios: comentarios,
        };

        localStorage.setItem("Chimografo", JSON.stringify(memoria));
        mostrarchismes();
    });
}











function mostrarchispersonal() {
    let memoria = JSON.parse(localStorage.getItem("Chimografo"));
    let container = document.querySelector(".padre2");
    let template = document.getElementById("Mostrar");
    container.innerHTML = "";

    memoria.forEach((element, index) => {
        if (element.categoria === "Personal") {
            let productClone = template.content.cloneNode(true);
            let Identificador = productClone.querySelector(".Identificador");
            let descripcion = productClone.querySelector(".Descripcion");
            let categoria = productClone.querySelector(".Categoria");
            let fecha = productClone.querySelector(".fecha");
            let estado = productClone.querySelector(".Estado");
            let comentarios = productClone.querySelector(".Comentarios");
            let botonborrar = productClone.querySelector(".Borrar");
            let botoneditar = productClone.querySelector(".Editar");

            Identificador.textContent = element.id;
            descripcion.textContent = element.descripcion;
            categoria.textContent = element.categoria;
            fecha.textContent = element.fecha;
            estado.textContent = element.estado;
            comentarios.textContent = element.comentarios;
            container.appendChild(productClone);

            botonborrar.addEventListener("click", function () {
                borrarchisme(element.id);
            });
            botoneditar.addEventListener("click", function () {
                Editarchisme(element);
            });
        }
    });
}

function mostrarchisLaboral() {
    let memoria = JSON.parse(localStorage.getItem("Chimografo"));
    let container = document.querySelector(".padre2");
    let template = document.getElementById("Mostrar");
    container.innerHTML = "";

    memoria.forEach((element, index) => {
        if (element.categoria === "Laboral") {
            let productClone = template.content.cloneNode(true);
            let Identificador = productClone.querySelector(".Identificador");
            let descripcion = productClone.querySelector(".Descripcion");
            let categoria = productClone.querySelector(".Categoria");
            let fecha = productClone.querySelector(".fecha");
            let estado = productClone.querySelector(".Estado");
            let comentarios = productClone.querySelector(".Comentarios");
            let botonborrar = productClone.querySelector(".Borrar");
            let botoneditar = productClone.querySelector(".Editar");

            Identificador.textContent = element.id;
            descripcion.textContent = element.descripcion;
            categoria.textContent = element.categoria;
            fecha.textContent = element.fecha;
            estado.textContent = element.estado;
            comentarios.textContent = element.comentarios;
            container.appendChild(productClone);

            botonborrar.addEventListener("click", function () {
                borrarchisme(element.id);
            });
            botoneditar.addEventListener("click", function () {
                Editarchisme(element);
            });
        }
    });
}

function mostrarFamiliar() {
    let memoria = JSON.parse(localStorage.getItem("Chimografo"));
    let container = document.querySelector(".padre2");
    let template = document.getElementById("Mostrar");
    container.innerHTML = "";

    memoria.forEach((element, index) => {
        if (element.categoria === "Familiar") {
            let productClone = template.content.cloneNode(true);
            let Identificador = productClone.querySelector(".Identificador");
            let descripcion = productClone.querySelector(".Descripcion");
            let categoria = productClone.querySelector(".Categoria");
            let fecha = productClone.querySelector(".fecha");
            let estado = productClone.querySelector(".Estado");
            let comentarios = productClone.querySelector(".Comentarios");
            let botonborrar = productClone.querySelector(".Borrar");
            let botoneditar = productClone.querySelector(".Editar");

            Identificador.textContent = element.id;
            descripcion.textContent = element.descripcion;
            categoria.textContent = element.categoria;
            fecha.textContent = element.fecha;
            estado.textContent = element.estado;
            comentarios.textContent = element.comentarios;
            container.appendChild(productClone);

            botonborrar.addEventListener("click", function () {
                borrarchisme(element.id);
            });
            botoneditar.addEventListener("click", function () {
                Editarchisme(element);
            });
        }
    });
}

let botonpersonal = document.querySelector(".personal");
botonpersonal.addEventListener("click", mostrarchispersonal);
let botonlaboral = document.querySelector(".laboral");
botonlaboral.addEventListener("click", mostrarchisLaboral);
let botonFamiliar = document.querySelector(".familiar"); // Cambiado de ".personal" a ".familiar"
botonFamiliar.addEventListener("click", mostrarFamiliar);

function mostrarGuardado() {
    let memoria = JSON.parse(localStorage.getItem("Chimografo"));
    let container = document.querySelector(".padre2");
    let template = document.getElementById("Mostrar");
    container.innerHTML = "";

    memoria.forEach((element, index) => {
        if (element.estado === "Guardado") {
            let productClone = template.content.cloneNode(true);
            let Identificador = productClone.querySelector(".Identificador");
            let descripcion = productClone.querySelector(".Descripcion");
            let categoria = productClone.querySelector(".Categoria");
            let fecha = productClone.querySelector(".fecha");
            let estado = productClone.querySelector(".Estado");
            let comentarios = productClone.querySelector(".Comentarios");
            let botonborrar = productClone.querySelector(".Borrar");
            let botoneditar = productClone.querySelector(".Editar");

            Identificador.textContent = element.id;
            descripcion.textContent = element.descripcion;
            categoria.textContent = element.categoria;
            fecha.textContent = element.fecha;
            estado.textContent = element.estado;
            comentarios.textContent = element.comentarios;
            container.appendChild(productClone);

            botonborrar.addEventListener("click", function () {
                borrarchisme(element.id);
            });
            botoneditar.addEventListener("click", function () {
                Editarchisme(element);
            });
        }
    });
}

function mostrarContado() {
    let memoria = JSON.parse(localStorage.getItem("Chimografo"));
    let container = document.querySelector(".padre2");
    let template = document.getElementById("Mostrar");
    container.innerHTML = "";

    memoria.forEach((element, index) => {
        if (element.estado === "Contado") {
            let productClone = template.content.cloneNode(true);
            let Identificador = productClone.querySelector(".Identificador");
            let descripcion = productClone.querySelector(".Descripcion");
            let categoria = productClone.querySelector(".Categoria");
            let fecha = productClone.querySelector(".fecha");
            let estado = productClone.querySelector(".Estado");
            let comentarios = productClone.querySelector(".Comentarios");
            let botonborrar = productClone.querySelector(".Borrar");
            let botoneditar = productClone.querySelector(".Editar");

            Identificador.textContent = element.id;
            descripcion.textContent = element.descripcion;
            categoria.textContent = element.categoria;
            fecha.textContent = element.fecha;
            estado.textContent = element.estado;
            comentarios.textContent = element.comentarios;
            container.appendChild(productClone);

            botonborrar.addEventListener("click", function () {
                borrarchisme(element.id);
            });
            botoneditar.addEventListener("click", function () {
                Editarchisme(element);
            });
        }
    });
}

let botoncontado = document.querySelector(".contado");
botoncontado.addEventListener("click", mostrarContado);
let guardado = document.querySelector(".guardado");
guardado.addEventListener("click", mostrarGuardado);










mostrarchismes()


