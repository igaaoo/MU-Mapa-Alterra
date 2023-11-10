export default function Universo() {
    return (
        <>

            <div className="dark:bg-black -mt-20">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-white">Floresta do Exílio</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-white text-justify">A Floresta do Exílio é uma região vasta e misteriosa, habitada por uma variedade de seres, incluindo árvores sencientes, um dragão guardião, golens que vigiam um portal, e um guerreiro lagarto chamado Nero - ressuscitado por uma bruxa. A floresta foi criada por um grupo de deuses como um lugar seguro para que os espíritos pudessem fazer a sua passagem. No entanto, a paz da floresta está ameaçada pela bruxa Ira, que foi banida da Escola de Magia por ter uma grande ambição. </p>
                    <div className="flex flex-wrap  mb-10 justify-center">
                        <a target="_blank" href="/historias/floresta_conto" type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 hover:bg-slate-700">Contos</a>
                        <a target="_blank" href="/historias/floresta_audio" type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 hover:bg-slate-700">Áudios</a>
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
                                            Espíritos vagantes
                                        </th>
                                        <td className="px-6 py-4">
                                            Não há.Existe apenas a lei da natureza
                                        </td>
                                        <td className="px-6 py-4">
                                            Flroesta
                                        </td>
                                        <td className="px-6 py-4">
                                            Baixo
                                        </td>

                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Seres Mágicos
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
                                            Um dragão
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
                                            Um homem lagarto e uma feiticeira
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
                    <img className="mx-auto rounded-t-lg" src="/assets/images/floresta_exilio.png" alt="" />
                </div>
            </div>

        </>
    );
}
