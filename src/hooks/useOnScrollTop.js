import { useEffect } from 'react'

function useOnScrollTop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
}

export default useOnScrollTop
