interface Props {

  primary: string;

  secondary: string;

  accent: string;

  setPrimary: (value: string) => void;

  setSecondary: (value: string) => void;

  setAccent: (value: string) => void;

}

export default function ColorSelector({

  primary,

  secondary,

  accent,

  setPrimary,

  setSecondary,

  setAccent

}: Props) {

  return (

    <div className="space-y-10">

      <p className="text-gray-600 leading-7">

        Selecciona los colores que mejor representen la identidad de tu marca.
        Estos servirán como guía para crear la propuesta visual de tu sitio web.

      </p>

      {/* Color principal */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div className="flex-1">

          <h3 className="text-lg font-semibold">

            Color principal

          </h3>

          <p className="text-gray-500 mt-1">

            Es el color predominante de la página. Normalmente se utiliza en
            encabezados, botones principales y elementos destacados.

          </p>

        </div>

        <div className="flex items-center gap-4">

          <input

            type="color"

            value={primary}

            onChange={(e)=>setPrimary(e.target.value)}

            className="
            w-16
            h-16
            cursor-pointer
            rounded-xl
            border
            border-gray-300
            "

          />

          <span className="font-mono text-sm">

            {primary}

          </span>

        </div>

      </div>

      {/* Color secundario */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div className="flex-1">

          <h3 className="text-lg font-semibold">

            Color secundario

          </h3>

          <p className="text-gray-500 mt-1">

            Ideal para tarjetas, fondos, bloques de contenido y secciones
            complementarias.

          </p>

        </div>

        <div className="flex items-center gap-4">

          <input

            type="color"

            value={secondary}

            onChange={(e)=>setSecondary(e.target.value)}

            className="
            w-16
            h-16
            cursor-pointer
            rounded-xl
            border
            border-gray-300
            "

          />

          <span className="font-mono text-sm">

            {secondary}

          </span>

        </div>

      </div>

      {/* Color de acento */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div className="flex-1">

          <h3 className="text-lg font-semibold">

            Color de acento

          </h3>

          <p className="text-gray-500 mt-1">

            Se utiliza para botones secundarios, enlaces, iconos y pequeños
            detalles que llaman la atención.

          </p>

        </div>

        <div className="flex items-center gap-4">

          <input

            type="color"

            value={accent}

            onChange={(e)=>setAccent(e.target.value)}

            className="
            w-16
            h-16
            cursor-pointer
            rounded-xl
            border
            border-gray-300
            "

          />

          <span className="font-mono text-sm">

            {accent}

          </span>

        </div>

      </div>

      {/* Vista previa */}

      <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">

        <h3 className="text-xl font-bold mb-6">

          Vista previa de la paleta

        </h3>

        <div className="flex flex-wrap gap-6 justify-center">

          <div className="text-center">

            <div

              className="w-24 h-24 rounded-2xl shadow border"

              style={{
                backgroundColor: primary
              }}

            />

            <p className="mt-3 font-medium">

              Principal

            </p>

            <p className="text-sm text-gray-500">

              {primary}

            </p>

          </div>

          <div className="text-center">

            <div

              className="w-24 h-24 rounded-2xl shadow border"

              style={{
                backgroundColor: secondary
              }}

            />

            <p className="mt-3 font-medium">

              Secundario

            </p>

            <p className="text-sm text-gray-500">

              {secondary}

            </p>

          </div>

          <div className="text-center">

            <div

              className="w-24 h-24 rounded-2xl shadow border"

              style={{
                backgroundColor: accent
              }}

            />

            <p className="mt-3 font-medium">

              Acento

            </p>

            <p className="text-sm text-gray-500">

              {accent}

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}