// 1 - Pedra
// 2 - Papel
// 3 - Tesoura

for (let i = 0; i < 2; i++) {
  var palpiteUsuario = prompt("Digite 1 (Pedra), 2 (Papel) ou 3 (Tesoura)");
  var palpiteConvertido = parseInt(palpiteUsuario);

  var palpiteComputador = Math.round(Math.random() * (3 - 1) + 1);
  palpiteComputadorConv = parseInt(palpiteComputador);

  // var partida = 0;
  var pontosUsuario = 0;
  var pontosComputador = 0;

  switch (palpiteConvertido) {
    // Usuario Pedra (1)
    case palpiteConvertido == 1 && palpiteComputadorConv == 1:
      console.log("Empate");
      break;

    case palpiteConvertido == 1 && palpiteComputadorConv == 2:
      pontosComputador++;
      console.log("Ponto computador");
      break;

    case palpiteConvertido == 1 && palpiteComputadorConv == 3:
      pontosUsuario++;
      console.log("Ponto usuário");
      break;

    // Usuario Papel (2)
    case palpiteConvertido == 2 && palpiteComputadorConv == 2:
      console.log("Empate");
      break;

    case palpiteConvertido == 2 && palpiteComputadorConv == 1:
      pontosUsuario++;
      console.log("Ponto usuário");
      break;

    case palpiteConvertido == 2 && palpiteComputadorConv == 3:
      pontosComputador++;
      console.log("Ponto computador");
      break;

    // Usuario Tesoura (3)
    case palpiteConvertido == 3 && palpiteComputadorConv == 3:
      console.log("Empate");
      break;

    case palpiteConvertido == 3 && palpiteComputadorConv == 1:
      pontosComputador++;
      console.log("Ponto computador");
      break;

    case palpiteConvertido == 3 && palpiteComputadorConv == 2:
      pontosUsuario++;
      console.log("Ponto usuário");
      break;
  }

  if (pontosComputador == 2) {
    console.log("O computador venceu!");
  } else if (pontosUsuario == 2) {
    console.log("O Usuário venceu");
  }
}
