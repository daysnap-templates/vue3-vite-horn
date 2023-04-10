import { baseURL } from './config'

export const log = ({ url, method }: { url: string; method: string }, ...args: any[]) => {
  console.log(`${url?.startsWith(`http`) ? url : baseURL + url}`, `[${method}]`, ...args)
}
