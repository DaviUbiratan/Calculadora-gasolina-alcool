
function calcular(event) {
    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;

    let contentResult = document.getElementById("content-result")
    let textResult = document.getElementById("text-result")

    let alcoolResult = document.getElementById("alcool-result")
    let gasolinaResult = document.getElementById("gasolina-result")



    // Calculo: alcool / gasolina
    // E se o resultado for menor que 0.7 compensa usar alcool

    let calculo = (alcoolInput / gasolinaInput);

    if (calculo < 0.7) {
        textResult.innerHTML = "Compensa usar Álcool"
    } else {
        textResult.innerHTML = "Compensa usar Gasolina"
    }


    gasolinaResult.innerHTML = "Gasolina R$ " + gasolinaInput
    alcoolResult.innerHTML = "Álcool R$ " + alcoolInput
 
    contentResult.classList.remove("hide")

}