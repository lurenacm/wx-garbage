// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()


// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  console.log('event', event)
  cloud.database().collection('userInfo').doc(event._id).update({
    data: {
      searchHistory: db.command.unshift(event.newSearch)
    }
  })
}