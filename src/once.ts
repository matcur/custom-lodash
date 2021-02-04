export function once(func: (...args: any[]) => void) {
  let n = 0
  
  return function(...args: any[]) {
    if (n == 0)
      func(args)

    n++
  }
}