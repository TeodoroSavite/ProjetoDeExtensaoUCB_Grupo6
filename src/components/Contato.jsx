import './Contato.css';

function Contato() {
  return (
    <footer id="contato">
      <div className="conteudo-centrado">
        <h3>Desenvolvido por:</h3>
        <ul className="lista-desenvolvedores">
          <li>Yasmin Rezende</li>
          <li>Tibor Hodos Neto</li>
          <li>Teodoro Martins Savite</li>
          <li>Yohanna Araújo da Silva</li>
          <li>Vinícius de Oliveira</li>
          <li>Sherlyene Vitória Mauriz de Oliveira</li>
        </ul>
      </div>

      <div className="instagram-bar">
        <p className="insta">
          Instagram{" "}
          <a
            href="https://www.instagram.com/raqueloliveira.fit?igsh=ZnR6Z3QyMm9ieDd4"
            target="_blank"
            rel="noopener noreferrer"
          >
            @raqueloliveira.fit
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Contato;
