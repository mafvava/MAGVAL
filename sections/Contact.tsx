export default function Contact() {

  return (

    <section
      id="contacto"
      className="bg-white"
    >

      <div className="max-w-7xl mx-auto">


        <div
          className="
          grid
          lg:grid-cols-2
          gap-12
          items-center
          "
        >


          {/* Información */}

          <div>


            <span
              className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-blue-100
              text-blue-700
              font-semibold
              "
            >

              Contacto

            </span>



            <h2
              className="
              mt-6
              text-4xl
              md:text-5xl
              font-bold
              leading-tight
              "
            >

              ¿Tienes una idea?
              <br />
              Hagámosla realidad.

            </h2>



            <p
              className="
              mt-6
              text-lg
              text-gray-600
              leading-8
              "
            >

              Cuéntanos sobre tu proyecto, tu negocio o la idea que tienes
              en mente.

            </p>



            <div
              className="
              mt-10
              space-y-5
              "
            >


              <div
                className="
                flex
                items-center
                gap-4
                "
              >

                <div
                  className="
                  w-12
                  h-12
                  rounded-xl
                  bg-blue-600
                  text-white
                  flex
                  items-center
                  justify-center
                  "
                >

                  ✉

                </div>


                <div>

                  <p className="font-semibold">

                    Correo

                  </p>

                  <p className="text-gray-600">

                    bryanmaga66@gmail.com

                  </p>

                </div>


              </div>




              <div
                className="
                flex
                items-center
                gap-4
                "
              >

                <div
                  className="
                  w-12
                  h-12
                  rounded-xl
                  bg-green-600
                  text-white
                  flex
                  items-center
                  justify-center
                  "
                >

                  ☎

                </div>


                <div>

                  <p className="font-semibold">

                    WhatsApp

                  </p>

                  <p className="text-gray-600">

                    Atención directa

                  </p>

                </div>


              </div>


            </div>


          </div>





          {/* Formulario visual */}

          <div
            className="
            bg-gray-100
            rounded-3xl
            p-8
            shadow-lg
            "
          >


            <h3
              className="
              text-2xl
              font-bold
              "
            >

              Solicita información

            </h3>



            <div
              className="
              mt-8
              space-y-5
              "
            >


              <input

                type="text"

                placeholder="Nombre"

                className="
                w-full
                rounded-2xl
                border
                border-gray-300
                px-5
                py-4
                outline-none
                focus:ring-2
                focus:ring-blue-500
                "

              />



              <input

                type="email"

                placeholder="Correo electrónico"

                className="
                w-full
                rounded-2xl
                border
                border-gray-300
                px-5
                py-4
                outline-none
                focus:ring-2
                focus:ring-blue-500
                "

              />



              <textarea

                rows={5}

                placeholder="Cuéntanos sobre tu proyecto"

                className="
                w-full
                rounded-2xl
                border
                border-gray-300
                px-5
                py-4
                resize-none
                outline-none
                focus:ring-2
                focus:ring-blue-500
                "

              />



              <a

                href="https://wa.me/522288387941"

                target="_blank"

                className="
                block
                text-center
                bg-green-600
                hover:bg-green-700
                text-white
                rounded-2xl
                py-4
                font-semibold
                transition
                "

              >

                Enviar por WhatsApp

              </a>


            </div>


          </div>



        </div>


      </div>


    </section>

  );

}