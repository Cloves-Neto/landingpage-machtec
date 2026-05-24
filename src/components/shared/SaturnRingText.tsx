import { useEffect, useRef } from 'react';

const TEXT = 'PODEMOS FAZER  ·  CONSERTAMOS  ·  GARANTIA TOTAL  ·  TÉCNICOS EXPERTS  ·  RÁPIDO E SEGURO  ·  ';

interface Props {
  width: number;
  height: number;
  radius?: number;
}

export function SaturnRingText({ width, height, radius = 230 }: Props) {
  const canvasBackRef = useRef<HTMLCanvasElement>(null);
  const canvasFrontRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const angleRef = useRef(0);

  useEffect(() => {
    if (!width || !height) return;

    // -45° diagonal tilt: ring axis goes from bottom-right (front) to top-left (back)
    const TILT   = Math.PI / 3.2;   // ~56° tilt on X — controls how "flat" the ring looks
    const ROT_Z  = -Math.PI / 4;    // -45° rotation around Z — makes it diagonal
    const FOCAL  = 520;             // perspective focal length
    const SPEED  = 0.007;           // rotation speed

    const chars = TEXT.split('');
    const total = chars.length;
    const cx    = width  / 2;
    const cy    = height / 2;

    const cos45 = Math.cos(ROT_Z);
    const sin45 = Math.sin(ROT_Z);
    const cosTilt = Math.cos(TILT);
    const sinTilt = Math.sin(TILT);

    const project = (theta: number) => {
      // 1. Point on horizontal ring (XZ plane)
      const x0 = radius * Math.cos(theta);
      const z0 = radius * Math.sin(theta);

      // 2. Tilt around X axis
      const y1 = -z0 * sinTilt;
      const z1 =  z0 * cosTilt;
      const x1 = x0;

      // 3. Rotate around Z axis by -45°
      const x2 = x1 * cos45 - y1 * sin45;
      const y2 = x1 * sin45 + y1 * cos45;
      const z2 = z1;

      // 4. Perspective projection
      const scale   = FOCAL / (FOCAL + z2 * 0.6);
      const screenX = cx + x2 * scale;
      const screenY = cy + y2 * scale;

      return { screenX, screenY, scale, z2 };
    };

    const drawFrame = () => {
      const back  = canvasBackRef.current;
      const front = canvasFrontRef.current;
      if (!back || !front) return;

      const ctxBack  = back.getContext('2d')!;
      const ctxFront = front.getContext('2d')!;

      ctxBack.clearRect(0, 0, width, height);
      ctxFront.clearRect(0, 0, width, height);

      const angle = angleRef.current;

      chars.forEach((char, i) => {
        const theta     = (i / total) * Math.PI * 2 + angle;
        const thetaNext = theta + (Math.PI * 2) / total;

        const { screenX, screenY, scale, z2 } = project(theta);
        const { screenX: nx, screenY: ny }     = project(thetaNext);

        const charAngle = Math.atan2(ny - screenY, nx - screenX);
        const fontSize  = Math.max(7, Math.round(18 * scale));

        // z2 > 0 → behind image; z2 <= 0 → in front
        const isBehind = z2 > 0;
        const ctx      = isBehind ? ctxBack : ctxFront;
        const alpha    = isBehind ? 0.28 : 0.85;

        ctx.save();
        ctx.translate(screenX, screenY);
        ctx.rotate(charAngle);
        ctx.font = `900 ${fontSize}px Inter, sans-serif`;
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowBlur   = 0;
        ctx.fillStyle    = `rgba(255,255,255,${alpha})`;
        ctx.fillText(char, 0, 0);
        ctx.restore();
      });

      angleRef.current += SPEED;
      rafRef.current    = requestAnimationFrame(drawFrame);
    };

    rafRef.current = requestAnimationFrame(drawFrame);
    return () => cancelAnimationFrame(rafRef.current);
  }, [width, height, radius]);

  return (
    <>
      {/* Back layer — rendered below image */}
      <canvas
        ref={canvasBackRef}
        width={width}
        height={height}
        className="absolute inset-0 pointer-events-none top-40"
        style={{ zIndex: 0 }}
      />
      {/* Front layer — rendered above image */}
      <canvas
        ref={canvasFrontRef}
        width={width}
        height={height}
        className="absolute inset-0 pointer-events-none top-40"
        style={{ zIndex: 20 }}
      />
    </>
  );
}
