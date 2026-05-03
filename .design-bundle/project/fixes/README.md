# Fixes para Gestoria/

Reemplazá estos archivos en tu carpeta local `Gestoria/`:

| Archivo | Cambio |
|---|---|
| `src/styles/components.css` | `.section-head` ahora es **flex-row** con dos columnas (left/right). Corrige el typo `align-items: c`. |
| `src/styles/hero.css` | `.hero-bottom` ahora es **grid de 3 columnas** (tagline / actions / plaque) en lugar de columna única. Mobile cae a 1 columna. |
| `src/styles/advisory.css` | `.advisory-spread` ahora es **grid de 2 columnas** (cita / lista). Mobile cae a 1 columna. |
| `src/styles/location.css` | `.location-meta-item` alineado a la izquierda (antes tenía `justify-content: center`). |
| `src/styles/trust.css` | Removido el bloque inválido `.section-head-right { width: 100% !important }` que pisaba el layout global. |
| `src/index.css` | Eliminado el CSS del scaffold de Vite que pisaba `--sans`, `--mono`, `h1/h2/p`, y forzaba `#root { width: 1500px; text-align: center }`. |

Los demás archivos (`process.css`, `services.css`, `coverage.css`, `contact.css`, `nav.css`, `folio.css`, `animations.css`, `global.css`, y todos los `.jsx`) **no necesitan cambios**.
