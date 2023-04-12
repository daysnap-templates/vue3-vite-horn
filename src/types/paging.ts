export type PagingParams<T = unknown> = {
  pageIndex: number
  pageSize: number
} & T

export interface PagingResult<T = any> {
  count: number
  list: T[]
}
