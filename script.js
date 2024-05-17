function playRockPaperScissor(jogador1, jogador2) {
  if (jogador1 === jogador2) {
    return "Empate!";
  } else if (
    (jogador1 === "Papel" && jogador2 === "Tesoura") ||
    (jogador1 === "Tesoura" && jogador2 === "Pedra") ||
    (jogador1 === "Pedra" && jogador2 === "Papel")
  ) {
    return "Jogador 2 venceu!";
  } else if (
    (jogador2 === "Papel" && jogador1 === "Tesoura") ||
    (jogador2 === "Tesoura" && jogador1 === "Pedra") ||
    (jogador2 === "Pedra" && jogador1 === "Papel")
  ) {
    return "Jogador 1 venceu!";
  }
}

console.log(playRockPaperScissor());
