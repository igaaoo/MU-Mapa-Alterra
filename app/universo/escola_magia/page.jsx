export default function Universo() {
    return (
        <>

            <div className="dark:bg-black">
                <div className="container -mt-20 flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-white"> Escola de Magia</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-white text-justify">A Academia Alterra é famosa em todo o mundo mágico por sua excelência na educação mágica e treinamento de jovens bruxos e bruxas. Foi fundada há séculos por um grupo de magos e bruxas renomados que buscavam criar um lugar onde os estudantes pudessem aprender a magia de maneira segura e responsável. A escola é dividida em quatro casas, cada uma representando um elemento mágico: Terra, Fogo, Água e Ar. </p>
                    <div className="flex flex-wrap justify-center mb-10">
                        <a target="_blank" href="/historias/escola_magia_conto" type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 hover:bg-slate-700">Contos</a>
                        <a target="_blank" href="/historias/escola_magia_audio" type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 hover:bg-slate-700">Áudios</a>
                        <a target="_blank" href="https://drive.google.com/drive/u/0/folders/1u6jftVGp1mjNLYcb_B-twcy5vN89zOYb" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-white hover:bg-gray-800">Explorar mais</a>
                    </div>
                    <div className="flex justify-center mb-10">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Povos
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Regime
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Ambiente Geral
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Nivel de tecnologia
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Magos
                                        </th>
                                        <td className="px-6 py-4">
                                            Gestão escolar participativa
                                        </td>
                                        <td className="px-6 py-4">
                                            Escolar
                                        </td>
                                        <td className="px-6 py-4">
                                            Alto
                                        </td>

                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Bruxas
                                        </th>
                                        <td className="px-6 py-4">

                                        </td>
                                        <td className="px-6 py-4">

                                        </td>
                                        <td className="px-6 py-4">

                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Professores
                                        </th>
                                        <td className="px-6 py-4">

                                        </td>
                                        <td className="px-6 py-4">

                                        </td>
                                        <td className="px-6 py-4">

                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Estudantes
                                        </th>
                                        <td className="px-6 py-4">

                                        </td>
                                        <td className="px-6 py-4">

                                        </td>
                                        <td className="px-6 py-4">

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <img className="mx-auto rounded-t-lg" src="/assets/images/escola_magia.png" alt="" />
                </div>
            </div>

        </>
    );
}
