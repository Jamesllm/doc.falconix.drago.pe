import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { MdControlPoint } from "react-icons/md";
import Buttons from "../Buttons";
import useBaseUrl from "@docusaurus/useBaseUrl";


export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const FeatureList = [
    {
      title: "Automatización de tareas",
      description: (
        <>
          Programa y establece tareas repetitivas para su ejecucion, Tareas con
          el formato <strong>cron</strong>, envio de correos electronicos con
          previa configuracion.
        </>
      ),
    },
    {
      title: "Registro de las ejecuciones",
      description: (
        <>
          Facilitamos el registro de ejecuciones para tener mayores detalles de
          las ejecuciones, errores y exitos que sucedan al momento de la
          ejecucion.{" "}
        </>
      ),
    },
  ];
  return (
    <header className="text-start mb-5">
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="lg:p-10 p-5 my-auto">
          <div className="mb-10">
            <h1 className="text-4xl lg:text-6xl font-bold my-5">{siteConfig.title}</h1>
            <p className="text-xl lg:text-2xl text-primary">{siteConfig.tagline}</p>
          </div>
          <Buttons />
          <ul className="mt-10">
            {FeatureList.map((props, idx) => (
              <li key={idx}>
                <h3 className="font-bold flex gap-1 items-center mt-5 mb-3 text-xl lg:text-2xl">
                  <MdControlPoint />
                  {props.title}
                </h3>
                <p className="lg:text-xl">{props.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:block">
          <img src={useBaseUrl("img/canvas.png")} alt="canvas" />
        </div>
      </div>
    </header>
  );
}
