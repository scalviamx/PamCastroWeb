import Link from "next/link";

const WA_LINK = "https://wa.me/message/I6Z4V2NBJQ7QO1";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1A] text-[#FAFAF7] py-14 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p
            className="text-[#3D6B4F] text-lg font-semibold mb-1"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            Pam Castro
          </p>
          <p className="text-[#9C9C8E] text-xs uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-raleway)" }}>
            Nutrióloga Clínica
          </p>
          <p className="text-[#9C9C8E] text-sm leading-relaxed" style={{ fontFamily: "var(--font-raleway)" }}>
            Especialista en nutrición funcional y autoinmune. Harvard Medical School · España.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#9C9C8E] mb-4" style={{ fontFamily: "var(--font-raleway)" }}>
            Navegación
          </p>
          <ul className="flex flex-col gap-2">
            {[
              { href: "/", label: "Inicio" },
              { href: "/mi-historia", label: "Mi Historia" },
              { href: "/consultas", label: "Consultas" },
              { href: "/testimonios", label: "Testimonios" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-[#CCCCC0] hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#9C9C8E] mb-4" style={{ fontFamily: "var(--font-raleway)" }}>
            Contacto
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#CCCCC0] hover:text-white transition-colors mb-4"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.842L.057 23.43a.5.5 0 0 0 .514.57l5.783-1.516A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-4.98-1.36l-.357-.212-3.435.9.916-3.347-.232-.374A9.785 9.785 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
            WhatsApp para citas
          </a>
          <div className="flex gap-4">
            {[
              { href: "https://www.instagram.com/nutricionpamcastro/", label: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" },
              { href: "https://www.facebook.com/nutricionpamcastro/", label: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-[#9C9C8E] hover:text-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[#2E2E2C] flex flex-col md:flex-row justify-between gap-2">
        <p className="text-[#6B6B60] text-xs" style={{ fontFamily: "var(--font-raleway)" }}>
          © 2025 Nutrición Pam Castro. Todos los derechos reservados.
        </p>
        <Link
          href="/aviso-de-privacidad"
          className="text-[#6B6B60] text-xs hover:text-[#9C9C8E] transition-colors"
          style={{ fontFamily: "var(--font-raleway)" }}
        >
          Aviso de privacidad
        </Link>
      </div>
    </footer>
  );
}
