export default function Footer() {

  return (

    <footer
      className="
      bg-gray-900
      text-white
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-12
        "
      >

        <div
          className="
          grid
          md:grid-cols-3
          gap-10
          "
        >


          {/* Marca */}

          <div>

            <h2
              className="
              text-3xl
              font-bold
              bg-gradient-to-r
              from-blue-400
              to-purple-400
              bg-clip-text
              text-transparent
              "
            >

              MagVal

            </h2>


            <p
              className="
              mt-5
              text-gray-400
              leading-7
              "
            >

              Diseño y desarrollo de soluciones digitales
              para negocios que buscan crecer en internet.

            </p>


          </div>




          {/* Navegación */}

          <div>

            <h3
              className="
              text-xl
              font-semibold
              "
            >

              Navegación

            </h3>


            <ul
              className="
              mt-5
              space-y-3
              "
            >

              <li>

                <a
                  href="#inicio"
                  className="
                  text-gray-400
                  hover:text-white
                  transition
                  "
                >

                  Inicio

                </a>

              </li>


              <li>

                <a
                  href="#nosotros"
                  className="
                  text-gray-400
                  hover:text-white
                  transition
                  "
                >

                  Nosotros

                </a>

              </li>


              <li>

                <a
                  href="#laboratorio"
                  className="
                  text-gray-400
                  hover:text-white
                  transition
                  "
                >

                  Laboratorio

                </a>

              </li>


              <li>

                <a
                  href="#servicios"
                  className="
                  text-gray-400
                  hover:text-white
                  transition
                  "
                >

                  Servicios

                </a>

              </li>


              <li>

                <a
                  href="#contacto"
                  className="
                  text-gray-400
                  hover:text-white
                  transition
                  "
                >

                  Contacto

                </a>

              </li>


            </ul>


          </div>





          {/* Contacto */}

          <div>

            <h3
              className="
              text-xl
              font-semibold
              "
            >

              Contacto

            </h3>


            <div
              className="
              mt-5
              space-y-3
              text-gray-400
              "
            >

              <p>

                contacto@magval.com

              </p>


              <p>

                WhatsApp disponible

              </p>


              <p>

                México

              </p>


            </div>


          </div>


        </div>




        {/* Línea inferior */}

        <div
          className="
          mt-12
          pt-6
          border-t
          border-gray-700
          text-center
          text-gray-500
          text-sm
          "
        >

          © {new Date().getFullYear()} MagVal.
          Todos los derechos reservados.

        </div>


      </div>


    </footer>

  );

}