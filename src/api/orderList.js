const imgUrl1 = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
const imgUrl2 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F945cad7c7105d352aa3c513c94846bb0c2f1a61342067-OWFZcE_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637245339&t=d1b07973b78933dada4f5db3e14fdebd'
const imgUrl3 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage66.360doc.com%2FDownloadImg%2F2013%2F11%2F0708%2F36512556_53.jpg&refer=http%3A%2F%2Fimage66.360doc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637245440&t=31cc2a8b2553a090b6fb14a271697e6f'
const imgUrl4 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F191002130K234M-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637245387&t=01a5ea7ca3bc2b33c60a43e5c3a94a1d'
const imgUrl5 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic18.nipic.com%2F20111216%2F9047182_205018652177_2.jpg&refer=http%3A%2F%2Fpic18.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637245404&t=aea79b60b6beaef5352a56ff32d870af'
const orderList = {
  'type1': [
    {id: 1, imgUrl: imgUrl1, type: '待付款', time: '2021-01-12 14:12:01', name: '绿茶味香水1', description: '爱神的箭拉萨的离开爱神的箭拉萨的离开爱神的箭拉萨的离开爱神的箭拉萨的离开', price: '126.00', num: 3, operate: ['提醒发货']},
    {id: 2, imgUrl: imgUrl1, type: '待付款', time: '2021-01-12 14:12:01', name: '绿茶味香水2', description: '爱神的箭拉萨的离开', price: '126.00', num: 15, operate: ['提醒发货']}
  ],
  'type2': [
    {id: 1, imgUrl: imgUrl2, type: '代发货', time: '2021-01-12 14:12:01', name: '绿茶味香水3', description: '爱神的箭拉萨的离开爱神的箭拉萨的离开爱神的箭拉萨的离开爱神的箭拉萨的离开', price: '126.00', num: 7, operate: ['提醒发货', '查看团购']},
    {id: 2, imgUrl: imgUrl2, type: '代发货', time: '2021-01-12 14:12:01', name: '绿茶味香水4', description: '爱神的箭拉萨的离开', price: '126.00', num: 8, operate: ['提醒发货', '查看团购']}
  ],
  'type3': [
    {id: 1, imgUrl: imgUrl3, type: '待收货', time: '2021-01-12 14:12:01', name: '绿茶味香水5', description: '爱神的箭拉萨的离开爱神的箭拉萨的离开爱神的箭拉萨的离开爱神的箭拉萨的离开', price: '126.00', num: 9, operate: ['提醒发货', '查看团购']},
    {id: 2, imgUrl: imgUrl3, type: '待收货', time: '2021-01-12 14:12:01', name: '绿茶味香水6', description: '爱神的箭拉萨的离开', price: '126.00', num: 4, operate: []}
  ],
  'type4': [
    {id: 1, imgUrl: imgUrl4, type: '待评价', time: '2021-01-12 14:12:01', name: '绿茶味香水7', description: '爱神的箭拉萨的离开爱神的箭拉萨的离开爱神的箭拉萨的离开爱神的箭拉萨的离开', price: '126.00', num: 6, operate: []},
    {id: 2, imgUrl: imgUrl4, type: '待评价', time: '2021-01-12 14:12:01', name: '绿茶味香水8', description: '爱神的箭拉萨的离开', price: '126.00', num: 6, operate: ['提醒发货', '查看团购']}
  ],
  'type5': [
    
  ],
}
export const getOrderList = ({type}) => {
  if(!type) {
    return orderList
  }
  return orderList[type]
}