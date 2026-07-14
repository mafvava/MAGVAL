interface Props {

  businessName: string;

  businessType: string;

  style: string;

  primary: string;

  secondary: string;

  accent: string;

  sections: string;

  objective: string;

  targetAudience: string;

  references: string;

}

export default function WhatsAppButton({

  businessName,

  businessType,

  style,

  primary,

  secondary,

  accent,

  sections,

  objective,

  targetAudience,

  references

}: Props) {

  function sendWhatsApp() {

    const phone = "522288387941"; // ← Reemplaza por tu número

    const message = `
Hola, me gustaría solicitar una propuesta para una página web.

==============================
INFORMACIÓN DEL NEGOCIO
==============================

• Nombre:
${businessName || "No especificado"}

• Tipo:
${businessType || "No especificado"}

==============================
ESTILO VISUAL
==============================

${style || "No especificado"}

==============================
COLORES
==============================

• Principal: ${primary}

• Secundario: ${secondary}

• Acento: ${accent}

==============================
CONTENIDO DEL SITIO
==============================

${sections || "No especificado"}

==============================
OBJETIVO DEL PROYECTO
==============================

${objective || "No especificado"}

==============================
PÚBLICO OBJETIVO
==============================

${targetAudience || "No especificado"}

==============================
SITIOS DE REFERENCIA
==============================

${references || "No especificado"}

==============================

Espero su propuesta.
Muchas gracias.
`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

  }

  return (

    <button

      type="button"

      onClick={sendWhatsApp}

      className="
      w-full
      rounded-3xl
      bg-green-600
      hover:bg-green-700
      transition
      text-white
      py-5
      px-8
      text-lg
      font-semibold
      shadow-xl
      cursor-pointer
      "

    >

      Enviar información por WhatsApp

    </button>

  );

}