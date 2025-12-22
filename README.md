# Plataforma Educativa (nombre provisorio)

Este repositorio contiene el código fuente y la documentación de una **plataforma educativa web** diseñada para centralizar contenidos, mejorar el acceso de los estudiantes al material académico y permitir una monetización sostenible para docentes e instituciones educativas.

> **Estado:** Etapa temprana / Fundaciones del MVP  
> **Idioma principal:** Español  
> **Contexto inicial:** Educación en Argentina  
> **Propietarios:** Equipo independiente (educación + tecnología)

---

## 🚀 ¿Qué estamos construyendo?

Estamos construyendo una **plataforma educativa modular** que permite a docentes e instituciones:

- Publicar contenido educativo **público** (artículos, blogs, avisos)
- Proveer **material protegido** para estudiantes (PDFs, guías, recursos)
- Centralizar la comunicación académica
- Monetizar el tráfico de forma ética mediante publicidad
- Sentar las bases para futuras funcionalidades inteligentes (por ejemplo, asistentes académicos con IA)

El primer caso de uso surge de un **instituto de formación docente**, pero la plataforma está pensada desde el inicio para escalar y convertirse en un **producto licenciable** para instituciones públicas y privadas.

---

## 🎯 Visión

Empoderar a docentes e instituciones educativas mediante herramientas digitales modernas, accesibles y escalables, que mejoren la experiencia de aprendizaje sin perder de vista los marcos pedagógicos, legales y éticos.

---

## 🧭 Misión

Nuestra misión es construir una plataforma educativa flexible y sostenible que:

- Reduzca la fragmentación de contenidos académicos
- Mejore el acceso y la experiencia de los estudiantes
- Respete los derechos de autor y las normativas educativas
- Permita a docentes e instituciones crecer digitalmente sin barreras técnicas innecesarias

---

## 🧠 Mini pitch (respuesta corta a “¿qué están haciendo?”)

> Estamos desarrollando una plataforma educativa moderna que ayuda a docentes a centralizar contenidos, proteger material con derechos de autor y escalar su presencia digital, partiendo de un caso real de aula y evolucionando hacia un producto licenciable para instituciones.

---

## 🧩 Funcionalidades principales (alcance MVP)

- Sitio web educativo público (optimizado para SEO)
- Blog y contenido estático
- Sección de acceso restringido mediante códigos
- Almacenamiento y entrega segura de material educativo
- Integración con newsletter
- Soporte para publicidad (solo en contenido público)

---

## 🏗️ Stack tecnológico (inicial)

- **Frontend / Backend:** Next.js (App Router, TypeScript)
- **Base de datos & Storage:** Supabase
- **Hosting:** Vercel
- **Estilos:** Tailwind CSS
- **Estrategia de acceso (MVP):** Rutas protegidas mediante código de acceso
- **CI/CD:** GitHub + Vercel

Las decisiones arquitectónicas relevantes se documentan en la carpeta `/docs`.

---

## 🔐 Modelo de acceso y seguridad (MVP)

- Separación clara entre contenido público y protegido
- Acceso al contenido restringido mediante códigos válidos
- Códigos rotativos y con vencimiento
- El material protegido no se expone públicamente ni se indexa

---

## 📁 Estructura del repositorio (resumen)

- `/app` → Rutas de la aplicación (públicas y protegidas)
- `/components` → Componentes de UI y layout
- `/lib` → Lógica compartida (auth, db, seguridad)
- `/content` → Contenido versionado (blog, legales)
- `/docs` → Documentación de producto y arquitectura
- `/tests` → Tests automatizados


---

## 📚 Documentación

La documentación adicional vive en la carpeta `/docs`, incluyendo:

- Visión y alcance del producto
- Arquitectura técnica
- Definición de funcionalidades
- Registros de decisiones de arquitectura (ADRs)

---

## ⚠️ Nota

Este proyecto se encuentra en desarrollo activo.  
Los nombres, branding y ciertos detalles de implementación son provisorios y podrán cambiar a medida que el producto evolucione.

---

## 🤝 Contribuciones

En esta etapa, el desarrollo es interno.  
Las pautas de contribución podrán definirse en el futuro si el proyecto se abre a colaboradores externos.
