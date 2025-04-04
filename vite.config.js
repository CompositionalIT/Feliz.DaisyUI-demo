import { defineConfig } from 'vite';
import fable from 'vite-plugin-fable';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'


// https://nojaf.com/vite-plugin-fable/recipes.html#Using-React
// https://nojaf.com/vite-plugin-fable/recipes.html#Fable-Core-JSX

export default defineConfig({
  // order of plugins matters, fable needs to be first
  plugins: [
    tailwindcss(),
    fable({
      fsproj: "./src/App.fsproj",
      jsx: 'automatic'
    }),
    react({
      include: /\.(fs|js|jsx|ts|tsx)$/,
      jsxRuntime: "classic"
    })
  ],
  base: "/Feliz.DaisyUI-demo/",
  root: "./src",
  build: {
    outDir: "../dist",
    sourcemap: 'inline'
  },
  define: {
    // required if u have: `process is undefined` 
    // while loading react jsoncomponents
    'process.env': {}
  },
})
