import React from "react";
import "./MainPage.css";

export default function AboutMe({ id }) {
  return (
    <div className="intro">
      <div className="contentMe" id={id}>
      <div class="responsiveMe">
          <p className="descMe ">
            <img
              src="https://i.ibb.co/z2wLp6b/IMG-20190710-222137.jpg"
              className="me"
              alt="Me"
              title="Me"
            /><br>
            </br>
            Me gustan los desafíos, encontrar sitios a visitar, disfruto probar
            nuevas actividades (tecnología, deporte, arte, belleza, ciencia,
            etc) para explotar mis talentos, descubrir aspectos de mí que no
            conocía y adquirir nuevas habilidades. Me adapto a lo que la vida me
            presenta y sé hacer frente a los problemas y retos para crecer como
            persona, me atrevo a crear mi propio camino!
          </p>
        </div>
      </div>
    </div>
  );
}
