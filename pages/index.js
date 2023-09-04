//Componente React (Funcão JavaScript)
import React from "react";

function Home() {
  return (
    <div className="home-container">
      <h1 className="main-heading">Mantenha a Persistência</h1>
      <p className="sub-heading">
        A jornada pode ser difícil, mas a perseverança é a chave para o sucesso.
      </p>
    </div>
  );
}

//Dentro de um arquivo JS/TS eu posso ter varias funções declaradas, sinal para que a função HOME é a que a gente quer usar para renderizar a pág.
//Obs: default: Padrão
export default Home;
