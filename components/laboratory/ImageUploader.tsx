interface Props {

  logo: string;

  setLogo: (value: string) => void;

  cover: string;

  setCover: (value: string) => void;

}

export default function ImageUploader({

  logo,

  setLogo,

  cover,

  setCover

}: Props) {

  return (

    <div className="space-y-8">

      {/* Logo */}

      <div>

        <label
          htmlFor="logo"
          className="block text-lg font-semibold text-gray-800"
        >

          Logo de tu negocio

        </label>

        <p className="text-gray-500 mt-2 leading-7">

          Si ya tienes un logo, puedes pegar aquí el enlace donde se encuentra
          (Google Drive, Dropbox, OneDrive, etc.). Si aún no tienes uno,
          simplemente escríbelo.

        </p>

        <textarea

          id="logo"

          rows={3}

          value={logo}

          onChange={(e) => setLogo(e.target.value)}

          placeholder="Ejemplo:
https://drive.google.com/...

o

Aún no tengo un logo."

          className="
          w-full
          mt-4
          rounded-2xl
          border
          border-gray-300
          p-4
          resize-none
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/20
          "

        />

      </div>

      {/* Imagen principal */}

      <div>

        <label
          htmlFor="cover"
          className="block text-lg font-semibold text-gray-800"
        >

          Fotografías o imágenes

        </label>

        <p className="text-gray-500 mt-2 leading-7">

          Comparte el enlace donde tengas almacenadas las fotografías que te
          gustaría utilizar en tu sitio web o describe qué imágenes deseas.

        </p>

        <textarea

          id="cover"

          rows={5}

          value={cover}

          onChange={(e) => setCover(e.target.value)}

          placeholder="Ejemplo:

https://drive.google.com/...

o

Tengo fotografías del restaurante y del menú.

o

Las enviaré por WhatsApp."

          className="
          w-full
          mt-4
          rounded-2xl
          border
          border-gray-300
          p-4
          resize-none
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/20
          "

        />

      </div>

      {/* Información */}

      <div className="rounded-2xl bg-blue-50 border border-blue-200 p-6">

        <h3 className="text-lg font-semibold text-blue-700">

          No te preocupes si aún no tienes imágenes.

        </h3>

        <p className="mt-3 text-gray-700 leading-7">

          Podemos diseñar una propuesta inicial utilizando imágenes de ejemplo.
          Más adelante podremos reemplazarlas por las fotografías reales de tu
          negocio cuando las tengas disponibles.

        </p>

      </div>

    </div>

  );

}