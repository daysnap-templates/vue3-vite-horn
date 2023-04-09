<template>
  <hor-view>
    <hor-cell-group>
      <hor-cell v-for="(item, index) in objInput" v-bind="item" :key="index" direction="column">
        <hor-input v-model="item.value" />
      </hor-cell>
    </hor-cell-group>
    <van-button class="c-button" type="primary" @click="handleSubmit">登录</van-button>
  </hor-view>
</template>

<script lang="ts" setup>
import type { MetaDataObject } from '@daysnap/banana'
import { banana } from '@daysnap/banana'

const objInput = reactive<MetaDataObject>({
  username: {
    value: '',
    label: '账号',
    required: true,
    rules: [{ required: true, message: '请输入账号' }],
  },
  password: {
    value: '',
    label: '密码',
    required: true,
    rules: [{ required: true, message: '请输入账号' }],
  },
})

const handleSubmit = () => {
  const options = banana.validate(objInput)
  console.log('options => ', options)
}
</script>
