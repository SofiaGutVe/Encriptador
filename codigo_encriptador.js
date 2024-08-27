//este es el codigo para encripatar textos

function btnEncriptar(){
    let text_entrada = document.getElementById("text_entrada").value;
    
    let textoEncriptado = encriptador(text_entrada);
    
    /*console.log("este es otro" + textoEncriptado)*/
    
    let text_final = document.getElementById("text_final");
    
    if (textoEncriptado.value = undefined) {
        return text_final.style.backgroundImage
    }
    
    text_final.style.backgroundImage = "none"
    
    text_final.value = textoEncriptado;
    
    document.getElementById("text_entrada").value="";
}

function encriptador(texto){
    let clave = /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/ /*revisa que no contenga caracteres especiales*/
    
    if(texto !== texto.toLowerCase()) return alert("Solo se aceptan frases en minusculas")
    
    if(clave.test(texto) == 0) return alert("Esta en blanco o escribiste mal")
    
    let  encriptacion_clave = { e : "enter", a:"ai", i:"imes", o:"ober", u : "ufat"}
    
    let busqueda = new RegExp(Object.keys(encriptacion_clave).join("|"),"gi");
    
    texto = texto.replace(busqueda,function(match){
        return encriptacion_clave[match];
    })
    
    console.log("esta es" + texto)
    
    return texto
}

function desencriptador(texto){
    let clave = /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/
    
    if(texto !== texto.toLowerCase()) return alert("Solo se aceptan frases en minusculas")
    
    if(clave.test(texto) == 0) return alert("Esta en blanco o escribiste mal")
    
    let  encriptacion_clave = {enter :"e",ai:"a",imes:"i",ober:"o",ufat : "u"}
    
    let busqueda = new RegExp(Object.keys(encriptacion_clave).join("|"),"gi");
    
    texto = texto.replace(busqueda,function(match){
        return encriptacion_clave[match];
    })
    
    return texto
}

function btnDesencriptar(){
    let text_entrada = document.getElementById("text_entrada").value;
    
    let textoEncriptado = desencriptador(text_entrada);
    
    /*console.log("este es otro" + textoEncriptado)*/
    
    let text_final = document.getElementById("text_final");
    
    if (textoEncriptado.value = undefined) {
        return text_final.style.backgroundImage
    }
    
    text_final.style.backgroundImage = "none"
    
    text_final.value = textoEncriptado;
    
    document.getElementById("text_entrada").value="";
}

function copiar(){
    let text_final = document.getElementById("text_final");
    text_final.select();
    navigator.clipboard.writeText(text_final.value)
    text_final.value = "";
    
}


