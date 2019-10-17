var api = require('./api.js')
var filesOperate = {
    /*
        path 路径
        记录/日期/软件名/ip文件.json
    */
   //
   /*
        创建路径
   */
    producePath : function(dir, appName) {
        var arr = []
        var rootDir = 'sdcard'
        arr.push(rootDir)
        var dir =  dir
        arr.push(dir)
        var date = api.creatYMD()
        arr.push(date)
        var name = appName 
        arr.push(name)
        var fileName = 'ip.json'
        arr.push(fileName)
        var res = ''
        for (let i = 0; i < arr.length; i++) {
            res += '/' + arr[i]
            
        }
        // log(res)
        return res
    },
    /*
        创建 文件和文件夹
    */
    createFile : function(path) {
        var creatStatus = files.createWithDirs(path)
        log('创建状态', creatStatus)
        if(!creatStatus) {
            log('已经创建 IP记录')
            return
        }
    },
    /*
        打开文件 open()
        path 文件路径
        readMode 读写方式

    */
    openFile : function(path, readMode) {
        var mode = readMode
        var readable = open(path, mode = mode)
        log('文件', readable)
    },
    /*
        存储 Ip 记录
    */
    saveIp : function(ipAddress) {
        var ip = ipAddress

    }
}

module.exports = filesOperate