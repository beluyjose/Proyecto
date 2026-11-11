
const boton = document.getElementById("btnEvaluar");

boton.addEventListener("click", function() {
    let puntaje = 0;

    // Pregunta 1
    let res1 = document.getElementById("res1");
    if (document.getElementById("q1b").checked) {
        res1.innerHTML = "¡Correcto!";
        res1.style.color = "green";
        puntaje++;
    } else {
        res1.innerHTML = "Incorrecto. Pertenecía a los escolapios.";
        res1.style.color = "red";
    }

    // Pregunta 2
    let res2 = document.getElementById("res2");
    if (document.getElementById("q2a").checked) {
        res2.innerHTML = "¡Correcto!";
        res2.style.color = "green";
        puntaje++;
    } else {
        res2.innerHTML = "Incorrecto. Vistió por primera vez el hábito en 1882.";
        res2.style.color = "red";
    }

    // Pregunta 3
    let res3 = document.getElementById("res3");
    if (document.getElementById("q3c").checked) {
        res3.innerHTML = "¡Correcto!";
        res3.style.color = "green";
        puntaje++;
    } else {
        res3.innerHTML = "Incorrecto. Se dedicó a la educación de niños y jóvenes.";
        res3.style.color = "red";
    }

    // Pregunta 4
    let res4 = document.getElementById("res4");
    if (document.getElementById("q4b").checked) {
        res4.innerHTML = "¡Correcto!";
        res4.style.color = "green";
        puntaje++;
    } else {
        res4.innerHTML = "Incorrecto. Fue a la parroquia para celebrar misa y proteger el Santísimo Sacramento.";
        res4.style.color = "red";
    }

    // Pregunta 5
    let res5 = document.getElementById("res5");
    if (document.getElementById("q5a").checked) {
        res5.innerHTML = "¡Correcto!";
        res5.style.color = "green";
        puntaje++;
    } else {
        res5.innerHTML = "Incorrecto. Fue beatificado el 1 de octubre de 1995.";
        res5.style.color = "red";
    }

    // Resultado final
    let resultadoFinal = document.getElementById("resultadoFinal");
    resultadoFinal.innerHTML = "Obtuviste " + puntaje + " de 5 respuestas correctas.";
});
