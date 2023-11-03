export function Navbar() {
  return (
    <div className="flex justify-center h-[5vh] bg-pink-950 z-10 w-full">
      {[
        ['Mapa', '/'],
        ['Universo', '/universo'],
        ['Personagens', '/personagens'],
        ['Histórias e Contos', '/historias'],
        ['Sobre', '/equipe'],
      ].map(([title, url], index) => (
        <a
          key={index}
          href={url}
          className="flex items-center rounded-lg px-4 py-4  text-slate-300 font-medium hover:bg-pink-800"
        >
          {title}
        </a>
      ))}
    </div>
  );
}