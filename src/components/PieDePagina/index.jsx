const PieDePagina = () => {
  return (
    <div className="bg-white w-full p-8">

      <div className="w-full bg-white rounded-lg p-4 flex flex-col gap-4 items-center justify-center md:justify-between">
        <nav className="flex justify-center gap-4">

          <a href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors" >
            <div>
              <h1 className="font-bold mb-6 uppercase text-black   ">Direccion</h1>
              <p className="text-md not-italic text-black "  >Sector 2 Grupo 10 Manzana G Lote 18 Villa el Salvador
                <br />
                Municipalidad Metropolitana de Lima LIMA 42 Perú</p>
            </div>
          </a>
          <a href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors" >
            <div className="md:col-span-10 lg:col-span-3 items-left">
              <h2 className="font-bold mb-6 uppercase">Contacto</h2>
              <div className="flex flex-col gap-4">
                <p className="flex items-left gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Lima, Peru
                </p>
                <p className="flex items-left gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  mquispetorres@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  (+51) 946 314 4 56
                </p>
              </div>
            </div>
          </a>
          <a href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors" >
            <div>
              <h3 className="font-bold mb-6 uppercase text-black ">Horario de atencion</h3>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <th>lun:</th>
                      <td><span>10:00-21:00</span>
                      </td>
                    </tr>
                    <tr>
                      <th>mar:</th>
                      <td><span>10:00-21:00</span></td>
                    </tr>
                    <tr>
                      <th>mié:</th>
                      <td><span>10:00-21:00</span></td>
                    </tr>
                    <tr>
                      <th>jue:</th>
                      <td><span>10:00-21:00</span></td>
                    </tr>
                    <tr>
                      <th>vie:</th>
                      <td><span>10:00-21:00</span></td>
                    </tr>
                    <tr>
                      <th>sáb:</th>
                      <td><span>10:00-21:00</span></td>
                    </tr>
                    <tr>
                      <th>dom:</th>
                      <td><span>10:00-21:00</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </a>
        </nav>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col xl:flex-row gap-4 items-center justify-between">
        <p className="  text-black font-bold mb-6 text-center md:text-left">
          &copy; 2023
          <span className=" text-black">Mahora</span> Todos
          los derechos reservados.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <a
            href="#"
            className="text-black font-bold mb-6 hover:text-gray-900 transition-colors"
          >
            Terminos y condiciones
          </a>
          <span className="hidden font-bold mb-6 md:flex">|</span>
          <a
            href="#"
            className="text-black font-bold mb-6 hover:text-gray-900 transition-colors"
          >
            Política de privacidad
          </a>
        </div>
      </div>
    </div>
  );
}

export default PieDePagina;