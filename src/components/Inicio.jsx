function Inicio() {
  return (
    <div id="inicio">
      <div class="container-principal"> 
        <br></br>
        <div class="conteudo">
          <h1>
            Eleve seu estilo de vida a outro nível com <span class="letra-laranja"> um treino de qualidade! </span>
          </h1>
          <p>
            Olá! Sou a Raquel, Personal Trainer com mais de 5 anos de experiência,
            dedicada a te ajudar a alcançar uma vida mais saudável, ativa e
            equilibrada por meio de treinos personalizados e eficazes.
          </p>
          <a
            href="https://wa.me/5561982281947"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="botao-contate-agora fundo-laranja"> Contrate agora </button>
          </a>
        </div>
        <div class="container-foto"> 
          <div id="contorno-foto-1"></div>
          <img src="src/assets/raquel-personal.png" alt="Personal Trainer Raquel" class="foto-raquel"></img>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
