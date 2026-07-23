// Etiqueta de roupa (swing tag) reutilizável.
// Forma de bandeirola (retângulo + ponta triangular) via clip-path na classe
// `.swing-tag`, com o furo redondo perto da ponta desenhado por cima.
// Nota: NÃO fixamos `position` aqui. O furo é posicionado com `absolute`, então
// a etiqueta precisa ser um containing block, garantido pelo `absolute` no card
// e pelo `transform` da animação no hero (ambos criam containing block).
export default function SwingTag({ children, className = '', holeClassName = '' }) {
  return (
    <div className={`swing-tag ${className}`}>
      {children}
      {/* furo da etiqueta */}
      <span
        className={`pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 rounded-full ${holeClassName}`}
        aria-hidden="true"
      />
    </div>
  )
}
