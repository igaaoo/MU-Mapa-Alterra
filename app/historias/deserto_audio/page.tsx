export default function AudioEscolaMagia() {
    return (
        <>
            <div className="p-8 w-auto flex flex-wrap justify-center">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
                    Kyla, perdida em Ventos Lancinantes, no deserto acima, após sair do império subterrâneo, resolve gravar sua jornada com seu DGM(dispositivo de gravação mágica).
                    </h2>

                    <div className="flex justify-center mb-10">
                        <audio
                            controls
                            className="my-4 p-2 border border-gray-300 rounded-md bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-200"
                        >
                            <source
                                src={
                                    'https://drive.google.com/uc?export=download&id=10ZAmE-oeA6mxyHb_3HpsndtparXE-9YD'
                                }
                                type="audio/mpeg"
                            />
                            Seu navegador não suporta o elemento de áudio.
                        </audio>
                    </div>



                    <p className="text-lg leading-loose mb-12 text-gray-700 dark:text-gray-300 text-justify">
                        “Então, essa talvez não seja a ideia mais sábia para gravar minha jornada, pois vou gastar saliva, mas pelo menos está no fim da tarde e a temperatura no deserto já baixou bastante. Tudo que vejo é areia e areia e também um pouco mais de areia. Volto quando encontrar algo além” <br/><br/>

                        “ agora, após subir o topo da duna, consigo ver o portal pelo qual saí. E é… Fico relembrando como era no reino de Khar, sinto falta e penso se realmente irei conseguir voltar…. Mas enfim, consigo ver algumas pequenas montanhas flutuantes ao redor do portal.<br/><br/>

                        “ Agora já está mais escuro e estou começando a sentir mais o frio… Pera aí acho que vejo algumas luzes se movimentando um pouco longe.”<br/><br/>

                        “Voltei, então, as luzes provavelmente eram povos nômades. Guinn me contou que Aqui na parte de cima é muito comum que as pessoas não se fixem em um local e estejam sempre viajando para buscar alimentos e trocar e vender objetos.”<br/><br/>

                        “Bem, seguindo o mapa acho que estou avistando o que seria … Areias Inquietas…o povo do subterrâneo me alertou o que eu poderia encontrar em cada área. Mas a vdd é que eles não costumam estar explorando essas áreas, então são apenas contos…”<br/><br/>

                        “Bem, okay, aqui é um pouco sinistro. As pessoas têm olhares amedrontados. Uma energia negativa paira sobre esse lugar”<br/><br/>

                        “Sem mais delongas, vou procurar por esse tal de Eronde, que segundo a Guinn poderá me ajudar em busca da biblioteca”<br/><br/>

                        “Bem, já encontrei com Eronde e já perguntamos a algumas pessoas sobre a biblioteca, inclusive, nos relataram da presença de um necromante. Acho que a última coisa que gostaria de saber é que no fim tudo que irei fazer agora não servirá de nada e não conseguirei voltar para casa…”<br/><br/>

                    </p>
                </div>
            </div>
        </>
    );
}
