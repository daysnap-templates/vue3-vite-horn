import { getCache } from '@daysnap/utils'
import { createNamespace } from './createNamespace'

export const openIdStorage = getCache().generate<string>(createNamespace(`USER_OPENID`))
