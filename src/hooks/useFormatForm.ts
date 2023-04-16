import type { MetaDataObject } from '@daysnap/banana'
import { isFunction } from '@daysnap/utils'

export function useFormatForm(form: Record<string, any>) {
  const loop = (data: any) =>
    Object.keys(data).reduce<MetaDataObject>((res, key) => {
      const item = data[key]
      let hidden = item.hidden
      if (isFunction(hidden)) {
        hidden = hidden(item.value, item, form)
      }
      if (!hidden) {
        res[key] = item
      }
      item.required = !!item?.rules?.find((item: any) => item.required)
      return res
    }, {})

  return computed(() => loop(form))
}
