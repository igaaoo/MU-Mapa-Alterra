export default function AudioEscolaMagia() {
    return (
        <>
            <div className="p-8 w-auto flex flex-wrap justify-center">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
                        Elara, a bruxa, conta em seu diário como é a Academia Arcana de Alterra.
                    </h2>

                    <div className="flex justify-center mb-10">
                        <audio
                            controls
                            className="my-4 p-2 border border-gray-300 rounded-md bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-200"
                        >
                            <source
                                src={
                                    'https://drive.google.com/uc?export=download&id=1yTeIxSq_9L2miJyODIyW88zHNNZHjXZs'
                                }
                                type="audio/mpeg"
                            />
                            Seu navegador não suporta o elemento de áudio.
                        </audio>
                    </div>



                    <p className="text-lg leading-loose mb-12 text-gray-700 dark:text-gray-300 text-justify">

                        Querido diário, muito já tenho escrito sobre minhas receitas de magia negra e minha busca pelo poder das sombras. Mas agora gostaria de falar sobre a escola de magia.  <br /><br />

                        A escola foi fundada há séculos por um grupo de magos e bruxas, foi construída com uma arquitetura majestosa que combina elementos antigos e modernos. <br /><br />

                        A Academia Alterra fica em uma ilha isolada no meio de um vasto oceano, ela é protegida por encantamentos poderosos que a tornam invisível para os não iniciados e inacessível para aqueles que não possuem a magia adequada. <br /><br />

                        A Academia é dividida em quatro casas, cada uma representando um elemento mágico: Terra, Fogo, Água e Ar. Cada casa tem sua própria personalidade e valores únicos. Nunca me identifiquei com essas casas, prefiro as sombras… <br /><br />

                        Os nomes dos novos estudantes são chamados pelo Diretor e eles se aproximam da Taça da Seleção. <br /><br />
                        Conforme a luz brilhante gira sobre o estudante, ela se transforma nas cores e símbolos de uma das quatro casas: Terra, Fogo, Água ou Ar. O estudante é então conduzido para a mesa correspondente à sua nova casa pelos Professores Notáveis daquela casa. <br /><br />

                        Abaixo dos terrenos, existem salões subterrâneos e locais secretos que raramente são mencionados, e, como já escrevi aqui, já andei por várias passagens inexploradas. Um desses salões é o Abismo das Sombras, temido por muitos, mas já contei aqui que fui lá. <br /><br />

                        Aqui não é permitido praticar magia negra, por isso, precisei me esconder nesses corredores subterrâneos, para não ser pega. <br /><br />

                    </p>
                </div>
            </div>
        </>
    );
}
