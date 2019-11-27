import React from "react";
import "./MainPage.css";

export default function Projects({ id }) {
  return (
    <div className="project-content">
      <div className="content" id={id}>
        <div>
          <h1 className="title">Proyectos</h1>

          <h2 className="subtitle">Churrolatte</h2>
          <table>
            <tr>
              <td>
                <a
                  href="https://26erika.github.io/churrolatte/"
                  target="_blank"
                >
                  <img
                    src="https://i.ibb.co/SNpdcpC/Churrolatte.png"
                    className="churrolatte"
                    alt="Churrolatte"
                    title="Churrolatte"
                  />{" "}
                </a>
              </td>
              <td>
                <p className="textDesing">
                  Webapp realizada en equipo para automatizar el sistema de
                  comandas de una churreria, trabajamos el proyecto en dos
                  equipos conformados por Back-end y Front-end, trabajé con mi
                  compañera Erika en el Front-end utilizando HTML, JS, React y
                  CSS3, la interfaz esta enfocada en dos usuarios, \"el mesero\"
                  quien puede seleccionar una mesa, acceder al menú, generar
                  pedidos, enviar los pedidos al cocinero y ver el estatus del
                  pedido, \"el cocinero\" puede acceder al pedido enviado por el
                  mesero y modificar su estado una vez que este lista la
                  comanda, los accesos a la base de datos se realizan mediante
                  un token que se envia en cada llamada al Back-end, esta
                  diseñada para utilizarse en una tablet.
                </p>
              </td>
            </tr>
          </table>
        </div>

        <div>
          <h2 className="subtitle">Sholofood</h2>
          <table>
            <tr>
              <td>
                <a
                  href="https://26erika.github.io/churrolatte/"
                  target="_blank"
                >
                  <img
                    src="https://i.ibb.co/SNpdcpC/Churrolatte.png"
                    className="churrolatte"
                    alt="Sholofood"
                    title="Sholofood"
                  />{" "}
                </a>
              </td>
              <td>
                <p className="textDesing">
                  Webapp diseñada como red social que ayuda a difundir
                  información de negocios informales entre los usuarios,
                  desarrollada en equipo con mi compañera Diana Gonzalez,
                  utilizamos HTML, JS, Firebase como base de datos para guardar
                  las publicaciones de los usuarios y sus registros, los
                  usuarios pueden registrarse con gmail, facebook y correo
                  electronico, cuenta con un menu interactivo en el que el
                  usuario puede realizar un post, visualizarlo en el muro y
                  acceder a su perfil donde podra ver su foto y datos,
                  utilizamos Materialize para el diseño de la interfaz el cual
                  es responsivo para diversos dispositivos.
                </p>
              </td>
            </tr>
          </table>
        </div>

        <div>
              <h2 className="subtitle">Check-inLoveGDL</h2>
            <table>
            <tr>
              <td>
                <a
                  href="https://26erika.github.io/churrolatte/"
                  target="_blank"
                >
                  <img
                    src="https://i.ibb.co/SNpdcpC/Churrolatte.png"
                    className="churrolatte"
                    alt="Check-inLoveGDL"
                    title="Check-inLoveGDL"
                  />{" "}
                </a>
              </td>
              <td>
                <p className="textDesing">
                  Proyecto Ganador del 3° lugar del Talent Hackaton con el
                  equipo "Amazonas" del track \"Revive el corazon de tu ciudad\"
                  realizado en Junio 28 \"\\2019\" Webapp inspirada en los tours
                  desconocidos en la ciudad de guadalajara, realizamos la
                  integración de todas las paginas existentes del gobierno que
                  ayudan al turista a conocer la ciudad, buscamos impulsar por
                  medio de un convenio con la dependencia de cultura que
                  proporcione descuentos y boletos a los usuarios que completen
                  visitas y hagan check-in en nuestra pagina de los sitios que
                  promovamos en la interfaz con capsulas (videos), diseñamos un
                  sistema de puntos que se asignaran por cada check-in que el
                  usuario realice, podra cangear los puntos por boletos y
                  descuentos, desarrollamos este proyecto con HTML, JS y CSS3 y
                  es responsivo para visualizarse en dispositivos moviles y
                  computadoras.
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
