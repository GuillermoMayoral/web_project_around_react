# Around US (React) - Plataforma Interactiva de Fotos

¡Bienvenidos a **Around US**! Este proyecto es una aplicación web interactiva desarrollada con **React** que permite a los usuarios compartir fotografías de lugares increíbles, dar "me gusta" a las imágenes de otros miembros, editar su perfil y gestionar su galería personal en tiempo real mediante la integración con una API externa.

Este desarrollo representa la migración completa de una arquitectura orientada a objetos en JavaScript Vanilla hacia un ecosistema de componentes funcionales moderno basado en React y Vite.

---

## 🚀 Características Principales

- **Gestión de Perfil:** Modificación de nombre, ocupación y fotografía de avatar mediante popups interactivos.
- **Galería Dinámica:** Renderizado, creación y eliminación de tarjetas de lugares directamente conectados a un servidor.
- **Sistema de Likes:** Funcionalidad interactiva para dar o quitar "me gusta" a las publicaciones de la comunidad.
- **Validación Robusta de Formularios:** Implementación del método nativo `checkValidity()` integrado con el estado de React. Los botones de envío permanecen deshabilitados físicamente hasta que todos los campos requeridos cumplan con las restricciones del formulario.
- **Diseño Totalmente Flexible:** Interfaz adaptada para una excelente experiencia de usuario en dispositivos móviles, tabletas y computadoras de escritorio (Responsive Design).

---

## 🛠️ Tecnologías Utilizadas

- **React** (Hooks: `useState`, `useEffect`, `useContext`, `useRef`)
- **Vite** (Entorno de desarrollo rápido)
- **JavaScript (ES6+)**
- **HTML5 / CSS3** (Metodología BEM)
- **API REST** (Conexión asíncrona con Fetch)

---

## 📁 Estructura del Proyecto

El código está organizado siguiendo las mejores prácticas y requisitos estrictos de la arquitectura del ecosistema:

```text
src/
├── blocks/             # Estilos CSS organizados con metodología BEM
├── components/
│   ├── App.jsx         # Componente raíz (Estado global, lógica de popups y API)
│   ├── Header/
│   ├── Footer/
│   └── Main/
│       ├── Main.jsx    # Renderizado de perfil y sección de tarjetas
│       ├── Card/       # Componente individual de tarjeta
│       └── Popup/      # Gestión de ventanas emergentes
│           ├── Popup.jsx
│           ├── EditProfile.jsx
│           ├── EditAvatar.jsx
│           ├── NewCard.jsx
│           ├── RemoveCard.jsx
│           └── ImagePopup.jsx
├── contexts/
│   └── CurrentUserContext.js  # Contexto global para los datos del usuario suscrito
├── images/             # Activos gráficos estáticos
├── utils/              # Configuración de la clase API
├── index.css
└── main.jsx

Conceptos Clave Implementados
Contexto Global (CurrentUserContext): Evita el prop drilling compartiendo los datos del usuario logueado (name, about, avatar) con todos los componentes suscritos mediante un Provider centralizado en App.jsx.

Levantamiento de Estado (State Lifting): La lógica de las tarjetas, los popups activos y las peticiones de la API se manejan en el componente raíz (App), permitiendo un flujo de datos unidireccional y predecible hacia los componentes hijos.

Control del DOM Eficiente (useRef): Utilizado de manera óptima para capturar datos directamente del DOM sin re-renderizados innecesarios en componentes específicos como la edición del avatar.

Ciclo de Vida de la API: Las peticiones iniciales de datos del usuario y tarjetas se ejecutan estrictamente una sola vez durante la fase de montaje de la aplicación mediante useEffect.
```
