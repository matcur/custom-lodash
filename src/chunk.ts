import { toInteger } from './toInteger'

export function chunk(array: any[], size: number) {
  size = Math.max(toInteger(size), 1)

  if (!array)
    return []

  let result = []
  let chunk = []
  for (let i = 0; i < array.length; i++) {
    if (chunk.length != size)
      chunk.push(array[i])
    else {
      result.push(chunk)
      chunk = []
    }
  }

  if (chunk.length != 0)
    result.push(chunk);

  return result
}