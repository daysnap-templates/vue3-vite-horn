export type PagingParams<T = unknown> = {
  pageNum: number
  pageSize: number
} & T

export interface PagingResult<T = any> {
  sizeTotal: number
  details: T[]
}
