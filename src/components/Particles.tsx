
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);

  const createParticles = (count: number) => {
    const newParticles: Particle[] = [];
    const canvas = canvasRef.current;
    
    if (!canvas) return [];
    
    for (let i = 0; i < count; i++) {
      newParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
    
    return newParticles;
  };

  const updateParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    particles.current.forEach((particle, index) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Reset particles that go off screen
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.x = Math.random() * canvas.width;
      }
      
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.y = Math.random() * canvas.height;
      }
    });
  };

  const drawParticles = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (!canvas || !ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw particles
    particles.current.forEach((particle) => {
      ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Connect particles with lines if they are close enough
    for (let i = 0; i < particles.current.length; i++) {
      for (let j = i + 1; j < particles.current.length; j++) {
        const dx = particles.current[i].x - particles.current[j].x;
        const dy = particles.current[i].y - particles.current[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles.current[i].x, particles.current[i].y);
          ctx.lineTo(particles.current[j].x, particles.current[j].y);
          ctx.stroke();
        }
      }
    }
  };

  const animate = () => {
    updateParticles();
    drawParticles();
    
    animationFrameId.current = requestAnimationFrame(animate);
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recreate particles for the new size
      particles.current = createParticles(50);
    }
  };

  useEffect(() => {
    // Setup canvas size
    resizeCanvas();
    
    // Setup particles
    particles.current = createParticles(50);
    
    // Start animation
    animate();
    
    // Handle resize
    window.addEventListener('resize', resizeCanvas);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default Particles;
