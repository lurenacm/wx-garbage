// pages/home/home.js
const appInstance = getApp()
const db = wx.cloud.database()
// const db = appInstance.globalData.db

Page({

  /**
   * 页面的初始数据
   */
  data: {
    consult: [],
    browse: null,
    _id: null
  },

  getContent(event) {
    let content = event.currentTarget.dataset.content
    let showContent = encodeURIComponent(JSON.stringify(content.content))
    let img = content.img

    this.setData({
      browse: content.browse,
      _id: content._id
    })

    wx.setStorage({
      key: "_id",
      data: content._id
    })

    wx.navigateTo({
      url: `./contentPage/contentPage?content=${showContent}&imgUrl=${img}`,
    })

    wx.cloud.callFunction({
      name: 'getConsultBrowse',
      data: {
        _id: this.data._id,
        browse: this.data.browse
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // db.collection('consult').get().then(res => {
    //   this.setData({
    //     consult: res.data
    //   })
    // })
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
  onHide: function () {},

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