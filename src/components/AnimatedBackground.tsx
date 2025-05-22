import React, { useEffect, useRef } from 'react';

interface Shape {
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  type: 'circle' | 'square' | 'triangle';
  opacity: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapesRef = useRef<Shape[]>([]);
  const parallaxRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to full window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize shapes
    const initShapes = () => {
      const shapeCount = Math.max(5, Math.floor(window.innerWidth / 200)); // Responsive shape count
      const shapes: Shape[] = [];
      
      const colors = ['#9b87f5', '#7E69AB', '#0EA5E9', '#1EAEDB', '#8B5CF6'];
      
      for (let i = 0; i < shapeCount; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 30 + 20,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
          opacity: Math.random() * 0.4 + 0.1
        });
      }
      shapesRef.current = shapes;
    };

    // Draw shapes
    const drawShape = (shape: Shape) => {
      if (!ctx) return;
      
      ctx.globalAlpha = shape.opacity;
      ctx.fillStyle = shape.color;
      ctx.shadowBlur = shape.size / 2;
      ctx.shadowColor = shape.color;
      
      switch (shape.type) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(shape.x, shape.y, shape.size / 2, 0, Math.PI * 2);
          ctx.fill();
          break;
        
        case 'square':
          ctx.beginPath();
          ctx.fillRect(shape.x - shape.size / 2, shape.y - shape.size / 2, shape.size, shape.size);
          break;
        
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(shape.x, shape.y - shape.size / 2);
          ctx.lineTo(shape.x + shape.size / 2, shape.y + shape.size / 2);
          ctx.lineTo(shape.x - shape.size / 2, shape.y + shape.size / 2);
          ctx.closePath();
          ctx.fill();
          break;
      }
      
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw shapes
      shapesRef.current.forEach(shape => {
        // Apply parallax effect
        const parallaxX = parallaxRef.current.x * (shape.size / 50);
        const parallaxY = parallaxRef.current.y * (shape.size / 50);
        
        // Update position
        shape.x += shape.vx + parallaxX * 0.01;
        shape.y += shape.vy + parallaxY * 0.01;
        
        // Bounce off edges
        if (shape.x < 0 || shape.x > canvas.width) shape.vx *= -1;
        if (shape.y < 0 || shape.y > canvas.height) shape.vy *= -1;
        
        // Keep shapes in bounds
        shape.x = Math.max(0, Math.min(canvas.width, shape.x));
        shape.y = Math.max(0, Math.min(canvas.height, shape.y));
        
        // Draw shape
        drawShape(shape);
      });
      
      requestAnimationFrame(animate);
    };

    // Handle scroll for parallax
    const handleScroll = () => {
      const scrollY = window.scrollY;
      parallaxRef.current.y = scrollY * 0.1;
    };

    // Handle mouse movement for subtle interactivity
    const handleMouseMove = (e: MouseEvent) => {
      parallaxRef.current.x = (e.clientX - window.innerWidth / 2) * 0.05;
    };

    // Initialize
    resizeCanvas();
    initShapes();
    animate();

    // Event listeners
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('resize', initShapes);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', initShapes);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default AnimatedBackground;
