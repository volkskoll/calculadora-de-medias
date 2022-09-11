/*var nome = "Priscilla";
var Bimestre1 = 9;
var Bimestre2 = 7.5;
var Bimestre3 = 5;
var Bimestre4 = 5;

var media = (Bimestre1 + Bimestre2 + Bimestre3 + Bimestre4) / 4;

var notaFinal = media.toFixed(1);

alert("Boas vindas " + nome + ", " + "sua média é: " + notaFinal);
if (notaFinal > 7) {
  alert("Você foi APROVADA! " + "Parabéns!");
} else if (notaFinal < 7) {
  window.alert("Você foi REPROVADA! " + "Tente estudar mais :(");
}*/

// isso é um comentário

// Revisão:
// variáveis, strings, console.log, toFixed, operações matemáticas, concatenação

function CalcularMedia() {
  var Bimestre1 = document.getElementById("Primeiro-Bimestre");
  var valorBimestre1 = parseInt(Bimestre1.value);

  var Bimestre2 = document.getElementById("Segundo-Bimestre");
  var valorBimestre2 = parseInt(Bimestre2.value);

  var Bimestre3 = document.getElementById("Terceiro-Bimestre");
  var valorBimestre3 = parseInt(Bimestre3.value);

  var Bimestre4 = document.getElementById("Quarto-Bimestre");
  var valorBimestre4 = parseInt(Bimestre4.value);

  var soma =
    (valorBimestre1 + valorBimestre2 + valorBimestre3 + valorBimestre4) / 4;
  var media = soma.toFixed(0);

  var resultadoMedia = document.getElementById("mediaFinal");
  var mediaFinal = "Sua média é " + media;
  resultadoMedia.innerHTML = mediaFinal;
  if (media > 7) {
    alert("Você foi APROVADA! \nParabéns!");
  } else {
    alert("Você foi Reprovada! \nContinue estudando.");
  }
}

/*if (  valorBimestre1 == "" &&  valorBimestre2 == "" &&  valorBimestre3 == "" &&  valorBimestre4 == ""); {
  alert("Por favor insira suas notas");
}*/