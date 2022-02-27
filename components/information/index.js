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
    content: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes:{
    attached(){
     
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }

})
