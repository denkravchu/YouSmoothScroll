
/**
 * @author Den Kravchu <denkravchu@gmail.com>
 * @fileoverview Small class for cool smooth scroll
 * @version 1.0.0
 */
class SmoothScrollLib {
    width                   = null
    height                  = null
    parentDom               = null
    scrollableContainerDom  = null
    scrollableHeight        = null
    current                 = 0
    target                  = 0
    ease                    = 0.075
    alive                   = true

    constructor(parentDom, scrollableContainerDom, ease) {
        this.parentDom               = parentDom
        this.scrollableContainerDom  = scrollableContainerDom
        this.ease                    = ease || this.ease

        if (!this.parentDom) { console.error(`SmoothScroll: parentDom is required`) }
        if (!this.scrollableContainerDom) { console.error(`SmoothScroll: scrollableContainerDom is required`) }
        if (typeof this.ease !== 'number') { console.error(`SmoothScroll: ease must be a "number"`) }

        this.scrollableContainerDom.style.cssText = `
            position: fixed;
            top: 0; left: 0;
            width: 100vw;
            min-height: 100%;
            will-change: transform;
            overflow: hidden;
            display: block;
        `
    }

    lerp(start, end, t) {
        return start * (1 - t ) + end * t
    }

    setParentHeight() {
        if (this.width !== window.innerWidth || this.height !== window.innerHeight ||
            this.scrollableHeight !== this.scrollableContainerDom.getBoundingClientRect().height) { 
            if (this.alive) { 
                this.width = window.innerWidth
                this.height = window.innerHeight
                this.scrollableHeight = this.scrollableContainerDom.getBoundingClientRect().height
                this.parentDom.style.height = `${this.scrollableHeight}px`
             }
        }
    }

    setScrollPosition() {
        this.target = window.scrollY
        this.current = this.lerp(this.current, this.target, this.ease)
        this.scrollableContainerDom.dispatchEvent(new CustomEvent('smoothscroll', {
            bubbles: true, 
            detail: {
                current: this.current,
                target: this.target
            }
        }))
        if (!this.alive) { return }
        this.scrollableContainerDom.style.transform = `translate3d(0, ${-this.current}px, 0)`
    }

    getProps() {
        return {
            parentDom               : this.parentDom,
            scrollableContainerDom  : this.scrollableContainerDom,
            scrollableHeight        : this.scrollableHeight,
            current                 : this.current,
            target                  : this.target,
            ease                    : this.ease,
            alive                   : this.alive
        }
    }

    toRender() {
        this.alive = true
        this.setParentHeight()
        this.setScrollPosition()
    }

    destroy() {
        this.scrollableContainerDom.style.cssText = ''
        this.parentDom.style.height = ''
        this.alive = false
    }
}

export default SmoothScrollLib