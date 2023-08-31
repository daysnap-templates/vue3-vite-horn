// 是否是开发环境
export const __DEV__ = process.env.NODE_ENV === 'development'

export const NAME = 'VUE3-VITE-HORN'

export const parseText = (
  arr: { label: string; value: string | number }[],
  value: string | number,
) => {
  const item = arr.find((item) => item.value === value)
  return item?.label
}
