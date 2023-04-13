import type { PagingParams, PagingResult } from '@/types/paging'
import { curl } from './curl'
import type { TodoItem } from '@/types'
import { withLoading } from '@/utils'

// todo list
export const reqTodoList = withLoading((data: PagingParams<{ keyword: string }>) => {
  return curl<PagingResult<TodoItem>>('api/todo', data)
}, false)

// todo create
export const doTodoCreate = withLoading((data: TodoItem) => {
  return curl('api/todo', data, { method: 'post' })
})

// todo delete
export const doTodoDelete = withLoading((data: { id: string }) => {
  return curl('api/todo/{id}', data, { method: 'delete' })
})
