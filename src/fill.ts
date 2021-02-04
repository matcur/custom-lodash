export function fill(array: any[], value: any, start = 0, end?: number) {
  if (end === undefined)
    end = array.length
  start = Math.min(array.length, start)
  end = Math.min(array.length, end)

  while (start < end)
   array[start++] = value

  return array
}