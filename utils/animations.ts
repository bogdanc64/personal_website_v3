import gsap, { Power3 } from "gsap";

export const stagger = (target:any, fromvVars:any, toVars:any, duration:number) => {
  return gsap.fromTo(
    target,
    { opacity: 0, ...fromvVars },
    { opacity: 1, ...toVars, stagger: duration, ease: Power3.easeOut }
  );
};
