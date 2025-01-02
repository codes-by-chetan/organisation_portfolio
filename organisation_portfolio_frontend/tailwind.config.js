/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    darkMode: 'class', 
    theme: {
      extend: {
        colors: {
          destructive: 'hsl(var(--destructive))',
          'destructive-foreground': 'hsl(var(--destructive-foreground))',
        }
      }
    
    },
    plugins: [],
  }
  
  