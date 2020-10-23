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
    swiperImgs: ['../../images/swiper1.jpg', '../../images/swiper2.png', '../../images/swiper3.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
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
