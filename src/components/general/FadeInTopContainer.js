import React, { useRef, useEffect } from "react"
import styled from "styled-components"

const FadeInTop = styled.div`
  opacity: 0;
  transition: transform 0.2s ease-out 0s, opacity 0.2s ease-out 0s;
  transform: translate3d(0px, 32px, 0px) scale3d(0.99, 0.99, 1);
`

const FadeInTopContainer = props => {
  const elementRef = useRef(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let elementTopOffset = elementRef.current.offsetTop

      /* Calculate pixel offset and add user modifier (offset) */
      let pixelOffset =
        window.scrollY - (window.innerHeight - elementTopOffset) + props.offset

      /* Calculate percent and add user modifier: range */
      let completionPercent = Math.max(pixelOffset, 0) / props.range
console.log(elementRef, completionPercent);

      /* Style Transforms */
      if (completionPercent > -0.5 && completionPercent < 1.5) {
        elementRef.current.style.transform =
          "translate3d(0px, " +
          Math.max(32 - 32 * completionPercent, 0) +
          "px, 0px) scale3d(0.99, 0.99, 1)"
        elementRef.current.style.opacity = completionPercent
      }
    })
  }, [])

  return <FadeInTop ref={elementRef}>{props.children}</FadeInTop>
}

export default FadeInTopContainer
