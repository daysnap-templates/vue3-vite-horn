import type { ExtractPropTypes, PropType } from 'vue'

export const proSchemaFilterPopupProps = {
  fileds: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
  moduleValue: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
}

export type ProSchemaFilterPopupProps = ExtractPropTypes<typeof proSchemaFilterPopupProps>
