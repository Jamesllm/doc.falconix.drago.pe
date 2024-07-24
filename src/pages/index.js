import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import CustomSection from "../components/Section/CustomSection";
import { MdControlPoint } from "react-icons/md";
import Dashboard from "../components/Home/Dashboard";
import Buttons from "../components/Buttons";
import Diagrama from "../components/Home/Diagrama";

const FeatureList = [
  {
    title: "Automatización de tareas",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Programa y establece tareas repetitivas para su ejecucion, Tareas con el
        formato <strong>cron</strong>, envio de correos electronicos con previa
        configuracion.
      </>
    ),
  },
  {
    title: "Registro de las ejecuciones",
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Facilitamos el registro de ejecuciones para tener mayores detalles de
        las ejecuciones, errores y exitos que sucedan al momento de la
        ejecucion.{" "}
      </>
    ),
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="text-start">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-10 my-auto">
          <div className="mb-10">
            <h1 className="text-6xl font-bold my-5">{siteConfig.title}</h1>
            <p className="text-2xl text-gray-500">{siteConfig.tagline}</p>
          </div>
          <Buttons />
          <ul className="mt-10">
            {FeatureList.map((props, idx) => (
              <li key={idx}>
                <h3 className="font-bold flex gap-1 items-center mt-5 mb-3 text-2xl">
                  <MdControlPoint />
                  {props.title}
                </h3>
                <p className="text-xl">{props.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <img src={useBaseUrl("img/canvas.png")} alt="canvas" />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <CustomSection>
        <HomepageHeader />
      </CustomSection>
      <main>
        <CustomSection bgColor="bg-[#fd7254]">
          <Diagrama />
        </CustomSection>
        <CustomSection>
          <Dashboard />
        </CustomSection>
      </main>
    </Layout>
  );
}
