export function different(array: any[], ...args: any[]) {
  if (args.length == 0)
    return array

  return array.filter(v => args.filter(m => v == m).length == 0)
}