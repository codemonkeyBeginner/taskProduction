
var stopApp = function(appName) {
    var package = currentPackage(appName)
    var stopRes = shell('am force-stop ' + package, true)
    if(stopRes.code == 0) {
        toastLog('停止' + appName + '成功')
    } else {
        toastLog('停止' + appName + '失败, 错误信息: ' + stopRes.error)
        log('尝试用控件停止')
        common.exitApp(appName)
    }
}
// 
var killApp = function(appName) {
    var package = getPackageName(appName)
    var killRes = shell('am kill-all', true)
    log('killRes', killRes)
}
// killApp('微信')
// stopApp('微信')
var shellIp = function() {
     /*
        shell对象 不生效 返回 undefined`
    */
    var sh = new Shell(true)
    // var ss = sh.exec("ping -c 1 www.baidu.com")
    // log(ss)
    /*
        30次 平均 1.5~1.6 算 2s
        所以超时给3s
    */
    // for (let i = 0; i < 30; i++) {
    //     var x= shell('ping -c 1 -w 3 www.baidu.com', true)
    //     log('x', x)
    // }
   
    /*
        获取本机ip 未生效
    */
    // var ipadd = sh.exec('device_ip_address')
    // log('ipadd', ipadd)
    var se = shell('ip -s')
    // var se = sh.exec('ip')
    log(se)
}

var flyOn = function() {
    var flyStatus = shell('settings put global airplane_mode_on 1; am broadcast -a android.intent.action.AIRPLANE_MODE --ez state true', true)
    if(flyStatus.code == 0) {
        log('飞行 开启 成功')
    } else {
        toastLog('飞行开启失败, 错误信息' + flyStatus.error)
        log('应该做个提醒函数')
    }
}
var flyOff = function() {
    if(flyStatus.code == 0) {
        log('飞行 关闭 成功')
    } else {
        toastLog('飞行关闭失败, 错误信息' + flyStatus.error)
        log('应该做个提醒函数')
    }
}

/*
    shell函数通过用来一次性执行单条命令并获取结果。
    如果有多条命令需要执行，用Shell对象的效率更高。
    这是因为，每次运行shell函数都会打开一个单独的shell进程
    并在运行结束后关闭他，这个过程需要一定的时间；
    而Shell对象自始至终使用同一个shell进程。
    // 
    shell 对象
    new shell(root)
    root {Boolean} 是否以root权限运行一个shell进程，
    默认为false。这将会影响其后使用该Shell对象执行的命令的权限
*/
// var sh = new Shell(true)
// sh.exec("am force-stop com.tencent.mm")
// sh.exit()



// function isRoot() {
// 	var bool = false;
// 	try {
// 		bool = new java.io.File("/system/bin/su").exists() || new java.io.File("/system/xbin/su").exists();
// 	} catch (e) {
// 		print(e);
// 	}
// 	return bool;
// }

// var s = isRoot()
// log('s', s)
// var light = shell("settings get system screen_brightness", true)
// log('light', light)
// var openALi = shell("pm enable com.eg.android.AlipayGphone", true);
// log(openALi)
// shell("pm enable com.eg.android.AlipayGphone", true)

// shell('am start -p com.tencent.mm', true)