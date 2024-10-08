import { Box, Center } from '@chakra-ui/react'
import { useGSAP } from '@gsap/react'
import { Flip, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(Flip)

function nextState(layouts, container, curLayout) {
  const state = Flip.getState('.letter, .for, .gsap', {
    props: 'color,backgroundColor',
    simple: true,
  }) // capture current state

  container.classList.remove(layouts[curLayout]) // remove old class
  curLayout = (curLayout + 1) % layouts.length // increment (loop back to the start if at the end)
  container.classList.add(layouts[curLayout]) // add the new class

  Flip.from(state, {
    // animate from the previous state
    absolute: true,
    stagger: 0.07,
    duration: 0.7,
    ease: 'power2.inOut',
    spin: curLayout === 0, // only spin when going to the "final" layout
    simple: true,
    onEnter: (elements, animation) =>
      gsap.fromTo(
        elements,
        { opacity: 0 },
        { opacity: 1, delay: animation.duration() - 0.1 }
      ),
    onLeave: (elements) => gsap.to(elements, { opacity: 0 }),
  })

  gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, () =>
    nextState(layouts, container, curLayout)
  )
}

export default function LoadingName() {
  useGSAP(() => {
    const layouts = ['final', 'plain', 'columns', 'grid']
    const container = document.querySelector('.container')
    let curLayout = 0 // index of the current layout

    gsap.delayedCall(1, () => nextState(layouts, container, curLayout))
  }, {})

  return (
    <Center minH="100vh">
      <div className="container final">
        <div className="letter F">J</div>
        <div className="letter l">A</div>
        <div className="letter i">I</div>
        {/* <div className="letter p">S</div> */}
        <div className="for">sharma</div>
        <div className="gsap">.dev</div>
      </div>
    </Center>
  )
}
