<template>
  <div class="pro-schema-form">
    <hor-cell-group>
      <component
        v-for="(item, key) in computeForm"
        v-bind="item"
        v-model="item.value"
        :key="key"
        :is="item.is"
        @click="handleTransfer(item)"
      />
    </hor-cell-group>
  </div>
</template>

<script lang="ts">
import {
  HorField,
  HorCheckbox,
  HorRadio,
  HorDatePicker,
  HorCell,
  type HorDatePickerInstance,
  HorLicensePlate,
  HorTextarea,
} from '@daysnap/horn-ui'
import '@daysnap/horn-ui/src/hor-field/style'
import '@daysnap/horn-ui/src/hor-checkbox/style'
import '@daysnap/horn-ui/src/hor-date-picker/style'
import '@daysnap/horn-ui/src/hor-license-plate/style'
import '@daysnap/horn-ui/src/hor-textarea/style'
import { useTransfer } from '@daysnap/horn-use'
import { useFormatForm } from '@/hooks'

export default defineComponent({
  name: 'ProSchemaForm',
  props: {
    fields: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const handleTransfer = useTransfer()
    const computeForm = useFormatForm(props.fields)

    console.log('computeForm => ', computeForm.value)
    return {
      computeForm,
      handleTransfer,
    }
  },
  components: {
    HorField,
    HorCheckbox,
    HorRadio,
    HorDatePicker,
    HorCell,
    HorLicensePlate,
    HorTextarea,
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/define.scss';
</style>
