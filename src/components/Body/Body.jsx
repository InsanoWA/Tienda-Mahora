const Body = () => {
    return (
        <>
        <div class="flex flex-col w-56">
		<button class="group border-t border-r border-l border-none focus:outline-none">
			<div class="flex items-left justify-between h-12 px-3 font-semibold hover:bg-gray-200">
				<span class="truncate">= Mahora</span>
				<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
				</svg>
			</div>
			<div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
				<a class="flex items-left h-8 px-4 text-sm hover:bg-gray-200" href="#seccion5">Quienes Somos</a>
				<a class="flex items-left h-8 px-4 text-sm hover:bg-gray-200" href="#">Galeria</a>
				<a class="flex items-left h-8 px-4 text-sm hover:bg-gray-200" href="#contactocd">Contacto</a>
			</div>
		</button>
		</div>
        <hr/>
        <h1 className="text-xl font-bold lg:flex justify-center"> MAHORA</h1>
        <div className=" w-full">
        <small class="flex justify-center">Tienda de productos orientales</small>
        <br/>
        <small class="flex justify-center h-100">Abierto hasta las 21:00</small>
        </div>
        
        </>
      
    )
  }

  export default Body;