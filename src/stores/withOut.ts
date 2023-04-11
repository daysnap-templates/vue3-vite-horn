import { pinia } from './pinia'

export function withOut<T extends (...args: any[]) => any>(fn: T) {
  return (): ReturnType<T> => fn(pinia)
}
