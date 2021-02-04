export function after(n: number, func: (...args: any[]) => void) {
  return function(...args: any[]) {
    if (--n < 1)
       return func(args)
  }
}