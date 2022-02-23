// components/swiper/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    swiperImgs: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  // 声明周期函数获取数据库信息
  lifetimes: {
    // 在组件实例进入页面节点树时执行
    attached: function() {
      const db = wx.cloud.database()
      db.collection('swiperImgs').doc('41ae62ef6215f32a087088cd4d2650b4').get().then(res => {
        console.log('swiper 图片', res.data.swiper)
        this.setData({
          swiperImgs:res.data.swiper
        })
      })
    },

    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },


  /**
   * 组件的方法列表
   */
  methods: {
    changeIndicatorDots() {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },

    changeAutoplay() {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },

    intervalChange(e) {
      this.setData({
        interval: e.detail.value
      })
    },

    durationChange(e) {
      this.setData({
        duration: e.detail.value
      })
    }
  }
})
