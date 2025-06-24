function TipoDeServico() {
  return (
    <div id="tipo-servico">
      <div class="conteudo-servico">
        <h1> Diferenciais do Serviço </h1>
        <p> Os melhores treinos para você </p>
      </div>
      <div className="diferenciais-container">
        <div className="caixinha-diferencial">
          <img src="src/assets/icone-estrela-branca.svg" alt="Ícone de estrela" id="icone-estrela-branca"/>
          <h4>Aulas Online</h4>
          <p>
            Aulas ao vivo por chamada de vídeo, de onde você estiver, com orientação clara e em tempo real. Basta ter internet e fones de ouvido (preferencialmente com abafador de ruídos).
          </p>
        </div>

        <div className="caixinha-diferencial">
          <img src="src/assets/icone-estrela-branca.svg" alt="Ícone de estrela" id="icone-estrela-branca"/>
          <h4>Aulas Presenciais</h4>
          <p>
            Atendimentos presenciais em Brasília, com foco no seu desenvolvimento físico e acompanhamento individualizado.
          </p>
        </div>

        <div className="caixinha-diferencial">
          <img src="src/assets/icone-estrela-branca.svg" alt="Ícone de estrela" id="icone-estrela-branca"/>
          <h4>Planilhas Personalizadas</h4>
          <p>
            Treinos feitos sob medida para o seu objetivo. As planilhas são entregues por aplicativo (sem custo adicional) com suporte em vídeo e acompanhamento via WhatsApp para dúvidas e adaptações.
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/5561982281947"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Contrate agora</button>
      </a>

    </div>
  );
}

export default TipoDeServico;
