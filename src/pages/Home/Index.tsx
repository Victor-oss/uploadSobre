import React from 'react';
import './styles.css';

/*<header className="Home-header">
          <text id="pomod">POMOD</text>
          <text id="orc">ORC</text>
        </header>*/
function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
          <text id="pomod">POMOD</text>
          <text id="orc">ORC</text>
      </header>
      <main>
        <span id="Proposta">
          <div>
            <h1>Proposta</h1>
          </div>
          <div>
            <p> O nosso projeto consiste em um
              organizador de tarefas baseado na Técnica
              Pomodoro, que constitui-se na divisão de tempo
              dedicado a tarefas a fim de melhorar a produtividade
            </p>
          </div>
        </span>
        <div className="linhaVertical"></div>
        <span id="QuemSomos">
          <div>
            <h1>Quem Somos</h1>
          </div>
          <div>
            <p>A nossa equipe
            é composta por quatro membros,
            todos trainees da empresa júnior Orc'estra
            Gamificação
            </p>
          </div>
        </span>
      </main> 
      <div id="FotosGp">
        <picture>
        <img src="../../fonts/Foto_Maria.jpg" alt="foto_Maria"></img>
        <img src="../../fonts/Foto_Pedro.jpg" alt="foto_Pedro"></img>
        <img src="../../fonts/Foto_Victorio.jpg" alt="foto_Victorio"></img>
        </picture>
      </div>
      <div className="buttons">
        <a href="#" id="init">VOLTAR</a>
      </div>
    </div>
  );
}

export default Home;