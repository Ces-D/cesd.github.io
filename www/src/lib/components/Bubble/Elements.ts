import { randomInteger, range } from 'remeda';
import { animate, transform } from 'motion';
import type { Theme } from '$lib/types';
import { getCurrentTheme } from '$lib/utils';

const TRANSITION_STEPS = 120;
const START_COLORS: Record<Theme, string> = {
  light: '#1b1a1c',
  dark: '#eeedf9',
  orange: '#581c0e',
};
const END_COLORS: Record<Theme, string> = {
  light: '#d41a0d',
  dark: '#f7776e',
  orange: '#8a0a01',
};

export type CircleOptions = {
  x: number;
  y: number;
  radius: number;
  fillTransition: number;
  fillStartColor: string;
  fillEndColor: string;
  stroke?: { width: number; startColor: string };
  opacity?: number;
};
export class Circle {
  public opts: CircleOptions;

  constructor(opts: CircleOptions) {
    this.opts = opts;
  }

  private colorTransformer = () => {
    return transform([0, TRANSITION_STEPS], [this.opts.fillStartColor, this.opts.fillEndColor]);
  };

  public draw = (context: CanvasRenderingContext2D) => {
    context.globalAlpha = this.opts.opacity || 1;
    context.beginPath();
    context.arc(this.opts.x, this.opts.y, this.opts.radius, 0, 2 * Math.PI, false);
    const transformer = this.colorTransformer();
    context.fillStyle = transformer(this.opts.fillTransition);
    context.fill();
    if (this.opts.stroke) {
      context.strokeStyle = this.opts.stroke.startColor;
      context.lineWidth = this.opts.stroke.width;
      context.stroke();
    }
    context.closePath();
    context.globalAlpha = 1;
  };
}

type ExplosionOptions = {
  x: number;
  y: number;
  canvasWidth: number;
};
export class Explosion {
  private PARTICLES = 30;
  private explosionSize: number;
  private startColor: string;
  private endColor: string;
  private _context: CanvasRenderingContext2D;
  boom: CircleOptions;
  particles: CircleOptions[] = [];

  constructor(opts: ExplosionOptions, context: CanvasRenderingContext2D) {
    const { currentTheme } = getCurrentTheme();
    this.startColor = START_COLORS[currentTheme];
    this.endColor = END_COLORS[currentTheme];
    this._context = context;
    this.explosionSize = Math.min(200, opts.canvasWidth * 0.4);
    this.boom = {
      x: opts.x,
      y: opts.y,
      radius: 0,
      fillTransition: 0,
      fillStartColor: this.startColor,
      fillEndColor: this.endColor,
      stroke: { width: 1, startColor: this.startColor },
      opacity: 1,
    };
    range(0, this.PARTICLES).forEach(() => {
      this.particles.push({
        x: opts.x,
        y: opts.y,
        radius: Number(randomInteger(24, 48)),
        fillTransition: 0,
        fillStartColor: this.startColor,
        fillEndColor: this.endColor,
      });
    });
  }

  public boomAnimation = () => {
    return animate(
      this.boom,
      {
        opacity: 0,
        radius: this.explosionSize,
        fillTransition: TRANSITION_STEPS,
      },
      {
        ease: 'easeOut',
        onUpdate: () => {
          this._context.clearRect(
            this.boom.x - (this.explosionSize * Math.PI) / 2,
            this.boom.y - (this.explosionSize * Math.PI) / 2,
            this.explosionSize * Math.PI * 2,
            this.explosionSize * Math.PI * 2
          );
          const circle = new Circle(this.boom);
          circle.draw(this._context);
        },
      }
    );
  };

  public particleAnimations = () => {
    return this.particles.map((particle) =>
      animate(
        particle,
        {
          x: particle.x + randomInteger(-this.explosionSize, this.explosionSize),
          y: particle.y + randomInteger(-this.explosionSize * 1.15, this.explosionSize),
          radius: 0,
          fillTransition: TRANSITION_STEPS,
        },
        {
          ease: 'easeOut',
          onUpdate: () => {
            const circle = new Circle(particle);
            circle.draw(this._context);
          },
        }
      )
    );
  };
}
