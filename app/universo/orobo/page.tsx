export default function Universo() {
    return (
        <>

            <div className="dark:bg-black">
                <div className="-mt-20 container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-white">Orobó</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-white text-justify">Orobó, uma terra mágica e isolada na ponta leste do reino, abriga uma comunidade diversificada de fadas, elfos, humanos, duendes e mestiços. Unidos pela solidariedade e um forte senso de comunidade, eles compartilham todos os recursos e tomam decisões de maneira democrática. Sua cultura rica é expressa por meio da arte, incluindo pintura, música e teatro, que também desempenham um papel na magia. </p>
                    <div className="flex mb-10 flex-wrap justify-center">
                        <a target="_blank" href="/historias/orobo_conto" type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 hover:bg-slate-700">Contos</a>
                        <a target="_blank" href="/historias/orobo_audio" type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 hover:bg-slate-700">Áudios</a>
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
                                            Elfos
                                        </th>
                                        <td className="px-6 py-4">
                                            Democracia com monarquia limitada
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
                                            Fadas
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
                                            Duendes
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
                                            Humanos e Mestiços
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
                    <img className="mx-auto rounded-t-lg" src="/assets/images/orobo.png" alt="" />
                </div>
            </div>

        </>
    );
}
