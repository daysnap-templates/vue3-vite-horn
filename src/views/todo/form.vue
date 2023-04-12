<template>
  <hor-view>
    <hor-cell-group>
      <hor-cell v-for="(item, key) in objInput" v-bind="item" :key="key" required>
        <hor-input v-model="item.value" />
      </hor-cell>
    </hor-cell-group>
    <van-button class="c-button" type="primary" @click="handleSubmit">提交</van-button>
  </hor-view>
</template>

<script setup lang="ts">
import { doTodoCreate } from '@/api/todo'
import { type MetaDataObject, banana } from '@daysnap/banana'
import { showToast } from 'vant'

const objInput = reactive<MetaDataObject>({
  name: {
    value: '1',
    label: '姓名',
    rules: [{ required: true, message: '请填写姓名' }],
  },
  content: {
    value: '2',
    label: '要做的事情',
    rules: [{ required: true, message: '请填写要做的事情' }],
  },
})

const router = useRouter()
// 提交
const handleSubmit = async () => {
  const options = banana.validate(objInput)
  await doTodoCreate(options)
  showToast('创建成功')
  router.back()
}
</script>
