import SmoothScrollLib from "../utils/smoothScroll"
import { useEffect, useRef, useState } from "react"

const SmoothScroll = ({ children }) => {
    const parent = useRef()
    const container = useRef()

    let startTime = performance.now()

    useEffect(() => {
        const scroll = new SmoothScrollLib(parent.current, container.current)
        requestAnimationFrame(function render( time ) {
            if ( time - startTime > 10 ) {
                if (window.innerWidth < 1080) {
                    scroll.destroy()
                } else {
                    scroll.toRender()
                }
            }
            requestAnimationFrame(render)
        }.bind(this))
    }, [])

    return (
        <div ref={parent}>
            <div ref={container}>
                { children }
            </div>
        </div>
    )
}

export default SmoothScroll