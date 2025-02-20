import type React from 'react';
import { useEffect, useRef, useCallback } from 'react';
import './NBodySimulation.css';

interface Body {
  x: number;
  y: number;
  vx: number;
  vy: number;
  mass: number;
}

const NBodySimulation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const bodiesRef = useRef<Body[]>([]);

  const createBodies = useCallback(() => {
    // Add three bodies in the center
    for (let i = 0; i < 1; i++) {
      const body: Body = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        mass: i * i,
      };
      bodiesRef.current.push(body);
    }
  }, []);

  const animate = useCallback(() => {
    const ctx = contextRef.current;
    if (ctx) {
      // Clear the canvas
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // Update positions and handle bouncing
      bodiesRef.current.forEach(body => {
        body.x += body.vx;
        body.y += body.vy;

        // Right and left wall bouncing
        if (body.x > ctx.canvas.width || body.x < 0) {
          body.vx *= -1;
        }

        // Top and bottom wall bouncing
        if (body.y > ctx.canvas.height || body.y < 0) {
          body.vy *= -1;
        }
      });

      // Draw bodies
      ctx.fillStyle = '#51c8cc';
      bodiesRef.current.forEach(body => {
        ctx.beginPath();
        ctx.arc(body.x, body.y, 10, 0, 2 * Math.PI);
        ctx.fill();
      });

      // Request the next animation frame
      requestAnimationFrame(animate);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        contextRef.current = ctx;
        createBodies();
        requestAnimationFrame(animate);
      }
    }
  }, [createBodies, animate]);

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        className="n-body-simulation" // Apply the CSS class here
        width={window.innerWidth} // Adjust the canvas size to the full window
        height={window.innerHeight}
      />
    </div>
  );
};

export default NBodySimulation;
