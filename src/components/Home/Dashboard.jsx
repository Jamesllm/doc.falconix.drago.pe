import useBaseUrl from "@docusaurus/useBaseUrl";
import Buttons from "../Buttons";

export default function Dashboard() {
  return (
    <div className="text-start grid lg:grid-cols-2 gap-12 mt-6">
      <div className="lg:ml-auto lg:my-auto lg:max-w-lg px-5">
        <h2 className="text-4xl lg:text-6xl font-bold my-5">
          Facil uso del DashBoard
        </h2>
        <p className="md:text-xl text-gray-500 mb-8">
          El dashboard de Falconix está diseñado para brindar una experiencia de
          usuario superior. Con una interfaz intuitiva, puedes programar tus
          tareas y configurar el envío automático de correos electrónicos de
          manera sencilla y eficiente. Simplifica la gestión de tus actividades
          y maximiza tu productividad con Falconix.
        </p>
        <Buttons />
      </div>
      <div>
        <img
          className="w-full border-gray-100 border-4 rounded-xl"
          src={useBaseUrl("img/home/dashboard.jpeg")}
          alt="canvas"
        />
      </div>
    </div>
  );
}
