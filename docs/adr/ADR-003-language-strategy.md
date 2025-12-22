# ADR-003: Estrategia de idioma (MVP)

## Estado
Aceptado

## Contexto

El producto nace a partir de una necesidad concreta dentro del sistema educativo argentino, con foco inicial en estudiantes y docentes de institutos de formación docente.

El idioma principal del público objetivo es el español, y todo el contenido educativo, legal y comunicacional está pensado inicialmente para dicho contexto cultural y normativo.

Sin embargo, el producto podría escalar en el futuro hacia otros mercados o instituciones donde el idioma inglés u otros idiomas sean relevantes.

## Decisión

Se decide que:

- El **idioma único del producto en la etapa MVP será español**.
- Toda la interfaz, documentación, contenido y comunicación se desarrollará en español.
- El código se estructurará de forma tal que **no bloquee una futura internacionalización (i18n)**, evitando hardcodear textos directamente en los componentes cuando sea posible.
- No se implementará soporte multi-idioma activo en esta etapa.

## Consecuencias

### Positivas
- Mayor foco en el mercado objetivo inicial.
- Menor complejidad técnica en etapas tempranas.
- Iteración más rápida sobre el producto.
- Lenguaje alineado con usuarios reales desde el día 1.

### Negativas / Limitaciones
- El producto no estará listo para usuarios no hispanohablantes.
- La internacionalización requerirá trabajo adicional en el futuro.

### Mitigación
- Centralizar textos de la interfaz para facilitar traducciones futuras.
- Documentar explícitamente esta decisión para evitar confusión o refactor innecesario más adelante.

## Revisión futura

Esta decisión deberá revisarse si:
- El producto se ofrece a instituciones fuera del ámbito hispanohablante.
- Se define una estrategia comercial internacional.
- Se justifica el costo de implementar i18n completo.
