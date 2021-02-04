export function wrap(func: (...args: any[]) => void, wrapper: (func: (...args: any[]) => void, value: any) => void) {
  return function(value: any) {
    wrapper(func, value);
  }
}