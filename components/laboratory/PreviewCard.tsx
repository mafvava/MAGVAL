interface Props {

  businessName: string;

  businessType: string;

  style: string;

  primary: string;

  secondary: string;

  accent: string;

  sections: string;

  logo: string;

  cover: string;

}

export default function PreviewCard({

  businessName,

  businessType,

  style,

  primary,

  secondary,

  accent,

  sections,

  logo,

  cover

}: Props) {

  return (

    <div
      className="
      bg-white
      rounded-3xl
      shadow-xl
      overflow-hidden
      border
      border-gray-200
      "
    >

      {/* Barra del navegador */}

      <div className="bg-gray-100 border-b px-6 py-4">

        <div className="flex items-center gap-2">

          <div className="w-3 h-3 rounded-full bg-red-400" />

          <div className="w-3 h-3 rounded-full bg-yellow-400" />

          <div className="w-3 h-3 rounded-full bg-green-400" />

        </div>

      </div>

      {/* Encabezado */}

      <div
        className="px-8 py-6 text-white"
        style={{
          backgroundColor: primary
        }}
      >

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-3xl font-bold">

              {businessName || "Nombre del negocio"}

            </h2>

            <p className="mt-2 opacity-90">

              {businessType || "Tipo de negocio"}

            </p>

          </div>

          <button
            className="px-5 py-3 rounded-xl font-semibold"
            style={{
              backgroundColor: accent
            }}
          >

            Contactar

          </button>

        </div>

      </div>

      {/* Imagen principal */}

      <div
        className="h-64 flex items-center justify-center"
        style={{
          backgroundColor: secondary
        }}
      >

        {cover ? (

          <div className="text-center text-white">

            <p className="text-lg font-semibold">

              ✓ Imagen agregada

            </p>

            <p className="text-sm mt-2 opacity-80">

              El cliente proporcionó imágenes.

            </p>

          </div>

        ) : (

          <div className="text-center text-white">

            <p className="text-2xl">

              🖼️

            </p>

            <p className="mt-3">

              Aquí aparecerá la imagen principal

            </p>

          </div>

        )}

      </div>

      {/* Información */}

      <div className="p-8 space-y-8">

        {/* Estilo */}

        <div>

          <h3 className="text-xl font-bold text-gray-800">

            Estilo visual

          </h3>

          <p className="text-gray-600 mt-3 whitespace-pre-line">

            {style || "Aún no se ha especificado."}

          </p>

        </div>

        {/* Secciones */}

        <div>

          <h3 className="text-xl font-bold text-gray-800">

            Contenido del sitio

          </h3>

          <div
            className="
            mt-4
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            p-5
            "
          >

            <p className="whitespace-pre-line text-gray-700">

              {sections || "Aquí aparecerán las secciones de la página."}

            </p>

          </div>

        </div>

        {/* Logo */}

        <div>

          <h3 className="text-xl font-bold text-gray-800">

            Logo

          </h3>

          <p className="mt-3 text-gray-600 break-words">

            {logo || "El cliente aún no proporciona un logo."}

          </p>

        </div>

        {/* Colores */}

        <div>

          <h3 className="text-xl font-bold text-gray-800 mb-5">

            Paleta seleccionada

          </h3>

          <div className="flex gap-6">

            <div className="text-center">

              <div
                className="w-16 h-16 rounded-xl shadow border"
                style={{
                  backgroundColor: primary
                }}
              />

              <p className="mt-2 text-sm">

                Principal

              </p>

            </div>

            <div className="text-center">

              <div
                className="w-16 h-16 rounded-xl shadow border"
                style={{
                  backgroundColor: secondary
                }}
              />

              <p className="mt-2 text-sm">

                Secundario

              </p>

            </div>

            <div className="text-center">

              <div
                className="w-16 h-16 rounded-xl shadow border"
                style={{
                  backgroundColor: accent
                }}
              />

              <p className="mt-2 text-sm">

                Acento

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}