/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Colores de marca Munitrip
        'brand-dark-muted': '#1c233a', // Azul muy oscuro (footer, header)
        'brand-dark': '#1d3557', // Azul principal
        'brand-dark-hover': '#2b3554', // Variante hover del azul
        'text-title': '#1c2120', // Negro/texto oscuro
        'text-paragraph': '#4a5567', // Gris para párrafos
        'text-secondary': '#4d5670', // Gris secundario (subtítulos)
        'bg-general': '#f5f5f5', // Fondo gris claro
        'bg-light': '#f0f0f0', // Gris más claro
        'bg-card': '#ffffff', // Blanco
        'border-light': '#d1dbe8', // Borde claro
        'tag-green': '#2e7d32', // Verde para tags
        accent: '#00aabb', // Color acento
      },
    },
  },
  plugins: [],
};
