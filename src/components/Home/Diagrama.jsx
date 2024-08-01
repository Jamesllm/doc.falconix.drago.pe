import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Diagrama() {
  return (
    <div className="flex justify-center items-center w-full h-full flex-col py-10 lg:py-20">
      <div className="mb-5">
        <h2 className="text-4xl lg:text-6xl font-bold my-5 text-white">Estructura organizada</h2>
        <p className="lg:text-2xl">
          Este diagrama muestra como funciona la arquitectura de la API Falconix
        </p>
      </div>
      <img
        className="w-8/12 shadow-xl border-gray-100 border-4 rounded-xl"
        src={useBaseUrl("img/home/diagrama.png")}
        alt="canvas"
      />
    </div>
  );
}
