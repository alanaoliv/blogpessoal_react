import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"

function Home() {
  return (
    <>
    <div className="
        flex 
        justify-center 
        bg-purple-900
    ">
        <div className="
            container 
            grid 
            grid-cols-2 
            text-white"
        >
            <div className="
                flex 
                flex-col 
                items-center 
                justify-center
                gap-4
                py-4
            ">           
                    <h2 className="
                        text-5xl
                        font-bold
                        font-[Monomakh]
                    ">
                        Seja Bem-vinde!
                    </h2>
                    <p className="text-xl">
                        Expresse aqui seus pensamentos e opiniões
                    </p>

                    <div className="
                        flex
                        justify-around
                        gap-4
                    ">
                        <div className="flex justify-around gap-4">
                            <ModalPostagem />
                            
                        </div>
                    </div>
            </div>

            <div className="flex justify-center">
                <img
                    src="https://ik.imagekit.io/alanaoliv/imagens%20storyset/Security-bro.svg?updatedAt=1739556445629"
                    alt="Imagem da Página Home"
                    className="w-2/3"
                />
            </div>
        </div>
    </div>
    <ListaPostagens />
    </>
  )
}

export default Home