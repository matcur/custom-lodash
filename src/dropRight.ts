export function dropRight(array: any[], number = 1) {
  let length = array.length
  if (number > length)
    return []

  return array.slice(0, length - number)
}