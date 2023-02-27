import React, { useEffect } from 'react'

type Handler = (e: PointerEvent | MouseEvent) => void

export const useOnClickOutside = (
  refs: React.RefObject<HTMLElement>[],
  handler: Handler,
  pointerEvent: 'mousedown' | 'mouseup' | 'pointerdown' | 'pointerup' | 'click' = 'pointerdown',
) => {
  useEffect(() => {
    const callback: Handler = e => {
      if (refs.some(ref => !!ref?.current?.contains(e.target as Node))) return
      handler(e)
    }
    
    document.addEventListener(pointerEvent, callback)
    return () => {
      document.removeEventListener(pointerEvent, callback)
    }
  }, [])
}
