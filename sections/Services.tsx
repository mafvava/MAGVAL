export default function Services() {

  const services = [

    {
      title: "Diseño Web Profesional",

      description:
        "Creamos páginas modernas, atractivas y adaptadas a la identidad de cada negocio para generar confianza en tus clientes.",

      icon: "🌐"

    },

    {
      title: "Desarrollo de Sistemas",

      description:
        "Construimos soluciones digitales personalizadas, desde páginas informativas hasta plataformas con funciones avanzadas.",

      icon: "⚙️"

    },

    {
      title: "Optimización y Experiencia",

      description:
        "Mejoramos la velocidad, estructura y navegación para que tus usuarios tengan una experiencia sencilla y agradable.",

      icon: "🚀"

    },

    {
      title: "Integración Digital",

      description:
        "Conectamos herramientas como WhatsApp, formularios, bases de datos y servicios externos para potenciar tu negocio.",

      icon: "🔗"

    },

    {
      title: "Diseño Responsive",

      description:
        "Garantizamos que tu sitio funcione correctamente en celulares, tablets y computadoras.",

      icon: "📱"

    },

    {
      title: "Soporte y Evolución",

      description:
        "Acompañamos el crecimiento de tu proyecto realizando mejoras y nuevas funcionalidades cuando sean necesarias.",

      icon: "🛠️"

    }

  ];


  return (

    <section
      id="servicios"
      className="bg-gray-100"
    >

      <div className="max-w-7xl mx-auto">


        <div className="text-center">


          <span
            className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-purple-100
            text-purple-700
            font-semibold
            "
          >

            Servicios

          </span>


          <h2
            className="
            mt-6
            text-4xl
            md:text-5xl
            font-bold
            "
          >

            Soluciones digitales para tu negocio

          </h2>


          <p
            className="
            mt-6
            max-w-3xl
            mx-auto
            text-gray-600
            text-lg
            leading-8
            "
          >

            Desarrollamos herramientas digitales pensadas para ayudarte a
            mejorar tu presencia en internet y conectar mejor con tus clientes.

          </p>


        </div>



        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-16
          "
        >


          {

            services.map((service)=>(


              <div

                key={service.title}

                className="
                bg-white
                rounded-3xl
                p-8
                border
                border-gray-200
                hover:shadow-xl
                transition
                "

              >


                <div
                  className="
                  text-5xl
                  "
                >

                  {service.icon}

                </div>



                <h3
                  className="
                  mt-6
                  text-2xl
                  font-bold
                  "
                >

                  {service.title}

                </h3>



                <p
                  className="
                  mt-4
                  text-gray-600
                  leading-7
                  "
                >

                  {service.description}

                </p>


              </div>


            ))

          }


        </div>


      </div>


    </section>

  );

}