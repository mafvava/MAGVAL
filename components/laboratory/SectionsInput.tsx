interface Props {

  value: string;

  onChange: (value: string) => void;

}

export default function SectionsInput({

  value,

  onChange

}: Props) {

  return (

    <div className="space-y-6">

      <div>

        <label
          htmlFor="sections"
          className="block text-lg font-semibold text-gray-800"
        >

          ¿Qué te gustaría incluir en tu página?

        </label>

        <p className="text-gray-500 mt-2 leading-7">

          Escribe las secciones o funciones que consideres importantes.
          No te preocupes si no conoces todos los términos, nosotros te
          ayudaremos a estructurar la mejor solución.

        </p>

      </div>

      <textarea

        id="sections"

        value={value}

        onChange={(e) => onChange(e.target.value)}

        rows={8}

        placeholder={`Ejemplo:

• Inicio
• Nosotros
• Servicios
• Galería
• Productos
• Tienda en línea
• Reservaciones
• Agenda de citas
• Testimonios
• Preguntas frecuentes
• Blog
• Contacto
• Mapa de ubicación
• Botón de WhatsApp
• Formularios
• Redes sociales
`}

        className="
        w-full
        rounded-2xl
        border
        border-gray-300
        p-5
        resize-none
        outline-none
        transition
        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-500/20
        "

      />

      <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">

        <h4 className="font-semibold text-lg">

          Algunas ideas que puedes agregar

        </h4>

        <div className="grid md:grid-cols-2 gap-3 mt-5 text-gray-700">

          <p>• Página de inicio</p>

          <p>• Nosotros</p>

          <p>• Servicios</p>

          <p>• Productos</p>

          <p>• Catálogo</p>

          <p>• Tienda en línea</p>

          <p>• Reservaciones</p>

          <p>• Agenda de citas</p>

          <p>• Galería</p>

          <p>• Portafolio</p>

          <p>• Blog</p>

          <p>• Preguntas frecuentes</p>

          <p>• Testimonios</p>

          <p>• Contacto</p>

          <p>• Mapa</p>

          <p>• Redes sociales</p>

          <p>• Botón de WhatsApp</p>

          <p>• Formularios</p>

        </div>

      </div>

    </div>

  );

}