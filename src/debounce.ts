export function debounce(callback: (...args: any[]) => void, wait: number) {
  wait = Math.max(wait, 0)
  let can = true

  return function (...args: any[]) {
    if (can)
    {
      can = false
      callback(args)
      setInterval(() => can = true, wait)
    }
  }
}