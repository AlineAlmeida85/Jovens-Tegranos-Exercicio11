function verificar() {
    

    nota1 = parseFloat(document.getElementById("inputNota1").value.replace(",", "."));
    nota2 = parseFloat(document.getElementById("inputNota2").value.replace(",", "."));


    let resultado = (nota1 + nota2);
    let status = " ";
    

    if(resultado < 60.0) {
        status = "REPROVADO";
    } else {
        status = "APROVADO";
    }

    notaFinal.innerHTML = resultado;
    resultadoFinal.innerHTML = status;   
}