var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port){
    console.log('指定端口')
    process.exit(1)
}

var server =http.createServer(function(request, response){
    var parsedUrl = url.parse(request.url,true)
    var path = request.url
    var query =''
    if(path.indexOf('?')>=0){ query = path.substring(path.indexOf('?'))}
    var pathNoquery = parsedUrl.pathname
    var queryObject = parsedUrl.query
    var method = request.method
/********************** */






console.log('得到 http路径\n'+path)
console.log('查询字符串为\n'+query)
console.log('不含查询字符串的路径为\n'+pathNoquery)
if (path == '/style') {
    response.statusCode =200
    response.setHeader(
        'Content-Type', 'text/css;charset=utf-8'
    )
    response.write('body{background-color:#ddd;}h1{color:red;}')
    response.end()
    
}else if(path == '/script'){
    // response.statusCode=201
    response.setHeader(
        'Content-Type','text/javascript;charset=utf-8'
    )
    response.write('alert("走啥呢?")')
    response.end()
}else if(path == '/index'){
    response.statusCode =201
    response.setHeader('Content-Type','text/html;charset=UTF-8')
    response.write('<!DOCTYPE>\n<html>'+ 
    '<head><link rel="styleSheet" href="/style"></head>'+
    '<body>'+
    '<h1>Hello Node.js\n你好朋友</h1>'+
    '<script src="/script">alert("我是script")</script>'+
       '</body></html>')
    response.end()
}else{
    response.statusCode = 404
    response.end()
}






/**************************/
})


server.listen(port)
console.log('监听'+port+'成功\n请用https://https://localhost:'+port)