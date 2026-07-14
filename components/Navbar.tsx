"use client";

import { useState } from "react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "Inicio",
      href: "#inicio"
    },
    {
      name: "Nosotros",
      href: "#nosotros"
    },
    {
      name: "Laboratorio",
      href: "#laboratorio"
    },
    {
      name: "Servicios",
      href: "#servicios"
    },
    {
      name: "Contacto",
      href: "#contacto"
    }
  ];

  return (

    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-white/90
      backdrop-blur-md
      border-b
      border-gray-200
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        "
      >

        {/* Logo */}

        <a
          href="#inicio"
          className="
          text-3xl
          font-bold
          bg-gradient-to-r
          from-blue-600
          to-purple-600
          bg-clip-text
          text-transparent
          "
        >

          MagVal

        </a>

        {/* Menú escritorio */}

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >

          {

            links.map(link => (

              <a

                key={link.name}

                href={link.href}

                className="
                text-gray-700
                font-medium
                hover:text-blue-600
                transition-colors
                "

              >

                {link.name}

              </a>

            ))

          }

        </nav>

        {/* Botón menú móvil */}

        <button

          type="button"

          onClick={() => setIsOpen(!isOpen)}

          className="
          md:hidden
          text-3xl
          "

        >

          {isOpen ? "✕" : "☰"}

        </button>

      </div>

      {/* Menú móvil */}

      {

        isOpen && (

          <div
            className="
            md:hidden
            border-t
            border-gray-200
            bg-white
            "
          >

            <nav
              className="
              flex
              flex-col
              p-6
              gap-5
              "
            >

              {

                links.map(link => (

                  <a

                    key={link.name}

                    href={link.href}

                    onClick={() => setIsOpen(false)}

                    className="
                    text-gray-700
                    font-medium
                    hover:text-blue-600
                    transition-colors
                    "

                  >

                    {link.name}

                  </a>

                ))

              }

            </nav>

          </div>

        )

      }

    </header>

  );

}