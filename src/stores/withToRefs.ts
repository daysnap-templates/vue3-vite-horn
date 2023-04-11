export function withToRefs<T extends (...args: any[]) => any>(fn: T) {
  return (...args: [...Parameters<T>, string?]): ReturnType<T> => {
    return null as any
  }
}

const fn = withToRefs(() => {
  //
})
