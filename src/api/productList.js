const iphoneUrl = 'https://img14.360buyimg.com/n7/jfs/t1/109384/3/17626/212571/614be585Eb8f44b8c/be8ecd190a639396.jpg'
const huaweiUrl = 'https://img13.360buyimg.com/n7/jfs/t1/196266/2/20386/123790/6129e5fcE7f5dd683/167a602b988d6003.jpg'

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
    {name: '华为手机 1', url: huaweiUrl, price: '6000.00' },
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
  ]
}
export const getProducts = ({pageNum, pageSize, key}) => {
  key = key || 'all'
  const list = productList[key]
  const start = pageNum - 1 === 0 ? 0 : (pageNum-1) * pageSize
  const end = pageSize + start 
  return {data: list.slice(start, end), length: list.length}
}
