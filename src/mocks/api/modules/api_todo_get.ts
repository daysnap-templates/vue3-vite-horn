import { sleep } from '@daysnap/utils'

export default async function (options: any) {
  console.log('options => ', options)
  await sleep(1000)
  return {
    code: 0,
    success: true,
    message: '请求成功',
    data: {
      count: 55,
      list: new Array(10).fill('').map((item, index) => {
        return {
          name: `张三${index}`,
          content:
            '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
        }
      }),
    },
  }
}
