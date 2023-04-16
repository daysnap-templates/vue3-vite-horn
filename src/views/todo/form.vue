<template>
  <hor-view>
    <pro-schema-form :fields="objForm" />
    <van-button class="c-button" type="primary" @click="handleSubmit">提交</van-button>
  </hor-view>
</template>

<script setup lang="ts">
import { showToast } from 'vant'
import { doTodoCreate } from '@/api/todo'
import { trap } from '@/utils'
import { type MetaDataObject, banana } from '@daysnap/banana'

const objForm = reactive<MetaDataObject>({
  name: {
    value: '1',
    label: '姓名',
    is: 'hor-field',
    placeholder: '请填写姓名',
    rules: [{ required: true, message: '请填写姓名' }],
  },
  content: {
    value: '2',
    label: '要做的事情',
    is: 'hor-field',
    placeholder: '请填写要做的事情',
    rules: [{ required: true, message: '请填写要做的事情' }],
  },
})

const router = useRouter()
// 提交
const handleSubmit = async () => {
  const options = banana.validate(objForm)
  await doTodoCreate(options)
  showToast('创建成功')
  trap.trigger('trap:todo:refresh')
  router.back()
}
</script>
