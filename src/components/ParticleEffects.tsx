
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  type: 'star' | 'sparkle' | 'petal';
}

interface ParticleEffectsProps {
  theme?: 'romantic' | 'elegant' | 'luxury';
  density?: number;
  className?: string;
}

const ParticleEffects = ({ theme = 'romantic', density = 30, className = '' }: ParticleEffectsProps) => {
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
      const types: Particle['type'][] = theme === 'romantic' 
        ? ['petal', 'sparkle'] 
        : theme === 'elegant' 
        ? ['star', 'sparkle'] 
        : ['star', 'sparkle', 'petal'];

      return {
        x: Math.random() * canvas.width,
        y: -10,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        type: types[Math.floor(Math.random() * types.length)]
      };
    };

    const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);
      
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
      gradient.addColorStop(0, 'rgba(255, 215, 0, 0.8)');
      gradient.addColorStop(0.5, 'rgba(255, 192, 203, 0.6)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.2)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 144 * Math.PI) / 180;
        const outerRadius = size;
        const innerRadius = size * 0.4;
        
        if (i === 0) ctx.moveTo(outerRadius, 0);
        else ctx.lineTo(Math.cos(angle) * outerRadius, Math.sin(angle) * outerRadius);
        
        const innerAngle = ((i + 0.5) * 144 * Math.PI) / 180;
        ctx.lineTo(Math.cos(innerAngle) * innerRadius, Math.sin(innerAngle) * innerRadius);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const drawSparkle = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);
      
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      gradient.addColorStop(0.5, 'rgba(244, 63, 94, 0.6)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-size, 0);
      ctx.lineTo(size, 0);
      ctx.moveTo(0, -size);
      ctx.lineTo(0, size);
      ctx.moveTo(-size * 0.7, -size * 0.7);
      ctx.lineTo(size * 0.7, size * 0.7);
      ctx.moveTo(-size * 0.7, size * 0.7);
      ctx.lineTo(size * 0.7, -size * 0.7);
      ctx.stroke();
      ctx.restore();
    };

    const drawPetal = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);
      
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
      gradient.addColorStop(0, 'rgba(255, 192, 203, 0.8)');
      gradient.addColorStop(0.5, 'rgba(244, 63, 94, 0.6)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.2)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.6, size, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawParticle = (particle: Particle) => {
      ctx.globalAlpha = particle.opacity;
      
      switch (particle.type) {
        case 'star':
          drawStar(ctx, particle.x, particle.y, particle.size, particle.rotation);
          break;
        case 'sparkle':
          drawSparkle(ctx, particle.x, particle.y, particle.size, particle.rotation);
          break;
        case 'petal':
          drawPetal(ctx, particle.x, particle.y, particle.size, particle.rotation);
          break;
      }
      
      ctx.globalAlpha = 1;
    };

    const updateParticle = (particle: Particle) => {
      particle.y += particle.speed;
      particle.x += Math.sin(particle.y * 0.01) * 0.5;
      particle.rotation += particle.rotationSpeed;
      
      if (particle.y > canvas.height + 10) {
        particle.y = -10;
        particle.x = Math.random() * canvas.width;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Maintain particle count
      while (particlesRef.current.length < density) {
        particlesRef.current.push(createParticle());
      }
      
      particlesRef.current.forEach(particle => {
        updateParticle(particle);
        drawParticle(particle);
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
  }, [theme, density]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-10 ${className}`}
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleEffects;
