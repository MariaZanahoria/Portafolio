import React from "react";
import "./Projects.css";

export default function Projects({ id }) {
  return (
    <div>
      <div className="contentProject" id={id}>
        <div>
          {/* <h1 className="title">Proyectos</h1> */}

          <div class="responsive">
            <div class="gallery">
              <h2 className="subtitle">Churrolatte</h2>
              <a
                href="https://mariazanahoria.github.io/Churrolatte/"
                target="_blank"
              >
                <img
                  src="https://i.ibb.co/SNpdcpC/Churrolatte.png"
                  alt="Churrolatte"
                  title="Churrolatte"
                />{" "}
              </a>
              <p className="desc">
                Sistema de comandas para una churreria, estructurado por
                Back-end y Front-end, trabajé en el Front-end utilizando HTML,
                JS, React y CSS3, cuenta con dos usuarios, "mesero" y el
                cocinero", los accesos a la base de datos se realizan mediante
                un token, esta diseñada para utilizarse en una tablet.
              </p>
            </div>
          </div>

          <div class="responsive">
            <div class="gallery">
              <h2 className="subtitle">Sholofood</h2>
              <a
                href="https://mariazanahoria.github.io/Sholofood/"
                target="_blank"
              >
                <img
                  src="https://i.ibb.co/BPywQwf/Sholofood.jpg"
                  alt="Sholofood"
                  title="Sholofood"
                />{" "}
              </a>
              <p className="desc">
                Red social que ayuda a difundir información de negocios
                informales entre los usuarios, desarrollada con HTML, JS, y
                Materialize es responsivo para dispositivos moviles.
              </p>
            </div>
          </div>

          <div class="responsive">
            <div class="gallery">
              <h2 className="subtitle">Check-inLoveGDL</h2>
              <a
                href="https://mariazanahoria.github.io/Check-inLoveGDL/src/"
                target="_blank"
              >
                <img
                  src="https://i.ibb.co/dWwvdng/Check-in-Love.png"
                  alt="Check-inLoveGDL"
                  title="Check-inLoveGDL"
                />{" "}
              </a>
              <p className="desc">
                Proyecto Ganador del 3° lugar del Talent Hackaton con el equipo
                "Amazonas" del track "Revive el corazon de tu ciudad" realizado
                en Junio del 2019 Webapp inspirada en los sitios y tours
                desconocidos en la ciudad de guadalajara, desarrollamos este
                proyecto con HTML, JS y CSS3, es responsivo para dispositivos
                moviles y computadoras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
