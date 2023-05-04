const Header = () => {
    return (
        <div className="w-full bg-white rounded-lg p-4 flex flex-col gap-4 items-center justify-center md:justify-between">
          <nav className="flex justify-center gap-4">
                <a
                    href="#"
                    className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">
                    Pedir Una Cotizacion
                </a>
                <a
                    href="tel:+51-963-746-684"
                    className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors "
                >
                    Llamar Ahora
                </a>
                <a
                    href="https://www.google.com/maps/@-12.2413093,-76.9290612,21z"
                    className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                    Como Llegar
                </a>
               
            </nav>
        </div>

    )
}


export default Header;