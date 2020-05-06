const db=wx.cloud.database().collection("db1")
let wupin_name=""
let answer=""
let names=""
Page({
  data: {
    name:"",
    datalist:""
  },
  wupin(event)
  {
    wupin_name=event.detail.value
    console.log(wupin_name)
    
  },
/*  addData()//添加数据
  {
      db.add({
        data:{
          "一号电池":"a",
          "有害垃圾":"b"
        },
        success(res)
        {
          console.log("success_insert",res)
        },
        fail(res){
          console.log("fail")
        }
      })
  },*/
  getData()
  {
    let that=this
      db.where({   
        "x":wupin_name
      })
      .get({
          success(lks)
          {
            if(lks.data[0]!=null)
            { 
              names= lks.data[0].x
              answer=lks.data[0].y
              console.log(lks.data[0],names)
              that.setData({
                  name:lks.data[0].x,
                  datalist : answer
              })
            }
          else
          {
            that.setData({
              name:wupin_name,
              datalist : "没有查询到结果"
            })
          }
          },
          fail(res)
          {
            console.log("fail")
            that.setData({
              name:wupin_name,
              datalist : "查询失败"
            })
          }

      }) 
  },
  /*
  go: function(e)
  {
    var ans=answer;
    console.log("okk",ans)
    this.setData({
      ansss:ans
    })
  }*/


  })
