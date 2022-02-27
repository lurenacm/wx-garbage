// pages/home/home.js
const appInstance = getApp()
const db = wx.cloud.database()
// const db = appInstance.globalData.db
Page({

  /**
   * 页面的初始数据
   */
  data: {
    consult:[]
  },


  getContent(event){
    let content = event.currentTarget.dataset.content
    // console.log('dataset', event.currentTarget.dataset.content)

    wx.navigateTo({
      url:`./contentPage/contentPage?content=${content[0]}&imgUrl=${content[1]}`,
      fail(res){
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('consult').get().then(res => {
      // console.log('consult', res.data)
      this.setData({
        consult: res.data
      })
    })

    // // 
    // db.collection('garbageList').where({
    //   "goods":'可回收垃圾'
    // }).get({
    //   success(){
    //     // console.log('this', this)
    //   }
    // })
    // // .then(res => {
    // //   console.log(res)
    // // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})