// Función para encriptar
function encriptar() {
    let texto = document.getElementById("inputTexto").value.toLowerCase();
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    document.getElementById("resultadoTexto").value = textoEncriptado;
}

// Función para desencriptar
function desencriptar() {
    let texto = document.getElementById("inputTexto").value.toLowerCase();
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");
    document.getElementById("resultadoTexto").value = textoDesencriptado;
}

// Función para copiar el texto al portapapeles
function copiar() {
    let textoResultado = document.getElementById("resultadoTexto");
    textoResultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
