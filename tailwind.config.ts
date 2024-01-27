import type { Config } from 'tailwindcss'
import Logo from "@/components/MainNavigation/assets/Desktop - 2.svg"

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('@/components/MainNavigation/assets/Desktop - 2.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true
      },
      colors:{
        'buttons-purple': '#5e3aee',
        'buttons-pink': '#be33ff',
        'card': '#13131A',
        'grow': '#BC8CFF'
      }, 
      rotate: {
        '17': '17deg',
        '22': '-22.96deg'
      }
    },
  },
  plugins: [],
}
export default config
