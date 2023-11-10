export function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center h-[5vh] bg-neutral-800 z-10">
      {[
        ['Mapa', '/'],
        ['Universo', '/universo'],
        ['Histórias e Contos', '/historias'],
        ['Sobre', '/equipe'],
      ].map(([title, url], index) => (
        <a
          key={index}
          href={url}
          className="flex items-center rounded-lg px-4 py-4 text-slate-50 font-medium hover:bg-stone-700"
        >
          {title}
        </a>
      ))}
    </div>
  );
}