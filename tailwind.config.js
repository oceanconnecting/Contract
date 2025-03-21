/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
  	colors: {
  		transparent: 'transparent',
  		current: 'currentColor',
  		customGray: '#e7ecef',
  		white: '#ffffff',
  		black: '#000000',
  		'green-700': '#15803d',
  		'green-100': '#dcfce7',
  		'green-600': '#16a34a',
  		'green-500': '#22c55e',
		'green-200':'#90EE90',
  		purple: '#800080',

		  		'purple-500': '#8a3ffc',
		'purple-400': '#a779e9',
		'purple-300': '#d6bcfa',
		'purple-200': '#f3ebff',
		'purple-100': '#faf5ff',
		'purple-50': '#fcfcff',
		'purple-600': '#6d28d9',
  		blue: '#0075FF',
  		'blue-100': '#dbeafe',
  		blue100: '#93C5FD',
  		'blue-200': '#bfdbfe',
  		'blue-300': '#93c5fd',
  		'blue-400': '#60a5fa',
  		'blue-500': '#0075FF',
  		'blue-600': '#2563eb',
  		'blue-700': '#1d4ed8',
  		lightblue: '#DAEBFF',
  		babyblue: '#E2F3F9',
  		bluegray: '#7D82A1',
  		bluegrey: '#7C8F9E',
  		midblue: '#00276F',
  		bluebg: 'rgba(47, 184, 227, 0.2)',
  		navyblue: '#002834',
  		darkblue: '#000321',
  		midnightblue: '#183B56',
  		'gray-900': '#111827',
  		'gray-700': '#374151',
  		'gray-100': '#f3f4f6',
  		'gray-300': '#d1d5db',
  		'gray-400': '#9ca3af',
  		'gray-600': '#4b5563',
  		grey500: '#ECECEC',
  		darkgray: '#90A3B4',
  		lightgrey: '#AEC7E4',
  		'red-600': '#dc2626',
  		'red-500': '#ef4444',
  		'red-300': '#f87171',
  		'red-100': '#fee2e2',
  		'red-200': '#fecaca',
  		'red-400': '#f87171',
  		'red-700': '#b91c1c',
  		'red-800': '#991b1b',
  		'red-900': '#7f1d1d',
  		'purple-200': '#e9d5ff',
		'yellow-500': '#f59e0b',
		'yellow-400': '#fbbf24',	
		'yellow-300': '#fcd34d',
		'yellow-200': '#fde68a',
		'yellow-100': '#fff3c4',
		'yellow-50': '#fffbeb',
		'yellow-600': '#d97706',
		'yellow-700': '#b45309',
		'yellow-800': '#92400e',
		'rose-50': '#fff1f2',
		'rose-100': '#ffe4e6',
		'rose-200': '#fecdd3',
		'rose-300': '#fda4af',
		'rose-400': '#fb7185',
		'rose-500': '#f43f5e',
		'rose-600': '#e11d48',
		'rose-700': '#be123c',
		'rose-800': '#9f1239',
		'rose-900': '#881337',
		'rose-1000': '#570d31',
		'rose-1100': '#4c0924',
		'rose-1200': '#2f0624',
		'rose-1300': '#1e001f',
  		beach: '#8EA9C1',
  		offwhite: 'rgba(255, 255, 255, 0.75)',
  		circlebg: 'rgba(77, 213, 143, 0.25)',
  		bordertop: 'rgba(196, 196, 196, 0.5)',
  		border: 'rgba(128, 135, 137, 0.35)'
  	},
  	fontSize: {
  		xs: [
  			'0.75rem',
  			{
  				lineHeight: '1rem'
  			}
  		],
  		sm: [
  			'0.875rem',
  			{
  				lineHeight: '1.25rem'
  			}
  		],
  		base: [
  			'1rem',
  			{
  				lineHeight: '1.5rem'
  			}
  		],
  		lg: [
  			'1.125rem',
  			{
  				lineHeight: '1.75rem'
  			}
  		],
  		xl: [
  			'1.25rem',
  			{
  				lineHeight: '1.75rem'
  			}
  		],
  		'2xl': [
  			'1.5rem',
  			{
  				lineHeight: '2rem'
  			}
  		],
  		'3xl': [
  			'1.875rem',
  			{
  				lineHeight: '2.25rem'
  			}
  		],
  		'4xl': [
  			'2.25rem',
  			{
  				lineHeight: '2.5rem'
  			}
  		],
  		'5xl': [
  			'3rem',
  			{
  				lineHeight: '1'
  			}
  		],
  		'6xl': [
  			'3.75rem',
  			{
  				lineHeight: '1'
  			}
  		],
  		'7xl': [
  			'4.5rem',
  			{
  				lineHeight: '1'
  			}
  		],
  		'8xl': [
  			'6rem',
  			{
  				lineHeight: '1'
  			}
  		],
  		'9xl': [
  			'8rem',
  			{
  				lineHeight: '1'
  			}
  		],
  		'65xl': [
  			'65px',
  			{
  				lineHeight: '1'
  			}
  		],
  		'80xl': [
  			'80px',
  			{
  				lineHeight: '6rem'
  			}
  		]
  	},
  	extend: {
		keyframes: {
			"accordion-down": {
			  from: { height: "0" },
			  to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
			  from: { height: "var(--radix-accordion-content-height)" },
			  to: { height: "0" },
			},
		  },
		  animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
