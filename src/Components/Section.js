import React from "react";
import "./MainPage.css";

export default function AboutMe({ id }) {
  return (
    <div className="section-content">
      <div id={id}>
        <div>
          <h1 className="title">Isela Carrillo</h1>
          <table>
            <tr>
              <td>
                <img
                  src="https://i.ibb.co/z2wLp6b/IMG-20190710-222137.jpg"
                  className="me"
                  alt="Me"
                  title="Me"
                />
              </td>
              <td>
                <p>
                  Me gustan los desafíos, encontrar sitios a visitar, disfruto
                  probar nuevas actividades (tecnología, deporte, arte, belleza,
                  ciencia, etc) para explotar mis talentos, descubrir aspectos
                  de mí que no conocía y adquirir nuevas habilidades. Me adapto
                  a lo que la vida me presenta y sé hacer frente a los problemas
                  y retos para crecer como persona, me atrevo a crear mi propio
                  camino!
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
