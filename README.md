# YxdPromise
一个用es5实现的promise
#调用方式
```
var p1 = new YxdPromise(function(res, rej){
  setTimeout(function(){
    res('ok')
  }, 2000)
})

p1.then(function(parm){
  console.log(parm)//2s后打印出ok
})
```
