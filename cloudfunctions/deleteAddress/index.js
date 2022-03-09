// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const _ = db.command


// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  console.log('event', event)

  db.collection('userInfo').doc(event._id).update({
    data:{
      storeAddress: _.pull({
        selfId:_.eq(parseInt(event.selfid))
      })
    }
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}

