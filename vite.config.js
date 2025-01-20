import vue from '@vitejs/plugin-vue'
import ssr from 'vike/plugin'

export default {
  cacheDir: '.vite',
  plugins: [vue(), ssr()],
}
