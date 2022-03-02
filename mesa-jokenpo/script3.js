var palpiteUsuario = prompt("Digite 1 (Papel), 2 (Tesoura) ou 3 (Pedra)");
var palpiteConvertido = parseInt(palpiteUsuario);

var palpiteComputador = Math.round(Math.random() * (3 - 1) + 1);

palpiteComputadorConv = parseInt(palpiteComputador);

switch (palpiteConvertido) {
  case 1:
    if (palpiteComputadorConv == 1) {
      console.log(
        "O usuário digitou " +
          palpiteConvertido +
          " e o computador escolheu " +
          palpiteComputadorConv +
          "\nAmbos escolheram papel. Resultado: Empate"
      );
    } else if (palpiteComputadorConv == 2) {
      console.log(
        "O usuário digitou " +
          palpiteConvertido +
          " e o computador escolheu " +
          palpiteComputadorConv +
          "\nO usuário escolheu papel e o computador escolheu tesoura. Resultado: O computador ganhou"
      );
    } else {
      console.log(
        "O usuário digitou " +
          palpiteConvertido +
          " e o computador escolheu " +
          palpiteComputadorConv +
          "\nO usuário escolheu papel e o computador escolheu pedra. Resultado: O usuário ganhou"
      );
    }
    break;
  case 2:
    if (palpiteComputador == 2) {
      console.log(
        "O usuário digitou " +
          palpiteConvertido +
          " e o computador escolheu " +
          palpiteComputador +
          "\nAmbos escolheram tesoura. Resultado: Empate"
      );
    } else if (palpiteComputador == 3) {
      console.log(
        "O usuário digitou " +
          palpiteConvertido +
          " e o computador escolheu " +
          palpiteComputador +
          "\nO usuário escolheu tesoura e o computador escolheu pedra. Resultado: O computador ganhou"
      );
    } else {
      console.log(
        "O usuário digitou " +
          palpiteConvertido +
          " e o computador escolheu " +
          palpiteComputador +
          "\nO usuário escolheu tesoura e o computador escolheu papel. Resultado: O usuário ganhou"
      );
    }
    break;
  case 3:
    if (palpiteComputador == 3) {
      console.log(
        "O usuário digitou " +
          palpiteConvertido +
          " e o computador escolheu " +
          palpiteComputador +
          "\nAmbos escolheram pedra. Resultado: Empate"
      );
    } else if (palpiteComputador == 2) {
      console.log(
        "O usuário digitou " +
          palpiteConvertido +
          " e o computador escolheu " +
          palpiteComputador +
          "\nO usuário escolheu pedra e o computador escolheu tesoura. Resultado: O usuário ganhou"
      );
    } else {
      console.log(
        "O usuário digitou " +
          palpiteConvertido +
          " e o computador escolheu " +
          palpiteComputador +
          "\nO usuário escolheu pedra e o computador escolheu papel. Resultado: O computador ganhou"
      );
    }
    break;
}
