const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			textColor: {
				skin: {
					base: 'var(--color-text-base)',
					muted: 'var(--color-text-muted)',
					inverted: 'var(--color-text-inverted)'
				}
			},
			backgroundColor: {
				skin: {
					fill: 'var(--color-fill)',
					'button-accent': 'var(--color-button-accent)',
					'button-accent-hover': 'var(--color-button-accent-hover)',
					'button-muted': 'rgba(var(--color-button-muted) / <alpha-value>)'
				}
			},
			gradientColorStops: {
				skin: {
					hue: 'var(--color-fill)'
				}
			},
			maxWidth: {
				'8xl': '1920px'
			},
			colors: {
				'gray-1000': '#050505',
				gray: colors.neutral
			},
			boxShadow: {
				'outline-normal': '0 0 0 2px var(--accent-2)',
				magical:
					'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px'
			},
			lineHeight: {
				'extra-loose': '2.2'
			},
			scale: {
				120: '1.2'
			}
		}
	},
	plugins: []
};
