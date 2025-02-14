
function Navbar() {
  return (
    <>
        <div className='
            w-full 
            flex 
            justify-center 
            py-4 
            bg-indigo-900 
            text-white
        '>
            <div className='
                container
                flex
                justify-between 
                text-lg
                px-6
            '>
                Blog Pessoal

                <div className='
                    flex 
                    gap-4
                    justify-around
                    pl-8
                    pr-8
                '>
                    Postagens 
                    Temas       
                    Cadastrar tema 
                    Perfil 
                    Sair 
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar