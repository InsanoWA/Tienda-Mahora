const BotonPedir =() => {
    return (
        <div className="px-4 py-8 flex flex-wrap md:items-center md:justify-center gap-8">
        <button class="relative py-2 px-6 text-center text-green-600 border border-green-600 overflow-hidden transition-all ease-in-out before:absolute before:bg-green-600 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-300 before:w-0 before:h-full hover:before:w-full hover:text-white">
        Pedir Una Cotizacion
        </button>
        </div>
    )
}

export default BotonPedir;