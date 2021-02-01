export function concat(...args: any[]) {
  if (!Array.isArray(args))
      return args
  
    let result: any[] = []
    args.forEach(v => result.push(...Array.from(v)))
  
    return result
}