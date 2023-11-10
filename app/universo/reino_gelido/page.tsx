export default function Universo() {
    return (
        <>
            <div className="dark:bg-black">
                <div className="container -mt-20 flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-white">Ventos Gélidos</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-white text-justify">Região aplacada pelo inverno eterno. Os povos ao norte conseguem se estabelecer, mas os nativos peregrinam região adentro. Região desprovida de religião consolidada, mas algumas tribos ainda cultuam o antigo deus Cutia e Araguaia. Regime de governo varia de acordo com o assentamento e povo. Quanto mais se desloca para o sul, mais o inverno se torna intenso e plantas e criaturas modificadas por magia se encontram. Os nativos são peregrinos e os povos do norte normalmente encontram-se em cidades subterrâneas.</p>
                    <div className="flex mb-10 flex-wrap justify-center">
                        <a target="_blank" href="/historias/reino_gelido_conto" type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 hover:bg-slate-700">Contos</a>
                        <a target="_blank" href="/historias/reino_gelido_audio" type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 hover:bg-slate-700">Áudios</a>
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
                                            Humanos
                                        </th>
                                        <td className="px-6 py-4">
                                            Povos nômades com lideres tribais
                                        </td>
                                        <td className="px-6 py-4">
                                            Vilarejos/Flroestas
                                        </td>
                                        <td className="px-6 py-4">
                                            Baixo
                                        </td>

                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Animais modificados por magia
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
                                            Animais &quot;Normais&quot;
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
                                            Mestiços
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
                    <img className="mx-auto rounded-t-lg" src="/assets/images/reino_gelido.png" alt="" />
                </div>
            </div>

        </>
    );
}
