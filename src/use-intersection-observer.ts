import { useEffect, RefObject } from "react"

const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  margin: string,
  threshold: number,
  actionOnView: () => void,
  actionOutOfView: () => void | null,
  isUnobserve: boolean,
): void => {
  useEffect(() => {
    if (!ref.current) return

    const options = {
      root: null,
      rootMargin: margin,
      threshold,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]): void => {
      if (!isUnobserve) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            actionOnView()
          } else if (actionOutOfView) {
            actionOutOfView()
          }
        })
      }
    }

    const observer = new IntersectionObserver(observerCallback, options)
    observer.observe(ref.current)

    if (isUnobserve) {
      observer.unobserve(ref.current)
    }
  }, [ref, isUnobserve])
}

export default useIntersectionObserver
