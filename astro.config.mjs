import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  output: "server" // aqui tendriamos el server y podriamos controlar 
  // tambien las rutas
  // output: "hybrid"
  // En el Hybrid podemos elegir que una ruta sea server y las demas
  // se mantendran estaticas
  // export const prerender = false ==> SERVER
});