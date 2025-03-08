import logo from '@/assets/lucasbooks_logo.svg'

export default function Menu(){
    return (
        <header className='fixed w-full top-0 flex items-center justify-center h-20 bg-[#F3F2EC] !border-b-[0.3px] border-[#3A3A3A] px-10 z-50'>
            <div className='flex items-center justify-between w-full max-w-[90rem]'>
                {/* Logo */}
                <a href='/' className='transition-all hover:scale-[1.03]'>
                    <img src={logo} alt="Lucasbook’s Logo" />
                </a>

                {/* Nav List */}
                <nav className='flex gap-[3.125rem]'>
                    <ul className='flex gap-[4.375rem] items-center'>
                        <li>
                            <a href="/#" className='text-[#3A3A3A] active:text-[#BA8754] hover:text-[#BA8754] transition-all'>Início</a>
                        </li>
                        <li>
                            <a href="/#sobre" className='text-[#3A3A3A] active:text-[#BA8754] hover:text-[#BA8754] transition-all'>Sobre</a>
                        </li>
                        <li>
                            <a href="/#destaques" className='text-[#3A3A3A] active:text-[#BA8754] hover:text-[#BA8754] transition-all'>Destaques</a>
                        </li>
                        <li>
                            <a href="/livros" className='text-[#3A3A3A] active:text-[#BA8754] hover:text-[#BA8754] transition-all'>Livros</a>
                        </li>
                    </ul>
                    <div className="cta-buttons flex gap-5">
                        <a href="#" className='flex !py-2 !px-2.5 justify-center items-center gap-2.5 rounded-lg !border border-[#3A3A3A] text-[#3A3A3A] text-base leading-[1.25rem] h-9 transition-all hover:bg-[#315789] hover:border-[#315789] hover:text-white'>
                            Quero registrar
                        </a>
                        <a href="#" className='flex !py-2 !px-2.5 justify-center items-center gap-2.5 rounded-lg !border border-[#3A3A3A] text-[#3A3A3A] text-base leading-[1.25rem] h-9 transition-all duration-300 hover:bg-[#315789] hover:border-[#315789] hover:text-white'>
                            Fazer login
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}