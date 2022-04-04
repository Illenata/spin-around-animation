import { useEffect } from "react"

const useIntersectionObserver = (
  elements: HTMLElement[],
  args: any[],
  margin: string,
  threshold: number,
  actionOnView: (argument?: any) => void,
  actionOutOfView: () => void | null,
  isUnobserve: boolean,
): void => {
  useEffect(() => {
    if (!elements.length) return

    const options = {
      root: null,
      rootMargin: margin,
      threshold,
    }

    const observers = [] as IntersectionObserver[]

    elements.forEach((element, i) => {
      const observerCallback = (entries: IntersectionObserverEntry[]): void => {
        if (!isUnobserve) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              args.length ? actionOnView(args[i]) : actionOnView()
            } else if (actionOutOfView) {
              actionOutOfView()
            }
          })
        }
      }
 
      const observer = new IntersectionObserver(observerCallback, options)
      observer.observe(element)
  
      if (isUnobserve) {
        observer.unobserve(element)
      }
    })

    return () => {
      observers.forEach((observer) => {
        observer.disconnect()
      })
    }
  }, [elements, isUnobserve])
}

export default useIntersectionObserver
