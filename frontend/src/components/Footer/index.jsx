import logo from '@/assets/lucasbooks_logo.svg';

export default function Footer(){
    return (
        <footer className="flex justify-center items-center py-10 bg-[#F3F2EC] !border-t-[0.3px] border-[#3A3A3A] mt-10">
            <div className='flex flex-col items-center justify-center w-full max-w-[90rem]'>
                {/* Logo */}
                <div className='transition-all hover:scale-[1.03] mb-10'>
                    <img src={logo} alt="Lucasbook’s Logo" />
                </div>
                {/* Slogan */}
                <p className='text-[#7A7A7A] text-center text-base tracking-[2px] mb-10'>Transformamos paixão por livros em experiências únicas de leitura. Explore nossa curadoria e descubra obras que enriquecem a mente e o coração. Atendimento: Estamos sempre prontos para ajudar! Fale conosco por e-mail.</p>
                {/* Texto legal */}
                <p className='text-[#7A7A7A] text-center text-base tracking-[2px]'>© 2025 LucasBook’s. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}