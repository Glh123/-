const iphoneUrl = 'https://img14.360buyimg.com/n7/jfs/t1/109384/3/17626/212571/614be585Eb8f44b8c/be8ecd190a639396.jpg'
const huaweiUrl = 'https://img13.360buyimg.com/n7/jfs/t1/196266/2/20386/123790/6129e5fcE7f5dd683/167a602b988d6003.jpg'

import fruit1 from '@/assets/fruit-1.png'
import fruit2 from '@/assets/fruit-2.png'

export const productList = {
  "all": [
    {name: 'Iphone 11', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 12', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 13', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 14', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 15', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 11', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 12', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 13', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 14', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 15', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 11', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 12', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 13', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 14', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 15', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 11', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 12', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 13', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 14', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 15', url: iphoneUrl, price: '6000.00' },
  ],
  "new": [
    {id: 1, name: '华为手机 1', url: huaweiUrl, price: '6000.00' },
    {name: '华为手机 2', url: huaweiUrl, price: '6000.00' },
    {name: '华为手机 3', url: huaweiUrl, price: '6000.00' },
    {name: '华为手机 4', url: huaweiUrl, price: '6000.00' },
    {name: '华为手机 5', url: huaweiUrl, price: '6000.00' },
  ],
  "price": [
    {name: 'Iphone 11', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 12', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 13', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 14', url: iphoneUrl, price: '6000.00' },
    {name: 'Iphone 15', url: iphoneUrl, price: '6000.00' },
    {name: '华为手机 1', url: huaweiUrl, price: '6000.00' },
    {name: '华为手机 2', url: huaweiUrl, price: '6000.00' },
    {name: '华为手机 3', url: huaweiUrl, price: '6000.00' },
    {name: '华为手机 4', url: huaweiUrl, price: '6000.00' },
    {name: '华为手机 5', url: huaweiUrl, price: '6000.00' },
  ],
  "fruit": [
    {id: 1,name: 'Iphone 11', url: fruit1, price: '6000.00' },
    {id: 2,name: 'Iphone 12', url: fruit2, price: '6000.00' },
    {id: 3,name: 'Iphone 13', url: fruit1, price: '6000.00' },
    {id: 4,name: 'Iphone 14', url: fruit2, price: '6000.00' },
    {id: 5,name: 'Iphone 15', url: fruit1, price: '6000.00' },
    {id: 6,name: '华为手机 1', url: fruit2, price: '6000.00' },
    {id: 7,name: '华为手机 2', url: fruit1, price: '6000.00' },
    {id: 6,name: '华为手机 3', url: fruit2, price: '6000.00' },
    {id: 9,name: '华为手机 4', url: fruit1, price: '6000.00' },
    {id: 10,name: '华为手机 5', url: fruit2, price: '6000.00' },
  ]
}
export const getProducts = ( key='all',pageNum=0, pageSize=10,) => {
  const list = productList[key]
  let start = 0
  let end = list.length
  if(pageNum!=0) {
    start = pageNum - 1 === 0 ? 0 : (pageNum-1) * pageSize
    end = pageSize + start 
  }
  return {data: list.slice(start, end), length: list.length}
}
