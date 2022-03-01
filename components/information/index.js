// components/information/index.js
const db = wx.cloud.database()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    browse: Number,
    date: String,
    img: String,
    content: String,
    _id: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  pageLifetimes: {
    hide() {
      let than = this
      wx.getStorage({
        key: '_id',
        success(res) {
          if (than.properties._id === res.data) {
            than.setData({
              browse: than.properties.browse + 1
            })
          }
        }
      })
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {


  }

})