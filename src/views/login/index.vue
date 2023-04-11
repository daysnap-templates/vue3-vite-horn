<template>
  <hor-view>
    <hor-cell-group>
      <hor-cell v-for="(item, index) in objInput" v-bind="item" :key="index" direction="column">
        <hor-input v-model="item.value" />
      </hor-cell>
    </hor-cell-group>
    <van-button class="c-button" type="primary" @click="handleSubmit">登录</van-button>
    <p>userinfo =》 {{ userinfo }}</p>

    <p @click="increment">count => {{ count }}</p>
  </hor-view>
</template>

<script lang="ts" setup>
import { doUserLogin } from '@/api'
import { useCounterStore } from '@/stores/counter'
import { useUserinfoStore } from '@/stores/useUserinfoStore'
import type { MetaDataObject } from '@daysnap/banana'
import { banana } from '@daysnap/banana'
import { storeToRefs } from 'pinia'

const objInput = reactive<MetaDataObject>({
  username: {
    value: '1',
    label: '账号',
    required: true,
    rules: [{ required: true, message: '请输入账号' }],
  },
  password: {
    value: '2',
    label: '密码',
    required: true,
    rules: [{ required: true, message: '请输入账号' }],
  },
})

const router = useRouter()
const userinfoStore = useUserinfoStore()
const { userinfo } = storeToRefs(userinfoStore)

//
const counterStore = useCounterStore()
const { count, increment } = { ...storeToRefs(useCounterStore()), ...useCounterStore() }
// const { count } = storeToRefs(counterStore)
// const { increment } = counterStore

const handleSubmit = async () => {
  // const { setUserinfo } = useUserinfoStore()
  // const {} = userinfoStore
  console.log('xxx => ', userinfoStore.userinfo)
  const options = banana.validate(objInput)
  const userinfo1 = await doUserLogin(options, { message: 'xxx' })
  userinfoStore.setUserinfo(userinfo1)
  // router.back()
}
</script>
