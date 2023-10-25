export default function Home() {
  return (
    <div className="no-scrollbar overflow-y-auto">
      <nav className="flex fixed justify-center h-24 bg-neutral-950 z-10 w-full top-0">
        {[
          ['Universo', '/aboutme'],
          ['Personagens', '/team'],
          ['Histórias', '/projects'],
          ['Equipe', '/reports'],
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
      <main className="mt-24 p-4">
        <iframe
          className="w-full h-screen"
          src="https://www.figma.com/embed?embed_host=share&hide_ui=1&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FbNs52cfmgKWvtDDBGNdRHB%2FSVG-World-Map-(Community)%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3Dw4bpmcJTEXxbF3GY-1"
          allowFullScreen
        ></iframe>
      </main>
    </div>
  );
}
