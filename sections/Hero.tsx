export default function Hero() {

  return (

    <section
      id="inicio"
      className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      bg-white
      "
    >

      {/* Fondo decorativo */}

      <div
        className="
        absolute
        top-20
        right-10
        w-80
        h-80
        rounded-full
        bg-blue-500/20
        blur-3xl
        "
      />

      <div
        className="
        absolute
        bottom-0
        left-0
        w-80
        h-80
        rounded-full
        bg-purple-500/20
        blur-3xl
        "
      />

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        grid
        lg:grid-cols-2
        gap-16
        items-center
        "
      >

        {/* Texto */}

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

            Diseño Web • Tecnología • Innovación

          </span>

          <h1
            className="
            mt-8
            text-5xl
            md:text-6xl
            lg:text-7xl
            font-black
            leading-tight
            "
          >

            El mejor problema
            <br />

            es el que nunca
            <br />

            llega a existir.

          </h1>

          <p
            className="
            mt-8
            text-lg
            text-gray-600
            leading-8
            max-w-2xl
            "
          >

            En <strong>MagVal</strong> vamos de la mano con nuestros clientes
            pensamos tanto en sus necesidades y como mejorar sus negocios para que 
            su experencia sea la mejor, diseñamos esta pagina para que se hagan idea
            de como seria su sitio ideal y llevarlo de la imaginacion a la realidad.

          </p>

          <div
            className="
            mt-10
            flex
            flex-wrap
            gap-5
            "
          >

            <a
              href="#laboratorio"
              className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-8
              py-4
              rounded-2xl
              font-semibold
              transition
              "
            >

              Diseña tu proyecto

            </a>

            <a
              href="#contacto"
              className="
              border
              border-gray-300
              hover:bg-gray-100
              px-8
              py-4
              rounded-2xl
              font-semibold
              transition
              "
            >

              Contáctanos

            </a>

          </div>

        </div>

        {/* Tarjeta visual */}

        <div
          className="
          bg-white
          rounded-3xl
          shadow-2xl
          border
          overflow-hidden
          "
        >

          {/* Barra superior */}

          <div
            className="
            flex
            items-center
            gap-2
            px-6
            py-4
            bg-gray-100
            border-b
            "
          >

            <div className="w-3 h-3 rounded-full bg-red-400" />

            <div className="w-3 h-3 rounded-full bg-yellow-400" />

            <div className="w-3 h-3 rounded-full bg-green-400" />

          </div>

          {/* Contenido */}

          <div className="p-8">

            <div className="h-12 rounded-xl bg-blue-600" />

            <div className="mt-8 h-56 rounded-2xl bg-gray-200 flex items-center justify-center">

              <span className="text-6xl">

                💻

              </span>

            </div>

            <div className="mt-8 space-y-4">

              <div className="h-4 rounded-full bg-gray-300 w-full" />

              <div className="h-4 rounded-full bg-gray-300 w-5/6" />

              <div className="h-4 rounded-full bg-gray-300 w-3/4" />

            </div>

            <div className="mt-8 flex gap-4">

              <div className="flex-1 h-24 rounded-2xl bg-blue-100" />

              <div className="flex-1 h-24 rounded-2xl bg-purple-100" />

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}