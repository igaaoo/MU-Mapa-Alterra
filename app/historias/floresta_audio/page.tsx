export default function AudioEscolaMagia() {
    return (
        <>
            <div className="p-8 w-auto flex flex-wrap justify-center">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
                        Floresta do Exílio - Árvore Celestial

                    </h2>

                    <div className="flex justify-center mb-10">
                        <audio
                            controls
                            className="my-4 p-2 border border-gray-300 rounded-md bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-200"
                        >
                            <source
                                src={
                                    'https://drive.google.com/uc?export=download&id=1tYU8VuVjoUDmi0XMfWQu9V9b9WeM9lvX'
                                }
                                type="audio/mpeg"
                            />
                            Seu navegador não suporta o elemento de áudio.
                        </audio>
                    </div>



                    <p className="text-lg leading-loose mb-12 text-gray-700 dark:text-gray-300 text-justify">

                        Narração escrita em falta...

                    </p>
                </div>
            </div>
        </>
    );
}
