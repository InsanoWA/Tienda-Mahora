import mahora from "../../assets/images/mahora.jpeg"

const Body = () => {
    return (
        <>
<div className="flex flex-col w-56">
		<button className="group border-t border-r border-l border-none focus:outline-none">
			<div className="flex items-left justify-between h-12 px-3 font-semibold hover:bg-neutral-300">
				<span className="truncate"> <img  className="h-10 w-10 vertical-align: text-top"
        src={mahora}></img></span>
				<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
				</svg>
			</div>
			<div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
				<a className="flex items-left h-8 px-4 text-sm hover:bg-neutral-300" href="#seccion5">Quienes Somos</a>
				<a className="flex items-left h-8 px-4 text-sm hover:bg-neutral-300" href="#galery">Galeria</a>
				<a className="flex items-left h-8 px-4 text-sm hover:bg-neutral-300" href="#contacto">Contacto</a>
			</div>
		</button>
		</div>
        <hr/>
        <h1 className="text-xl font-bold lg:flex justify-center">  <img  className="h-50 w-30 vertical-align: text-top"
        src={mahora}></img></h1>
       
        <div className=" whitespace-normal">
        <p className=" capitalize  flex justify-center text-stone-950">Tienda de productos orientales</p>
       
        <p className=" capitalize  flex justify-center text-stone-950 ">Abierto hasta las 21:00</p>
        </div>
            

        </>

    )
}

export default Body;