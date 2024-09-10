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
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    agregarchisme();
});
