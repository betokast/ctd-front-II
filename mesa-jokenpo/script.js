// 1. Pedra ganha de Tesoura.
// 2. Tesoura ganha de Papel.
// 3. Papel ganha de Pedra.

// Variáveis:
let partida = true;
let pontosUsuario = 0;
let pontosComputador = 0;

// Laço de repetição (É true até que um dos dois jogadores ganhe duas rodadas):
while (partida) {
  partida++; //Variável de controle

  // Palpite do usuário:
  var palpiteUsuario = prompt("Digite 1 (Pedra), 2 (Papel) ou 3 (Tesoura)");
  var palpiteUserConvertido = parseInt(palpiteUsuario);

  // Palpite do computador:
  var palpiteComputador = Math.round(Math.random() * (3 - 1) + 1);
  palpiteComputadorConv = parseInt(palpiteComputador);

  if (palpiteUserConvertido == 1) {
    //1 - Pedra
    if (palpiteComputadorConv == 1) {
      console.log(`O usuário jogou pedra e o computador também. Empate`);
    } else if (palpiteComputadorConv == 2) {
      pontosComputador += 1;
      console.log(`Pontos computador: ${pontosComputador}`);
      console.log(
        `Usuário jogou pedra e o computador jogou papel. Ponto computador`
      );
    } else if (palpiteComputadorConv == 3) {
      pontosUsuario += 1;
      console.log(`Pontos usuário: ${pontosUsuario}`);
      console.log(
        `O usuário jogou pedra e o computador jogou tesoura. Ponto usuário`
      );
    }
  }
  if (palpiteUserConvertido == 2) {
    //Papel
    if (palpiteComputadorConv == 2) {
      console.log(`O usuário jogou papel e o computador também. Empate`);
    } else if (palpiteComputadorConv == 1) {
      pontosComputador += 1;
      console.log(`Pontos computador: ${pontosComputador}`);
      console.log(
        `O usuário jogou papel e o computador jogou pedra. Ponto usuário`
      );
    } else if (palpiteComputadorConv == 3) {
      pontosUsuario += 1;
      console.log(`Pontos usuário: ${pontosUsuario}`);
      `O usuário jogou papel e o computador jogou pedra. Ponto computador`;
    }
  }

  if (palpiteUserConvertido == 3) {
    //Tesoura
    if (palpiteComputadorConv == 3) {
      console.log(`O usuário jogou tesoura e o computador também. Empate`);
    } else if (palpiteComputadorConv == 1) {
      pontosComputador += 1;
      console.log(`Pontos computador: ${pontosComputador}`);
      console.log(
        `O usuário jogou tesoura e o computador jogou pedra. Ponto computador`
      );
    } else if (palpiteComputadorConv == 2) {
      pontosUsuario += 1;
      console.log(`Pontos usuário: ${pontosUsuario}`);
      console.log(
        `O usuário jogou tesoura e o computador jogou papel. Ponto usuário`
      );
    }
  }

  if (pontosComputador == 2) {
    console.log("O computador venceu!");
    partida = false;
  } else if (pontosUsuario == 2) {
    console.log("O Usuário venceu");
    partida = false;
  }
}
