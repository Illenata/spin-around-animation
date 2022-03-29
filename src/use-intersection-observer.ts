import { useEffect, SetStateAction, Dispatch } from "react"

const useIntersectionObserver = (
  elementsOptions: Map<HTMLParagraphElement, number>,
  margin: string,
  threshold: number,
  actionOnView: Dispatch<SetStateAction<number | null>>,
  actionOutOfView: () => void | null,
  isUnobserve: boolean,
): void => {
  useEffect(() => {
    if (!elementsOptions.size) return

    const options = {
      root: null,
      rootMargin: margin,
      threshold,
    }

    elementsOptions.forEach((argument, element) => {
      const observerCallback = (entries: IntersectionObserverEntry[]): void => {
        if (!isUnobserve) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              actionOnView(argument)
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
  }, [elementsOptions, isUnobserve])
}

export default useIntersectionObserver
