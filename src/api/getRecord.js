// 模拟后台数据
const records = {
  property: 1000,
  deposit: 2000,
  consume: 1000
}
export const getRecords = () => {
  return new Promise((resolve) => {
    resolve(records)
  })
}