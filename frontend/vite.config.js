import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Vite configuration file
export default defineConfig({
  // Plugins used in the project
  plugins: [react()],
})