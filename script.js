// const alert = document.getElementById("alert");
// const alert2 = document.getElementById("alert2");
// const buttons = document.querySelectorAll(".btn");


function setupButtonGroup(buttons, alert, respuestasCorrectas) {
    function showAlert(respuesta) {
        alert.classList.toggle("d-none");
        alert.classList.remove("alert-danger", "alert-success");
        if (respuestasCorrectas.has(respuesta)) {
            alert.classList.add("alert-success");
        } else {
            alert.classList.add("alert-danger");
        }
        alert.querySelector("strong").textContent = respuestasCorrectas.has(respuesta) ? "Respuesta correcta!" : `La respuesta correcta era: ${respuestasCorrectas.values().next().value}`;
        alert.querySelector("a").classList.toggle("d-none", respuestasCorrectas.has(respuesta));
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const respuesta = button.textContent.trim();
            showAlert(respuesta);
        });
    });
}

const group1Buttons = document.querySelectorAll(".group1 .btn");
const respuestasCorrectasGroup1 = new Set(["7"]); // Definir aquí las respuestas correctas para el grupo 1
const alertGroup1 = document.getElementById("alert");
setupButtonGroup(group1Buttons, alertGroup1, respuestasCorrectasGroup1);

const group2Buttons = document.querySelectorAll(".group2 .btn");
const respuestasCorrectasGroup2 = new Set(["(X-3)(x+3)"]); // Definir aquí las respuestas correctas para el grupo 2
const alertGroup2 = document.getElementById("alert2");
setupButtonGroup(group2Buttons, alertGroup2, respuestasCorrectasGroup2);

let number = 30;
let intervalId;

const timerElement = document.querySelector(".bg-warning p"); 
const buttonTimer = document.getElementById("cronometrar");
const accordionFlush = document.getElementById("accordionFlush");

buttonTimer.addEventListener("click", () => {
    accordionFlush.classList.toggle("d-none");
    number = 30;
    clearInterval(intervalId); // Limpiar el intervalo existente para evitar múltiples intervalos activos
    intervalId = setInterval(() => {
        timerElement.textContent = `Tu tiempo es de ${number} segundos`; // Mostrar el número actual en el elemento del cronómetro
        if (number === 0) {
            clearInterval(intervalId);
            timerElement.textContent = `Se acabo el tiempo`; // Mostrar el número actual en el elemento del cronómetro
            accordionFlush.classList.toggle("d-none");
        }
        number--;
    }, 1000);
});
