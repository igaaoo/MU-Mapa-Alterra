export default function Personagens() {
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
    <div className="p-8 mt-10 w-auto flex flex-wrap justify-start">
      <div className="max-w-sm m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="/assets/images/5.png" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Reino Gélido </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Saiba mais sobre os personagens do Reino Gélido.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-black dark:bg-slate-600 dark:hover:bg-slate-500 dark:focus:ring-slate-900">
            Saiba mais
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="max-w-sm m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="/assets/images/6.png" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Escola de Magia </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Saiba Saiba mais sobre os personagens da famosa Academia de Alterra.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-black dark:bg-slate-600 dark:hover:bg-slate-500 dark:focus:ring-slate-900">
            Saiba mais
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>
    

      <div className="max-w-sm m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="/assets/images/7.png" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Floresta do Exílio </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Saiba Saiba mais sobre os personagens da Floresta do Exílio.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-black dark:bg-slate-600 dark:hover:bg-slate-500 dark:focus:ring-slate-900">
            Saiba mais
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>


      <div className="max-w-sm m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="/assets/images/8.png" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Deseto de Alterra </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Saiba Saiba mais sobre os personagens da Deseto de Alterra.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-black dark:bg-slate-600 dark:hover:bg-slate-500 dark:focus:ring-slate-900">
            Saiba mais
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>


      <div className="max-w-sm m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="/assets/images/9.png" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Orobó </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Saiba Saiba mais sobre os personagens de Orobó.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-black dark:bg-slate-600 dark:hover:bg-slate-500 dark:focus:ring-slate-900">
            Saiba mais
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>


    </div>
    </>
  );
}
