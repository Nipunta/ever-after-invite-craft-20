import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  swayOffset: number;
  swaySpeed: number;
}

interface ParticleEffectsProps {
  theme?: 'romantic' | 'elegant' | 'luxury';
  density?: number;
  className?: string;
}

const ParticleEffects = ({ theme = 'romantic', density = 25, className = '' }: ParticleEffectsProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: -20,
        size: Math.random() * 3 + 2, // Smaller petals
        speed: Math.random() * 0.8 + 0.3, // Much slower falling speed
        opacity: Math.random() * 0.7 + 0.3,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5, // Slower rotation
        swayOffset: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.01 // Gentle swaying
      };
    };

    const drawRosePetal = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, opacity: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.globalAlpha = opacity;
      
      // Create pink rose petal gradient
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
      gradient.addColorStop(0, 'rgba(255, 182, 193, 0.9)'); // Light pink center
      gradient.addColorStop(0.3, 'rgba(255, 105, 180, 0.8)'); // Hot pink
      gradient.addColorStop(0.7, 'rgba(219, 112, 147, 0.7)'); // Pale violet red
      gradient.addColorStop(1, 'rgba(199, 21, 133, 0.5)'); // Medium violet red edge
      
      ctx.fillStyle = gradient;
      
      // Draw petal shape (more realistic rose petal)
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.bezierCurveTo(size * 0.8, -size * 0.6, size * 0.8, size * 0.6, 0, size);
      ctx.bezierCurveTo(-size * 0.8, size * 0.6, -size * 0.8, -size * 0.6, 0, -size);
      ctx.fill();
      
      // Add subtle petal veins
      ctx.strokeStyle = 'rgba(139, 69, 19, 0.2)'; // Brown veins
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.8);
      ctx.lineTo(0, size * 0.8);
      ctx.moveTo(-size * 0.3, -size * 0.3);
      ctx.lineTo(0, size * 0.3);
      ctx.moveTo(size * 0.3, -size * 0.3);
      ctx.lineTo(0, size * 0.3);
      ctx.stroke();
      
      ctx.restore();
    };

    const updateParticle = (particle: Particle) => {
      particle.y += particle.speed;
      particle.swayOffset += particle.swaySpeed;
      particle.x += Math.sin(particle.swayOffset) * 0.8; // Gentle swaying motion
      particle.rotation += particle.rotationSpeed;
      
      // Reset particle when it goes off screen
      if (particle.y > canvas.height + 20) {
        particle.y = -20;
        particle.x = Math.random() * canvas.width;
      }
      
      // Keep particles within horizontal bounds
      if (particle.x < -20) particle.x = canvas.width + 20;
      if (particle.x > canvas.width + 20) particle.x = -20;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Maintain particle count
      while (particlesRef.current.length < density) {
        particlesRef.current.push(createParticle());
      }
      
      particlesRef.current.forEach(particle => {
        updateParticle(particle);
        drawRosePetal(ctx, particle.x, particle.y, particle.size, particle.rotation, particle.opacity);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      resizeCanvas();
      animate();

      window.addEventListener('resize', resizeCanvas);

      return () => {
        window.removeEventListener('resize', resizeCanvas);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-10 ${className}`}
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleEffects;
