export type SetStateAction<S> = S | ((prevState: S) => S)

export type Dispatch<T> = (value: SetStateAction<T>) => void
