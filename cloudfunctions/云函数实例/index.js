// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  // return 是调用结束后放回给 success/then 回调函数的结果值 
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}

// 在小程序 miniprogram文件夹中 中调用
wx.cloud.callFunction({
  // 表示调用的函数名，和文件夹的名字相同
  name:"add",
  // data 是传递给云函数 event 对象的参数
  data:{
    a:1,
    b:2
  },
  // 表示调用成功的回调函数
  success: function(res){
    console.log(res.result.sum)
  }
})

