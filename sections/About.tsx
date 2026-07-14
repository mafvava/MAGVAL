export default function About() {

  const features = [

    {
      title: "Diseño Personalizado",
      description:
        "Cada proyecto se desarrolla desde cero para adaptarse a la identidad y necesidades de tu negocio."
    },

    {
      title: "Desarrollo Moderno",
      description:
        "Creamos sitios rápidos, seguros y compatibles con computadoras, tabletas y teléfonos móviles."
    },

    {
      title: "Acompañamiento",
      description:
        "Te guiamos durante todo el proceso, desde la idea inicial hasta la publicación de tu página web."
    }

  ];

  return (

    <section
      id="nosotros"
      className="bg-white"
    >

      <div className="max-w-7xl mx-auto">

        <div className="text-center">

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

            ¿Quiénes somos?

          </span>

          <h2
            className="
            mt-6
            text-4xl
            md:text-5xl
            font-bold
            "
          >

            Transformamos ideas en
            experiencias digitales

          </h2>

          <p
            className="
            mt-6
            max-w-3xl
            mx-auto
            text-lg
            text-gray-600
            leading-8
            "
          >

            En <strong>MagVal</strong> creemos que una página web no solo debe
            verse bien, también debe transmitir confianza, representar la
            esencia de cada negocio y convertirse en una herramienta que ayude
            a conseguir nuevos clientes.

          </p>

        </div>

        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          mt-16
          "
        >

          {

            features.map((feature) => (

              <div
                key={feature.title}
                className="
                bg-gray-50
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
                  w-16
                  h-16
                  rounded-2xl
                  bg-blue-600
                  text-white
                  flex
                  items-center
                  justify-center
                  text-2xl
                  font-bold
                  "
                >

                  ★

                </div>

                <h3
                  className="
                  mt-6
                  text-2xl
                  font-bold
                  "
                >

                  {feature.title}

                </h3>

                <p
                  className="
                  mt-4
                  text-gray-600
                  leading-7
                  "
                >

                  {feature.description}

                </p>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

}