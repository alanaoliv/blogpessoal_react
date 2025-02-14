import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
        <div className='
            w-full 
            flex 
            justify-center 
            py-4 
            bg-purple-900 
            text-white
        '>
            <div className='
                container
                flex
                justify-between 
                text-lg
                px-6
            '>
                <Link to= "/home" 
                className="text-2xl font-bold font-[Monomakh]">
                    dev[Alana Oliv]
                </Link>

                <div className='
                    flex 
                    gap-4
                    justify-around
                    pl-8
                    pr-8
                    font-[Monomakh-xs]
                    font-semibold
                '>
                    <Link to="/postagem">
                    Postagens
                    </Link>
                    <Link to="/tema"> 
                    Temas
                    </Link>
                    <Link to="/cadastrar">       
                    Cadastrar tema
                    </Link> 
                    <Link to="/perfil">
                    Perfil 
                    </Link>
                    <Link to="/login">
                        Sair 
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar