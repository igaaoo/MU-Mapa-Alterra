export default function AudioEscolaMagia() {
    return (
        <>
            <div className="p-8 w-auto flex flex-wrap justify-center">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
                    Dia da Árvore Dourada, comemorada durante o Festival do Florescer, em que marca o dia que a fada-anciã acorda de sua hibernação;
Centenas de seres se encontram agrupados  para ouvir o discurso da Elfa.

                    </h2>

                    <div className="flex justify-center mb-10">
                        <audio
                            controls
                            className="my-4 p-2 border border-gray-300 rounded-md bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-200"
                        >
                            <source
                                src={
                                    'https://drive.google.com/uc?export=download&id=1WyKG5xO4_NtPmvcHTvNrDivjIsUXJZLC'
                                }
                                type="audio/mpeg"
                            />
                            Seu navegador não suporta o elemento de áudio.
                        </audio>
                    </div>



                    <p className="text-lg leading-loose mb-12 text-gray-700 dark:text-gray-300 text-justify">
                    &quot;Hoje, para celebrar o dia da árvore dourada e começar o Festival Florescer, vamos relembrar a história de nossa amada Orobó. <br/><br/>

                        Como falar de Orobó sem mencionar nossa floresta exuberante, a Floresta dos Miúdos, onde nossa majestosa Árvore Dourada repousa. Esse  é o coração de Orobó, essencial para a continuidade da vida, de nossas vidas… <br/><br/>
                        Na nossa terra, uma variedade de seres coexistem:. Elfos, fadas, duendes, mestiços e humanos encontraram refúgio em nossa região, nos distribuindo em diferentes ambientes: as fadas e duendes vivem na floresta, enquanto nós elfos, humanos e mestiços se agrupam em vilarejos. <br/><br/>
                        O que nos distingue dos demais é a nossa autossuficiência e forte união como uma comunidade. Infelizmente, a história de nossa terra é marcada pela exclusão que nossos ancestrais sofreram em outras terras devido às suas aparências singulares, forçando-os a se refugiarem aqui. Porém, que bom que nós encontramos um lugar para chamar de nosso e que bom que nós acolhemos aqueles que precisaram. <br/><br/>
                        E como também não falar do nosso povo? <br/><br/>
                        Fadas, seres ligados à natureza, assemelham-se às próprias plantas. Elas que não falam mas se comunicam por meio do laço eterno com a natureza, como o da nossa fada anciã, que desperta sempre na primavera, após seu descanso de inverno. <br/><br/>
                        E pq não falar de nossos duendes, que nos lembram de sua força e coragem para enfrentar aqueles que os exploraram.  Vocês possuem  uma história única. Sua revolução os libertou desses postos desfavoráveis. <br/><br/>
                        Os humanos, os quais foram importantíssimos na revolta dos duendes ao reconhecerem a injustiça enfrentada pelos duendes e se uniram a eles na busca por uma vida mais digna. A solidariedade demonstrada naquela época continua até hoje a inspirar a cooperação e o respeito mútuo entre todas as raças de Orobó. <br/><br/>
                        E diante de tanta diversidade, nossa democracia tem lugar para todos, onde diversos seres têm a capacidade de tomar decisões que moldam a vida da comunidade. O nosso rei, que está presente aqui conosco toma sua decisão a partir da voz do povo para governar. <br/><br/>

                        E com isso gostaria de desejar a todos um perfeito festival florescer!  Obrigada!&quot;


                    </p>
                </div>
            </div>
        </>
    );
}
