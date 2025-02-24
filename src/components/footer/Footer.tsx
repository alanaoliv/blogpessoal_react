import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"
import { ReactNode, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"


function Footer() {

    let data = new Date().getFullYear()

     const { usuario } = useContext(AuthContext)

     let componente: ReactNode

     if (usuario.token !== ''){

        componente = (
            <div className="
            flex 
            justify-center 
            bg-purple-900
            text-white
            
        ">
            <div className="
                container
                flex
                flex-col
                items-center
                py-4
            ">
                <p className="text-xl font-bold font-[Monomakh]">
                    Blog Pessoal Alana Oliv ✨ | Copyright: {data}
                </p>
                <p className="text-lg">Acesse minhas redes sociais</p>
                <div className="flex gap-2">
                    <a href="https://www.linkedin.com/in/alanasanches/" target="_blank"> 
                    <LinkedinLogo size={48} weight="bold" />
                    </a> 
                    <a href="https://www.instagram.com/_alanasanches/" target="_blank"> 
                    <InstagramLogo size={48} weight="bold" />
                    </a> 
                    <a href="https://github.com/alanaoliv" target="_blank"> 
                    <GithubLogo size={48} weight="bold" />
                    </a> 
                </div>
            </div>
        </div>
        )
     }
  return (
    <>
        {componente}
    </>
  )
}

export default Footer