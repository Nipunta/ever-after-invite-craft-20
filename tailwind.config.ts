import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.95)', opacity: '0' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-out-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'slide-in-up': {
					'0%': { 
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'slide-in-top': {
					'0%': { 
						transform: 'translateY(-100%)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'bounce-in': {
					'0%': {
						transform: 'scale(0.3)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.05)'
					},
					'70%': {
						transform: 'scale(0.9)'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'float-in': {
					'0%': {
						transform: 'translateY(60px) scale(0.9)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0) scale(1)',
						opacity: '1'
					}
				},
				'zoom-in': {
					'0%': {
						transform: 'scale(0.5)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(244, 63, 94, 0.4)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(244, 63, 94, 0.8)'
					}
				},
				'typewriter': {
					'0%': {
						width: '0'
					},
					'100%': {
						width: '100%'
					}
				},
				'shimmer-text': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'elegant-fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'luxury-float': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px) rotateX(10deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) rotateX(0deg)'
					}
				},
				'luxury-rise': {
					'0%': {
						opacity: '0',
						transform: 'translateY(50px) scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'luxury-glow': {
					'0%, 100%': {
						boxShadow: '0 0 30px rgba(244, 63, 94, 0.3), 0 0 60px rgba(236, 72, 153, 0.2)'
					},
					'50%': {
						boxShadow: '0 0 50px rgba(244, 63, 94, 0.6), 0 0 80px rgba(236, 72, 153, 0.4)'
					}
				},
				'photo-reveal': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8) rotateY(20deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) rotateY(0deg)'
					}
				},
				'floating-heart': {
					'0%, 100%': {
						transform: 'translateY(0) rotate(0deg)'
					},
					'25%': {
						transform: 'translateY(-10px) rotate(5deg)'
					},
					'75%': {
						transform: 'translateY(-5px) rotate(-5deg)'
					}
				},
				'orbit': {
					'0%': {
						transform: 'rotate(0deg) translateX(20px) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateX(20px) rotate(-360deg)'
					}
				},
				'orbit-reverse': {
					'0%': {
						transform: 'rotate(0deg) translateX(15px) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(-360deg) translateX(15px) rotate(360deg)'
					}
				},
				'float-particle': {
					'0%, 100%': {
						transform: 'translateY(0) translateX(0) scale(1)',
						opacity: '0.3'
					},
					'33%': {
						transform: 'translateY(-20px) translateX(10px) scale(1.2)',
						opacity: '0.6'
					},
					'66%': {
						transform: 'translateY(-10px) translateX(-5px) scale(0.8)',
						opacity: '0.4'
					}
				},
				'float-particle-delayed': {
					'0%, 100%': {
						transform: 'translateY(0) translateX(0) scale(1)',
						opacity: '0.4'
					},
					'50%': {
						transform: 'translateY(-30px) translateX(-15px) scale(1.3)',
						opacity: '0.7'
					}
				},
				'gentle-float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'luxury-entrance': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9) translateY(50px) rotateX(10deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0) rotateX(0deg)'
					}
				},
				'elegant-reveal': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'typewriter-luxury': {
					'0%': {
						width: '0',
						opacity: '0'
					},
					'50%': {
						opacity: '1'
					},
					'100%': {
						width: '100%',
						opacity: '1'
					}
				},
				'slow-spin': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'slow-spin-reverse': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(-360deg)'
					}
				},
				'stagger-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'card-hover': {
					'0%': {
						transform: 'scale(1) rotateY(0deg)'
					},
					'100%': {
						transform: 'scale(1.02) rotateY(2deg)'
					}
				},
				'expand-line': {
					'0%': {
						width: '0',
						opacity: '0'
					},
					'100%': {
						width: '100%',
						opacity: '1'
					}
				},
				'glass-morph': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95) translateZ(0)',
						backdropFilter: 'blur(0px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateZ(0)',
						backdropFilter: 'blur(20px)'
					}
				},
				'elegant-entrance': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px) rotateX(15deg) scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) rotateX(0deg) scale(1)'
					}
				},
				'luxury-title': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px) scale(0.8)',
						letterSpacing: '10px'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)',
						letterSpacing: 'normal'
					}
				},
				'photo-cascade': {
					'0%': {
						opacity: '0',
						transform: 'translateY(60px) rotateX(20deg) scale(0.8)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) rotateX(0deg) scale(1)'
					}
				},
				'shimmer': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				},
				'corner-glow': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.5)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'modal-entrance': {
					'0%': {
						opacity: '0',
						backdropFilter: 'blur(0px)'
					},
					'100%': {
						opacity: '1',
						backdropFilter: 'blur(20px)'
					}
				},
				'modal-content': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8) translateY(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					}
				},
				'floating-close': {
					'0%, 100%': {
						transform: 'rotate(0deg) scale(1)'
					},
					'50%': {
						transform: 'rotate(180deg) scale(1.1)'
					}
				},
				'floating-icon': {
					'0%, 100%': {
						transform: 'translateY(0) rotate(0deg)'
					},
					'25%': {
						transform: 'translateY(-10px) rotate(5deg)'
					},
					'75%': {
						transform: 'translateY(-5px) rotate(-5deg)'
					}
				},
				'card-slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-50px) rotateY(20deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0) rotateY(0deg)'
					}
				},
				'gentle-pulse': {
					'0%, 100%': {
						opacity: '0.3',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.6',
						transform: 'scale(1.2)'
					}
				},
				'heartbeat': {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'25%': {
						transform: 'scale(1.1)'
					},
					'50%': {
						transform: 'scale(1.2)'
					},
					'75%': {
						transform: 'scale(1.1)'
					}
				},
				'count-up': {
					'0%': {
						transform: 'scale(0) rotate(180deg)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.2) rotate(0deg)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'scale(1) rotate(0deg)',
						opacity: '1'
					}
				},
				'pulse-luxury': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(244, 63, 94, 0.2)',
						transform: 'scale(1)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(244, 63, 94, 0.4)',
						transform: 'scale(1.02)'
					}
				},
				// New animations for floating circles
				'float-down': {
					'0%': {
						transform: 'translateY(-100vh) scale(0)',
						opacity: '0'
					},
					'10%': {
						opacity: '1',
						transform: 'translateY(-90vh) scale(1)'
					},
					'90%': {
						opacity: '1',
						transform: 'translateY(90vh) scale(1)'
					},
					'100%': {
						transform: 'translateY(100vh) scale(0)',
						opacity: '0'
					}
				},
				'cursor-trail': {
					'0%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(2)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'scale-out': 'scale-out 0.2s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'slide-in-left': 'slide-in-left 0.8s ease-out',
				'slide-out-right': 'slide-out-right 0.3s ease-out',
				'slide-in-up': 'slide-in-up 0.6s ease-out',
				'slide-in-top': 'slide-in-top 0.5s ease-out',
				'bounce-in': 'bounce-in 0.8s ease-out',
				'float-in': 'float-in 0.8s ease-out',
				'zoom-in': 'zoom-in 0.4s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'typewriter': 'typewriter 3s steps(40, end)',
				'shimmer-text': 'shimmer-text 3s infinite linear',
				'elegant-fade-in': 'elegant-fade-in 0.8s ease-out',
				'luxury-float': 'luxury-float 1s ease-out',
				'luxury-rise': 'luxury-rise 0.8s ease-out',
				'luxury-glow': 'luxury-glow 3s infinite',
				'photo-reveal': 'photo-reveal 0.8s ease-out',
				'floating-heart': 'floating-heart 3s infinite ease-in-out',
				'orbit': 'orbit 8s linear infinite',
				'orbit-reverse': 'orbit-reverse 6s linear infinite',
				'float-particle': 'float-particle 4s infinite ease-in-out',
				'float-particle-delayed': 'float-particle-delayed 5s infinite ease-in-out',
				'gentle-float': 'gentle-float 6s infinite ease-in-out',
				'luxury-entrance': 'luxury-entrance 1s ease-out',
				'elegant-reveal': 'elegant-reveal 0.8s ease-out',
				'typewriter-luxury': 'typewriter-luxury 2s steps(30, end)',
				'slow-spin': 'slow-spin 20s linear infinite',
				'slow-spin-reverse': 'slow-spin-reverse 15s linear infinite',
				'stagger-in': 'stagger-in 0.6s ease-out',
				'card-hover': 'card-hover 0.3s ease-out',
				'expand-line': 'expand-line 0.8s ease-out',
				'glass-morph': 'glass-morph 0.8s ease-out',
				'elegant-entrance': 'elegant-entrance 1.2s ease-out',
				'luxury-title': 'luxury-title 1s ease-out',
				'photo-cascade': 'photo-cascade 0.8s ease-out',
				'shimmer': 'shimmer 2s infinite',
				'corner-glow': 'corner-glow 0.5s ease-out',
				'modal-entrance': 'modal-entrance 0.4s ease-out',
				'modal-content': 'modal-content 0.5s ease-out',
				'floating-close': 'floating-close 2s infinite ease-in-out',
				'floating-icon': 'floating-icon 3s infinite ease-in-out',
				'card-slide-in': 'card-slide-in 0.8s ease-out',
				'gentle-pulse': 'gentle-pulse 3s infinite ease-in-out',
				'heartbeat': 'heartbeat 1.5s infinite ease-in-out',
				'count-up': 'count-up 0.8s ease-out',
				'pulse-luxury': 'pulse-luxury 2s infinite ease-in-out',
				// New animations
				'float-down': 'float-down linear infinite',
				'cursor-trail': 'cursor-trail 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
