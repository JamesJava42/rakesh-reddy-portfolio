import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'
import { tmpdir } from 'os'

// Move Vite cache outside OneDrive to avoid EPERM errors on Windows
export default defineConfig({
  plugins: [react()],
  cacheDir: join(tmpdir(), 'vite-portfolio-cache'),
})
