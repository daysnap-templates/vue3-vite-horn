import type { Field } from '@daysnap/banana'

export interface FormMetadataField extends Field {
  label?: string
  placeholder?: string
  is?: any
  disabled?: boolean
  clearable?: boolean
  direction?: 'column' | 'row'
  fn?: (item: FormMetadataField) => any
  formatter?: (value: any) => any
  hidden?: any // todo 这里得置为 any 后续看下有没有方案解决
  options?: any
  maxlength?: string | number
  pattern?: (nv: any, ov: any) => any
}

export interface FormMetadata {
  [key: string]: FormMetadataField
}

export interface RenderMetadataFiled<T = any> {
  is?: any
  value?: any
  defValue?: any
  label?: string
  get?: (v: any, s: T) => any
  formatter?: (v: any, s: T) => any
  hidden?: boolean | ((v: any, s: T) => boolean)
  key?: string
  unit?: string
  children?: RenderMetadata<T>
  direction?: 'column' | 'row'
}

export interface RenderMetadataFnFiled<T = any> {
  (s: T): RenderMetadata<T>
}

export type RenderMetadata<T = any> = (RenderMetadataFiled<T> | RenderMetadataFnFiled<T>)[]
