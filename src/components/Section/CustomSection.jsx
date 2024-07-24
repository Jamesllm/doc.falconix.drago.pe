export default function CustomSection({ children, bgColor }) {
  return (
    <section
      className={`container mx-auto w-full min-w-full text-center h-screen ${bgColor}`}
    >
      {children}
    </section>
  );
}
