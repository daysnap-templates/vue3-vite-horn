import { pinia } from './pinia'

export function withOut<T extends (...args: any[]) => any>(fn: T) {
  return (...args: Parameters<T>): ReturnType<T> => {
    return fn(args[0] ?? pinia, ...args.slice(1))
  }
}
