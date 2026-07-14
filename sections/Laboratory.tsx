"use client";

import { useState } from "react";

import BusinessInput from "@/components/laboratory/BusinessInput";
import StyleInput from "@/components/laboratory/StyleInput";
import ColorSelector from "@/components/laboratory/ColorSelector";
import SectionsInput from "@/components/laboratory/SectionsInput";
import ImageUploader from "@/components/laboratory/ImageUploader";
import PreviewCard from "@/components/laboratory/PreviewCard";
import WhatsAppButton from "@/components/laboratory/WhatsAppButton";
import StepTitle from "@/components/laboratory/StepTitle";

export default function Laboratory() {

  // Información del negocio
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");

  // Diseño
  const [style, setStyle] = useState("");

  // Colores
  const [primary, setPrimary] = useState("#2563eb");
  const [secondary, setSecondary] = useState("#7c3aed");
  const [accent, setAccent] = useState("#22c55e");

  // Contenido
  const [sections, setSections] = useState("");

  // Información adicional
  const [objective, setObjective] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [references, setReferences] = useState("");

  // Imágenes
  const [logo, setLogo] = useState("");
  const [cover, setCover] = useState("");

  return (

    <section
      id="laboratorio"
      className="bg-gray-100 py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">

            Laboratorio Digital

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">

            Cuéntanos cómo imaginas tu sitio web.
            Con esta información prepararemos una propuesta
            completamente personalizada para tu negocio.

          </p>

        </div>

        <div className="grid xl:grid-cols-2 gap-10">

          {/* ================= FORMULARIO ================= */}

          <div className="bg-white rounded-3xl shadow-xl p-10 space-y-12">

            <StepTitle
              number="1"
              title="Información del negocio"
            />

            <BusinessInput
              businessName={businessName}
              setBusinessName={setBusinessName}
              businessType={businessType}
              setBusinessType={setBusinessType}
            />

            <StepTitle
              number="2"
              title="Estilo visual"
            />

            <StyleInput
              value={style}
              onChange={setStyle}
            />

            <StepTitle
              number="3"
              title="Paleta de colores"
            />

            <ColorSelector
              primary={primary}
              secondary={secondary}
              accent={accent}
              setPrimary={setPrimary}
              setSecondary={setSecondary}
              setAccent={setAccent}
            />

            <StepTitle
              number="4"
              title="Contenido del sitio"
            />

            <SectionsInput
              value={sections}
              onChange={setSections}
            />

            <StepTitle
              number="5"
              title="Objetivo del proyecto"
            />

            <textarea
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              rows={4}
              placeholder="Ejemplo: Conseguir más clientes, vender productos, recibir reservaciones..."
              className="
              w-full
              rounded-2xl
              border
              border-gray-300
              p-4
              resize-none
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "
            />

            <StepTitle
              number="6"
              title="Público objetivo"
            />

            <textarea
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              rows={4}
              placeholder="Ejemplo: Empresas, restaurantes, médicos, jóvenes..."
              className="
              w-full
              rounded-2xl
              border
              border-gray-300
              p-4
              resize-none
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "
            />

            <StepTitle
              number="7"
              title="Sitios web de referencia"
            />

            <textarea
              value={references}
              onChange={(e) => setReferences(e.target.value)}
              rows={5}
              placeholder="Pega aquí los enlaces de páginas que te gusten."
              className="
              w-full
              rounded-2xl
              border
              border-gray-300
              p-4
              resize-none
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "
            />

            <StepTitle
              number="8"
              title="Logo e imágenes"
            />

            <ImageUploader
              logo={logo}
              setLogo={setLogo}
              cover={cover}
              setCover={setCover}
            />

          </div>

          {/* ================= VISTA PREVIA ================= */}

          <div className="flex flex-col gap-8">

            <PreviewCard
              businessName={businessName}
              businessType={businessType}
              style={style}
              primary={primary}
              secondary={secondary}
              accent={accent}
              sections={sections}
              logo={logo}
              cover={cover}
            />

            <WhatsAppButton
              businessName={businessName}
              businessType={businessType}
              style={style}
              primary={primary}
              secondary={secondary}
              accent={accent}
              sections={sections}
              objective={objective}
              targetAudience={targetAudience}
              references={references}
            />

          </div>

        </div>

      </div>

    </section>

  );

}