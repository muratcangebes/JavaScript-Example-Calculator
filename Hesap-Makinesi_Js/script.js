let equal_pressed = 0;

let button_inputs = document.querySelectorAll(".input-button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";
};

button_inputs.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if (equal_pressed == 1) {
            input.value = "";
            equal_pressed = 0;
        }

        input.value += button_class.value;
    })
})

equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = input.value;
    try {
        let solution = calculateExpression(inp_val);
        input.value = Number.isInteger(solution) ? solution : solution.toFixed(2);
    } catch (err) {
        alert("GEÇERSİZ !!")
    }
});

// CLEAR
clear.addEventListener("click", () => {
    input.value = "";
});

erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});

function calculateExpression(expression) {
    // İşlemleri dikkatlice kontrol ederek gerçekleştirin
    // Örnek bir işlem, güvenli bir şekilde yapılabilir:
    return Function('"use strict";return (' + expression + ')')();
}
