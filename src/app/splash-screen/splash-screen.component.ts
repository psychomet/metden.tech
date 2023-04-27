import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'metden-tech-splash-screen',
  standalone: true,
  imports: [],
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements OnInit {
  ngOnInit() {
    const tl = (gsap.timeline({ defaults: { ease: 'expo' } }) as any)
      .set('svg', { opacity: 1 })
      .from('.rect1', { opacity: 0, duration: 0.01 }, 0.45)
      .from(
        '.rect1',
        { scale: 0.8, transformOrigin: '50%', duration: 0.55 },
        0.45
      )
      .from('.txt1', { y: 99, duration: 0.2 }, 0.5)
      .to('.txt1', { opacity: 0, duration: 0.05 }, 1)
      .from('.rect2', { opacity: 0, duration: 0.01 }, 1)
      .from('.rect2', { scale: 0.8, transformOrigin: '50%' }, 1)
      .from(
        '.txt2',
        { y: 99, duration: 0.12, ease: 'expo', ['duration' as never]: 0.5 },
        1
      )
      .to('.txt2', { opacity: 0, duration: 0.05 }, 1.5)
      .from('.rect3', { opacity: 0, duration: 0.01 }, 1.5)
      .from('.rect3', { scale: 0.8, transformOrigin: '50%' }, 1.5)
      .from(
        '.txt3',
        { y: 99, duration: 0.12, ease: 'expo', ['duration' as never]: 0.5 },
        1.5
      )
      .to('.txt3, .rect3', { opacity: 0, duration: 0.1 }, 3)
      .fromTo(
        '.logo',
        { scale: 0.3, transformOrigin: '50%' },
        { scale: 0.24, duration: 3, ease: 'none' },
        3
      )
      .fromTo(
        '.p0, .p1, .p2, .p3',
        { attr: { 'stroke-width': 0 } },
        { attr: { 'stroke-width': 40 }, duration: 0.3 },
        3
      )
      .from(
        '.p0 *',
        {
          duration: 1,
          stagger: 0.1,
          ease: 'power1',
          drawSVG: (i) => [0, '100% 100%'][i],
        },
        3
      )
      .from(
        '.p1 *',
        {
          duration: 1,
          stagger: 0.1,
          ease: 'power1.inOut',
          drawSVG: (i) => [0, '100% 100%'][i],
        },
        3.05
      )
      .from(
        '.p2 *',
        {
          duration: 1,
          stagger: 0.1,
          ease: 'power1.inOut',
          drawSVG: (i) => [0, '100% 100%'][i],
        },
        3.1
      )
      .from(
        '.p3 *',
        {
          duration: 0.8,
          stagger: 0.1,
          ease: 'none',
          drawSVG: (i) => [0, '100% 100%'][i],
        },
        3.3
      )
      .to('.logo', { opacity: 0, ease: 'power1.inOut' }, 5);
    console.log('tl', tl);
    console.log('tl.play()', tl.play());
    // tl.play().finally(() => {console.log('sadsad')});
  }
}
