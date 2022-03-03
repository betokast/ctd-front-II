// 1 - Pedra
// 2 - Papel
// 3 - Tesoura

let partida = 0;
let pontosUsuario = 0;
let pontosComputador = 0;

while (partida < 10) {
  partida++;
  var palpiteUsuario = prompt("Digite 1 (Pedra), 2 (Papel) ou 3 (Tesoura)");
  var palpiteConvertido = parseInt(palpiteUsuario);

  var palpiteComputador = Math.round(Math.random() * (3 - 1) + 1);
  palpiteComputadorConv = parseInt(palpiteComputador);

  if (palpiteConvertido == 1) {
    if (palpiteComputadorConv == 1) {
      console.log(
        `O usuário jogou ${palpiteConvertido} e o computador jogou ${palpiteComputadorConv}. Empate`
      );
    } else if (palpiteComputadorConv == 2) {
      pontosComputador += 1;
      console.log(`Pontos computador: ${pontosComputador}`);
      console.log(
        `O computador jogou ${palpiteComputadorConv}. Ponto computador`
      );
    } else if (palpiteComputadorConv == 3) {
      pontosUsuario += 1;
      console.log(`Pontos usuário: ${pontosUsuario}`);
      console.log(`O usuário jogou ${palpiteConvertido}. Ponto usuário`);
    }
    if (pontosComputador == 2) {
      console.log("O computador venceu!");
    } else if (pontosUsuario == 2) {
      console.log("O Usuário venceu");
    }
  }
  if (palpiteConvertido == 2) {
    if (palpiteComputadorConv == 2) {
      console.log(
        `O usuário jogou ${palpiteConvertido} e o computador jogou ${palpiteComputadorConv}. Empate`
      );
    } else if (palpiteComputadorConv == 1) {
      pontosComputador += 1;
      console.log(`Pontos computador: ${pontosComputador}`);
      console.log(
        `O computador jogou ${palpiteComputadorConv}. Ponto computador`
      );
    } else if (palpiteComputadorConv == 3) {
      pontosUsuario += 1;
      console.log(`Pontos usuário: ${pontosUsuario}`);
      console.log(`O usuário jogou ${palpiteConvertido}. Ponto usuário`);
    }
    if (pontosComputador == 2) {
      console.log("O computador venceu!");
    } else if (pontosUsuario == 2) {
      console.log("O Usuário venceu");
    }
  }

  if (palpiteConvertido == 3) {
    if (palpiteComputadorConv == 3) {
      console.log(
        `O usuário jogou ${palpiteConvertido} e o computador jogou ${palpiteComputadorConv}. Empate`
      );
    } else if (palpiteComputadorConv == 1) {
      pontosComputador += 1;
      console.log(`Pontos computador: ${pontosComputador}`);
      console.log(
        `O computador jogou ${palpiteComputadorConv}. Ponto computador`
      );
    } else if (palpiteComputadorConv == 2) {
      pontosUsuario += 1;
      console.log(`Pontos usuário: ${pontosUsuario}`);
      console.log(`O usuário jogou ${palpiteConvertido}. Ponto usuário`);
    }
    if (pontosComputador == 2) {
      console.log("O computador venceu!");
    } else if (pontosUsuario == 2) {
      console.log("O Usuário venceu");
    }
  }
}
