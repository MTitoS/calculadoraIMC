const form = document.querySelector(".input-container");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputPeso = e.target.querySelector(".peso");
  const inputAltura = e.target.querySelector(".altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResult("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResult("Altura inválida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getRangeImc(imc);
  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResult(msg, true);
});

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function getRangeImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function setResult(msg, isValid) {
  const result = document.querySelector(".result");
  result.innerHTML = "";

  let p = document.createElement("p");

  if (isValid) {
    p.classList.add("valid");
  } else {
    p.classList.add("invalid");
  }

  p.innerHTML = msg;
  result.appendChild(p);
}
