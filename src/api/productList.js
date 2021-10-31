import fruit1 from '@/assets/fruit-1.png'
import fruit2 from '@/assets/fruit-2.png'

const iphoneUrl = 'https://img14.360buyimg.com/n7/jfs/t1/109384/3/17626/212571/614be585Eb8f44b8c/be8ecd190a639396.jpg'
const huaweiUrl = 'https://img13.360buyimg.com/n7/jfs/t1/196266/2/20386/123790/6129e5fcE7f5dd683/167a602b988d6003.jpg'
const cosmeticsUrl1 = 'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1988399034.jpg'
const cosmeticsUrl2 = 'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1990236310.jpg'
const cosmeticsUrl3 = 'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1989585898.jpg'
const cosmeticsUrl4 = 'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1989884819.jpg'
const cosmeticsUrl5 ='https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1988395095.jpg'
const cosmeticsUrl6 ='https://assets.nightcherry.com/cms/upload/300081/5f2bcc81ef18e.jpg'


export const productList = {
  "all": [
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
    {id: 1,name: '水果-1', url: fruit1, price: '6000.00' },
    {id: 2,name: '水果-2', url: fruit2, price: '6000.00' },
    {id: 3,name: '水果-3', url: fruit1, price: '6000.00' },
    {id: 4,name: '水果-4', url: fruit2, price: '6000.00' },
    {id: 5,name: '水果-5', url: fruit1, price: '6000.00' },
    {id: 6,name: '水果-6', url: fruit2, price: '6000.00' },
    {id: 7,name: '水果-7', url: fruit1, price: '6000.00' },
    {id: 6,name: '水果-8', url: fruit2, price: '6000.00' },
    {id: 9,name: '水果-9', url: fruit1, price: '6000.00' },
    {id: 10,name: '水果-10', url: fruit2, price: '6000.00' },
  ],
  "cosmetics": [
    {name: 'sisley-1', url: cosmeticsUrl1, price: '6000.00' },
    {name: 'sisley-2', url: cosmeticsUrl2, price: '6000.00' },
    {name: 'sisley-3', url: cosmeticsUrl3, price: '6000.00' },
    {name: 'sisley-4', url: cosmeticsUrl4, price: '6000.00' },
    {name: 'sisley-5', url: cosmeticsUrl5, price: '6000.00' },
    {name: 'sisley-6', url: cosmeticsUrl6, price: '6000.00' },
    {name: 'sisley-7', url: cosmeticsUrl1, price: '6000.00' },
    {name: 'sisley-8', url: cosmeticsUrl2, price: '6000.00' },
    {name: 'sisley-9', url: cosmeticsUrl3, price: '6000.00' },
    {name: 'sisley-10', url: cosmeticsUrl4, price: '6000.00' },
    {name: 'sisley-11', url: cosmeticsUrl5, price: '6000.00' },
    {name: 'sisley-12', url: cosmeticsUrl6, price: '6000.00' },
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
