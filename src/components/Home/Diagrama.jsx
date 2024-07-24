import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Diagrama() {
  return (
    <img
      className="w-full border-gray-100 border-4 rounded-xl"
      src={useBaseUrl("img/home/diagrama.png")}
      alt="canvas"
    />
  );
}
