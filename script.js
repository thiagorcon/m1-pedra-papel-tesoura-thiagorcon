function playRockPaperScissor(jogador1, jogador2) {
  let vencedor = "";
  if (jogador1 == "Pedra" && jogador2 == "Pedra") {
    return (vencedor = "Empate!");
  } else if (jogador1 == "Papel" && jogador2 == "Papel") {
    return (vencedor = "Empate!");
  } else if (jogador1 == "Tesoura" && jogador2 == "Tesoura") {
    return (vencedor = "Empate!");
  } else if (jogador1 == "Papel" && jogador2 == "Tesoura") {
    return (vencedor = "Jogador 2 venceu!");
  } else if (jogador1 == "Tesoura" && jogador2 == "Pedra") {
    return (vencedor = "Jogador 2 venceu!");
  } else if (jogador1 == "Pedra" && jogador2 == "Papel") {
    return (vencedor = "Jogador 2 venceu!");
  } else if (jogador2 == "Papel" && jogador1 == "Tesoura") {
    return (vencedor = "Jogador 1 venceu!");
  } else if (jogador2 == "Tesoura" && jogador1 == "Pedra") {
    return (vencedor = "Jogador 1 venceu!");
  } else if (jogador2 == "Pedra" && jogador1 == "Papel") {
    return (vencedor = "Jogador 1 venceu!");
  }
}
console.log(playRockPaperScissor());
