import React from "react";
import "./Caixa.css";
import Img from "./limpezaa.jpg";

function Caixa() {
  return (
    <section className="about">
      <div className="content">
        <img src={Img} alt="" />
        <div className="text">
          <h5>Como Funciona</h5>
          <h3>Encontre o Dikota ideal em poucos passos</h3>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            laboriosam itaque impedit at minima. Alias incidunt deserunt a,
            harum vitae nemo architecto recusandae debitis adipisci sed quaerat,
            fugiat, modi animi! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Earum laboriosam itaque impedit at minima. Alias
            incidunt deserunt a, harum vitae nemo architecto recusandae debitis
            adipisci sed quaerat, fugiat, modi animi!
          </p> */}
          <div className="lista">
            <ul>
              <li>
                <p>
                  <span>1-</span> Explore os nossos serviços e envie-nos o seu
                  pedido.
                </p>
              </li>
              <li>
                <p>
                  <span>2-</span> Nós analisaremos o seu pedido e encontraremos
                  o especialista ideal mais próximo de si.
                </p>
              </li>
              <li>
                <p>
                  <span>3-</span> Efetue o pagamento facilmente, a partir de
                  qualquer lugar.
                </p>
              </li>
              <li>
                <p>
                  <span>4-</span> Receba o nosso especialista e usufrua do
                  serviço na data e hora agendados.
                </p>
              </li>
              <li>
                <p>
                  <span>5-</span> Envie-nos o seu feedback.
                </p>
              </li>
            </ul>
          </div>
          <button type="button">Saiba mais</button>
        </div>
      </div>
    </section>
  );
}

export default Caixa;
