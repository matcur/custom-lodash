import { wrap } from './wrap'

let func = (value: string) => `asdfsaef ${value} saefsaef`  
let init = wrap(func, (func: (...args: any[]) => void, value: any) => {
  console.log(`asfasfe asefasfes 2222222 ${func(value)} 1213123 ${func(value)}`)
})

init('im here')
init('im here')
