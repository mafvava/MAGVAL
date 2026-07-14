interface Props {

  value: string;

  onChange: (value: string) => void;

}

export default function StyleInput({

  value,

  onChange

}: Props) {

  return (

    <div className="space-y-6">

      <div>

        <label
          htmlFor="style"
          className="block text-lg font-semibold text-gray-800"
        >

          Describe el estilo que imaginas

        </label>

        <p className="text-gray-500 mt-2">

          Puedes mencionar colores, tipos de diseño o incluso páginas que te
          gusten.

        </p>

      </div>

      <textarea

        id="style"

        value={value}

        onChange={(e) => onChange(e.target.value)}

        rows={5}

        placeholder="Ejemplo:

• Diseño moderno
• Minimalista
• Elegante
• Tecnológico
• Colores oscuros
• Animaciones suaves
• Mucho espacio en blanco
"

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

      <div className="rounded-2xl bg-blue-50 border border-blue-200 p-5">

        <h4 className="font-semibold text-blue-700">

          Algunas ideas que puedes mencionar

        </h4>

        <ul className="mt-4 space-y-2 text-gray-700">

          <li>• Diseño moderno</li>

          <li>• Elegante</li>

          <li>• Minimalista</li>

          <li>• Corporativo</li>

          <li>• Tecnológico</li>

          <li>• Premium</li>

          <li>• Colores claros</li>

          <li>• Colores oscuros</li>

          <li>• Animaciones</li>

          <li>• Estilo similar a Apple o Tesla</li>

        </ul>

      </div>

    </div>

  );

}