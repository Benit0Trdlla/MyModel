// const alert = document.getElementById("alert");
// const alert2 = document.getElementById("alert2");
const buttons = document.querySelectorAll(".btn");

// const respuestasCorrectas = new Set(["7"]); // Definir aquí las respuestas correctas

// function showAlert(numero) {
//     alert.classList.toggle("d-none");
//     alert.classList.remove("alert-danger", "alert-success");
//     alert.classList.add(respuestasCorrectas.has(numero) ? "alert-success" : "alert-danger");
//     alert.querySelector("strong").textContent = respuestasCorrectas.has(numero) ? "Respuesta correcta!" : `La respuesta correcta era: ${respuestasCorrectas.values().next().value}`;
//     alert.querySelector("a").classList.toggle("d-none", respuestasCorrectas.has(numero));
// }

// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         const numero = button.textContent.trim();
//         showAlert(numero);
//     });
// });

// const alert = document.getElementById("alert");


function setupButtonGroup(buttons, alert, respuestasCorrectas) {
    function showAlert(respuesta) {
        alert.classList.toggle("d-none");
        alert.classList.remove("alert-danger", "alert-success");
        // console.log(respuestasCorrectas.has(respuesta))
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