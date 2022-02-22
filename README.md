# wx-garbage
商业型微信小程序垃圾分类

数据库操作
1. 查询数据
 where 和 get 查询可以查询多条数据

 doc 是单条查询数据，是根据 _id 来查询的
 wx.cloud.database().collection('garbagelist').doc(_id).get().then(...)

2. 添加数据 add
  wx.cloud.database().collection('garbagelist').add({
    data:{
      name:'塑料瓶'
      sort:'可回收'
    }
  })

3. 更新数据 update
  // 一般更新单条数据 结合 doc
  wx.cloud.database().collection('').doc('_id').update({
    data:{
      sort:'不可回收'
    }
  }).then(res => {
  })



4. 删除数据 remove (删除语句一般不会使用)
  // 删除单挑数据
  wx.database().collection().doc('_id').remove().then(...)


## 常用 api
1. 跳转页面
  点击标签获取数据 需要自定义在 `data-变量名` 在标签上，同时绑定一个事件在标签上。事件的参数 event 就可以拿到 `data-变量名` 的值 `event.currentTarget.datasete.name` 的值
  wx.navigateTo({
    url:'/pages/.../?id='+'_id'
  })

  // 获取参数 id 
   onload(options){
     console.log(options.id)
     wx.could.database().collection('good').doc('_id').get().then()
   }

2. 提示框
 wx.showToast({
   icon:'none',
   text: ""
 })


## 云函数
1. 配置
 需要在 project.config.json 中配置 云函数的开发环境 `"cloudfunctionRoot": "cloudfunctions/",`
 同时 云函数的目录环境也必须和 app.js 中的 env 一致
     wx.cloud.init({
      env:'test'
    })
   

 const cloud = require('wx-server-sdk')
 cloud.init()



2. pages 中调用云函数
  wx.cloud.callFunction({
    name:'', // 和云函数文件夹文件名一致
    data:{   // data 数据传递给 event 参数

    },
    success(res) {

    },
    fail(err){

    }
  })

3. 云函数获取数据库
  ps: 云函数只要有变动，就需要重新部署。否则获取的还是上次部署的云函数代码结果。(上传并部署，不上传 node_moudle)。
  
  小程序本地操控数据库是有权限限制的。可能会导致修改或是更新不成功。使用云函数更新数据具备最高条件没有限制。



## plane
git
webpack
vue
axios 拦截器
数据结构和算法


