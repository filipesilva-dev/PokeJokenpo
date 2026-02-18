document.addEventListener('DOMContentLoaded', () => {

  const botoes = document.querySelectorAll("button");
  const opcoes = ["Pedra", "Papel", "Tesoura"];

  function escolhaComputador() {
    return opcoes[Math.floor(Math.random() * opcoes.length)];
  }

  function resultado(usuario, computador) {
    if (usuario === computador) {
      return "Empate!";
    } else if (
      (usuario === "Pedra" && computador === "Tesoura") ||
      (usuario === "Papel" && computador === "Pedra") ||
      (usuario === "Tesoura" && computador === "Papel")
    ) {
      return "Você venceu!";
    } else {
      return "Você perdeu!";
    }
  }

  botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
      const escolhaUsuario = botao.textContent;
      const escolhaDoPC = escolhaComputador();

      alert(
        `Você escolheu: ${escolhaUsuario}\n` +
        `O computador escolheu: ${escolhaDoPC}\n` +
        `${resultado(escolhaUsuario, escolhaDoPC)}`
      );
    });
  });

});
