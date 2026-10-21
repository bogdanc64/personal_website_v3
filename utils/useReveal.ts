import gsap from 'gsap'
import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

export function useReveal<T extends HTMLElement>() {
  const root = useRef<T>(null)

  useIsomorphicLayoutEffect(() => {
    const scope = root.current
    if (!scope) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const nodes = Array.from(scope.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!nodes.length) return

    const tween = gsap.fromTo(
      nodes,
      {
        autoAlpha: 0,
        y: 16,
        scale: (_index, element: HTMLElement) => (element.dataset.reveal === 'media' ? 0.97 : 1),
      },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        delay: 0.06,
        stagger: 0.07,
        ease: 'power3.out',
      }
    )

    return () => {
      tween.kill()
    }
  }, [])

  return root
}
