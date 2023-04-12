export type PagingParams<T = any> = {
  pageIndex: number
  pageSize: number
} & T

export interface PagingResult<T = any> {
  count: number
  list: T[]
}
