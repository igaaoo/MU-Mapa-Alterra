export default function Sobre() {
  return (
    <>
    <div>
            <nav className="flex fixed justify-center h-24 bg-neutral-950 z-10 w-full top-0">
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
            className="flex items-center rounded-lg px-4 py-2 m-4 text-slate-300 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </a>
        ))}
      </nav>
    </div>
  
    <section className="bg-black text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Mitologias Universais - 2023.2

        <span className="sm:block"> Universidade Federal do Ceará </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Este website foi produzido pela equipe de desenvolvimento da disciplina de Mitologias Universais (2023.2) 
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="https://github.com/igaaoo/MU-Mapa-Alterra" target="_blank"
        >
          Link do Projeto
        </a>

        <a
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="https://smd.ufc.br/pt/" target="_blank"
        >
          SMD - UFC
        </a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
